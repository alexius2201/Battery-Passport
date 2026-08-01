const CHART = {
  cx: 360,
  cy: 360,
  nodeRadius: 200,
  hitRadius: 28,
  nodeSize: 22,
  iconNodeSize: 28,
  labelRadius: 278,
  labelLineHeight: 16,
};

let selectedStageId = null;
let activeActorRole = "";
let activeZoomLevelId = "full";

function polarToCartesian(cx, cy, radius, angleDeg) {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(angleRad),
    y: cy + radius * Math.sin(angleRad),
  };
}

function describeArc(cx, cy, radius, fromAngle, toAngle) {
  const start = polarToCartesian(cx, cy, radius, fromAngle);
  const end = polarToCartesian(cx, cy, radius, toAngle);
  const largeArc = toAngle - fromAngle <= 180 ? 0 : 1;
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

function ensureIconClipPath() {
  const svg = document.getElementById("cycle-chart");
  if (svg.querySelector("#icon-circle-clip")) return;

  const defs = svg.querySelector("defs");
  const clipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
  clipPath.setAttribute("id", "icon-circle-clip");
  clipPath.setAttribute("clipPathUnits", "objectBoundingBox");

  const clipCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  clipCircle.setAttribute("cx", "0.5");
  clipCircle.setAttribute("cy", "0.5");
  clipCircle.setAttribute("r", "0.5");
  clipPath.appendChild(clipCircle);
  defs.appendChild(clipPath);
}

function renderChart() {
  const nodesGroup = document.getElementById("chart-nodes");
  const arrowsGroup = document.getElementById("chart-arrows");
  const stageCount = LIFECYCLE_STAGES.length;
  const angleStep = 360 / stageCount;

  nodesGroup.innerHTML = "";
  arrowsGroup.innerHTML = "";
  ensureIconClipPath();

  LIFECYCLE_STAGES.forEach((stage, index) => {
    const angle = index * angleStep;
    const nextAngle = ((index + 1) % stageCount) * angleStep;
    const pos = polarToCartesian(CHART.cx, CHART.cy, CHART.nodeRadius, angle);
    const midAngle = angle + angleStep / 2;

    const arrowPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    arrowPath.setAttribute("d", describeArc(CHART.cx, CHART.cy, CHART.nodeRadius, angle + 8, nextAngle - 8));
    arrowPath.setAttribute("class", "chart-arrow");
    arrowPath.setAttribute("marker-end", "url(#arrowhead)");
    arrowPath.dataset.fromId = stage.id;
    arrowPath.dataset.toId = LIFECYCLE_STAGES[(index + 1) % stageCount].id;
    arrowsGroup.appendChild(arrowPath);

    const nodeGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    nodeGroup.setAttribute("class", "chart-node");
    nodeGroup.setAttribute("data-id", stage.id);
    nodeGroup.setAttribute("role", "button");
    nodeGroup.setAttribute("tabindex", "0");
    nodeGroup.setAttribute("aria-label", `${stage.label} — click for details`);

    const hitArea = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    hitArea.setAttribute("cx", pos.x);
    hitArea.setAttribute("cy", pos.y);
    hitArea.setAttribute("r", CHART.hitRadius);
    hitArea.setAttribute("class", "chart-node__hit");

    const nodeVisualRadius = stage.icon ? CHART.iconNodeSize : CHART.nodeSize;

    const outerRing = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    outerRing.setAttribute("cx", pos.x);
    outerRing.setAttribute("cy", pos.y);
    outerRing.setAttribute("r", nodeVisualRadius + 6);
    outerRing.setAttribute("class", "chart-node__ring");
    outerRing.setAttribute("stroke", stage.color);

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", pos.x);
    circle.setAttribute("cy", pos.y);
    circle.setAttribute("r", nodeVisualRadius);
    circle.setAttribute("class", "chart-node__dot");
    circle.setAttribute("fill", stage.icon ? "#ffffff" : stage.color);

    const nodeElements = [hitArea, outerRing, circle];

    if (stage.icon) {
      const iconSize = nodeVisualRadius * 2;
      const image = document.createElementNS("http://www.w3.org/2000/svg", "image");
      image.setAttribute("href", stage.icon);
      image.setAttribute("x", pos.x - iconSize / 2);
      image.setAttribute("y", pos.y - iconSize / 2);
      image.setAttribute("width", iconSize);
      image.setAttribute("height", iconSize);
      image.setAttribute("preserveAspectRatio", "xMidYMid slice");
      image.setAttribute("clip-path", "url(#icon-circle-clip)");
      image.setAttribute("class", "chart-node__icon");
      nodeElements.push(image);
    }

    const labelLines = stage.chartLabel || [stage.label];
    const labelPos = polarToCartesian(CHART.cx, CHART.cy, CHART.labelRadius, midAngle);
    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", labelPos.x);
    label.setAttribute("y", labelPos.y);
    label.setAttribute("class", "chart-node__label");
    label.setAttribute("text-anchor", "middle");
    label.setAttribute("dominant-baseline", "middle");

    const lineOffset = ((labelLines.length - 1) * CHART.labelLineHeight) / 2;
    labelLines.forEach((line, lineIndex) => {
      const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      tspan.setAttribute("x", labelPos.x);
      tspan.setAttribute("dy", lineIndex === 0 ? -lineOffset : CHART.labelLineHeight);
      tspan.textContent = line;
      label.appendChild(tspan);
    });

    nodeGroup.append(...nodeElements, label);
    nodesGroup.appendChild(nodeGroup);

    nodeGroup.addEventListener("click", () => selectStage(stage.id));
    nodeGroup.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectStage(stage.id);
      }
    });
  });

  addArrowMarker();
  applyActorFilter();
}

function stageHasActorRole(stage, roleId) {
  if (!roleId || !stage?.dppActors) return false;
  return stage.dppActors.some((actor) => actor.role === roleId);
}

function applyActorFilter() {
  const filterActive = Boolean(activeActorRole);
  let matchCount = 0;

  LIFECYCLE_STAGES.forEach((stage) => {
    if (stageHasActorRole(stage, activeActorRole)) matchCount += 1;
  });

  document.querySelectorAll(".chart-node").forEach((node) => {
    const stage = LIFECYCLE_STAGES.find((item) => item.id === node.dataset.id);
    const matches = !filterActive || stageHasActorRole(stage, activeActorRole);
    node.classList.toggle("chart-node--actor-match", filterActive && matches);
    node.classList.toggle("chart-node--dimmed", filterActive && !matches);
    node.setAttribute("aria-disabled", filterActive && !matches ? "true" : "false");
  });

  document.querySelectorAll(".chart-arrow").forEach((arrow) => {
    const fromStage = LIFECYCLE_STAGES.find((item) => item.id === arrow.dataset.fromId);
    const toStage = LIFECYCLE_STAGES.find((item) => item.id === arrow.dataset.toId);
    const fromMatches = !filterActive || stageHasActorRole(fromStage, activeActorRole);
    const toMatches = !filterActive || stageHasActorRole(toStage, activeActorRole);
    arrow.classList.toggle("chart-arrow--dimmed", filterActive && !(fromMatches && toMatches));
  });

  const countEl = document.getElementById("actor-filter-count");
  if (countEl) {
    countEl.textContent = filterActive
      ? `Highlighting ${matchCount} of ${LIFECYCLE_STAGES.length} lifecycle phases`
      : "";
  }

  if (filterActive && selectedStageId) {
    const selectedStage = LIFECYCLE_STAGES.find((item) => item.id === selectedStageId);
    if (!stageHasActorRole(selectedStage, activeActorRole)) {
      clearSelection();
    }
  }
}

function initActorFilter() {
  const select = document.getElementById("actor-role-filter");
  if (!select || typeof ACTOR_ROLE_LABELS === "undefined") return;

  Object.entries(ACTOR_ROLE_LABELS).forEach(([roleId, label]) => {
    const option = document.createElement("option");
    option.value = roleId;
    option.textContent = label;
    select.appendChild(option);
  });

  select.addEventListener("change", () => {
    activeActorRole = select.value;
    applyActorFilter();
  });

  document.getElementById("actor-filter-clear")?.addEventListener("click", () => {
    activeActorRole = "";
    select.value = "";
    applyActorFilter();
    select.focus();
  });
}

function addArrowMarker() {
  const svg = document.getElementById("cycle-chart");
  if (svg.querySelector("#arrowhead")) return;

  const defs = svg.querySelector("defs");
  const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
  marker.setAttribute("id", "arrowhead");
  marker.setAttribute("markerWidth", "8");
  marker.setAttribute("markerHeight", "8");
  marker.setAttribute("refX", "6");
  marker.setAttribute("refY", "4");
  marker.setAttribute("orient", "auto");

  const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  polygon.setAttribute("points", "0 0, 8 4, 0 8");
  polygon.setAttribute("fill", "#64748b");
  marker.appendChild(polygon);
  defs.appendChild(marker);
}

function selectStage(stageId) {
  selectedStageId = stageId;

  document.querySelectorAll(".chart-node").forEach((node) => {
    const isSelected = node.dataset.id === stageId;
    node.classList.toggle("chart-node--selected", isSelected);
    node.setAttribute("aria-pressed", isSelected ? "true" : "false");
  });

  const stage = LIFECYCLE_STAGES.find((s) => s.id === stageId);
  if (stage) renderDetailPanel(stage);
}

function renderDetailPanel(stage) {
  const panel = document.getElementById("detail-panel");
  panel.classList.remove("detail-panel--empty");

  const passportRows = Object.entries(stage.passportData)
    .map(
      ([key, value]) => `
        <div class="detail-row">
          <dt>${key}</dt>
          <dd>${value}</dd>
        </div>
      `
    )
    .join("");

  const complianceItems = stage.compliance
    .map((item) => `<li>${item}</li>`)
    .join("");

  const dppActorsSection =
    stage.dppActors && stage.dppActors.length
      ? `
    <section class="detail-section">
      <h3>Actors &amp; DPP Responsibilities</h3>
      <p class="detail-section__source">
        Regulation (EU) 2023/1542 — Battery Regulation
        (<a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1542" target="_blank" rel="noopener noreferrer">EUR-Lex ↗</a>)
      </p>
      <div class="detail-actors">
        ${stage.dppActors
          .map(
            (actor) => `
          <article class="detail-actor${activeActorRole && actor.role === activeActorRole ? " detail-actor--filter-match" : activeActorRole ? " detail-actor--filter-dimmed" : ""}" data-actor-role="${actor.role || ""}">
            <h4 class="detail-actor__name">${actor.name}</h4>
            ${actor.articleRefs ? `<p class="detail-actor__refs">${actor.articleRefs}</p>` : ""}
            <ul class="detail-actor__list">
              ${actor.responsibilities.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </article>
        `
          )
          .join("")}
      </div>
    </section>
  `
      : "";

  panel.innerHTML = `
    <button class="detail-panel__close" type="button" aria-label="Clear selection">×</button>
    <div class="detail-panel__header">
      ${stage.icon ? `<img class="detail-panel__icon" src="${stage.icon}" alt="" />` : `<span class="detail-panel__stage-badge" style="background: ${stage.color}">${stage.shortLabel}</span>`}
      <h2>${stage.label}</h2>
    </div>
    <p class="detail-panel__description">${stage.description}</p>

    ${dppActorsSection}

    <section class="detail-section">
      <h3>Passport Data</h3>
      <dl class="detail-grid">${passportRows}</dl>
    </section>

    <section class="detail-section">
      <h3>Compliance & Status</h3>
      <ul class="detail-list">${complianceItems}</ul>
    </section>
  `;

  panel.querySelector(".detail-panel__close").addEventListener("click", clearSelection);
}

function clearSelection() {
  selectedStageId = null;
  document.querySelectorAll(".chart-node").forEach((node) => {
    node.classList.remove("chart-node--selected");
    node.setAttribute("aria-pressed", "false");
  });

  const panel = document.getElementById("detail-panel");
  panel.classList.add("detail-panel--empty");
  panel.innerHTML = `
    <div class="detail-panel__placeholder">
      <div class="detail-panel__placeholder-icon" aria-hidden="true">◎</div>
      <h2>Select a lifecycle stage</h2>
      <p>
        Click any point on the cycle chart to open passport information for
        that stage, including actors and their DPP responsibilities under the
        Battery Regulation.
      </p>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initFeedbackForm();
  initActorFilter();
  initBatteryZoom();
  initTouchBatteryPreviews();
  applyChartResponsiveConfig();
  renderChart();
  initChartResize();
});

function applyChartResponsiveConfig() {
  const w = window.innerWidth;
  if (w < 480) {
    CHART.labelRadius = 242;
    CHART.labelLineHeight = 14;
    CHART.hitRadius = 32;
  } else if (w < 768) {
    CHART.labelRadius = 258;
    CHART.labelLineHeight = 15;
    CHART.hitRadius = 30;
  } else {
    CHART.labelRadius = 278;
    CHART.labelLineHeight = 16;
    CHART.hitRadius = 28;
  }
}

function initChartResize() {
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const activeStage = selectedStageId;
      applyChartResponsiveConfig();
      renderChart();
      if (activeStage) selectStage(activeStage);
    }, 200);
  });
}

function initTouchBatteryPreviews() {
  const terms = document.querySelectorAll(".dpp-battery-term");
  if (!terms.length) return;

  const closeAll = () => {
    terms.forEach((term) => term.classList.remove("is-preview-open"));
  };

  terms.forEach((term) => {
    term.addEventListener("click", (event) => {
      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
      event.preventDefault();
      const isOpen = term.classList.contains("is-preview-open");
      closeAll();
      if (!isOpen) term.classList.add("is-preview-open");
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".dpp-battery-term")) closeAll();
  });
}

function initBatteryZoom() {
  if (typeof BATTERY_ZOOM_LEVELS === "undefined") return;

  const controls = document.getElementById("battery-zoom-controls");
  if (!controls) return;

  controls.innerHTML = BATTERY_ZOOM_LEVELS.map(
    (level) => `
      <button
        type="button"
        class="battery-zoom__control${level.id === activeZoomLevelId ? " battery-zoom__control--active" : ""}"
        data-zoom-id="${level.id}"
        style="--control-accent: ${level.accent}"
        aria-pressed="${level.id === activeZoomLevelId ? "true" : "false"}"
      >
        <span class="battery-zoom__control-label">${level.shortLabel}</span>
        <span class="battery-zoom__control-title">${level.layerName || level.title}</span>
      </button>
    `
  ).join("");

  controls.querySelectorAll(".battery-zoom__control").forEach((button) => {
    button.addEventListener("click", () => selectZoomLevel(button.dataset.zoomId));
  });

  selectZoomLevel(activeZoomLevelId);
}

function selectZoomLevel(levelId) {
  const level = BATTERY_ZOOM_LEVELS.find((item) => item.id === levelId);
  if (!level) return;

  activeZoomLevelId = levelId;

  document.querySelectorAll(".battery-zoom__control").forEach((button) => {
    const isActive = button.dataset.zoomId === levelId;
    button.classList.toggle("battery-zoom__control--active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  const scene = document.getElementById("battery-zoom-scene");
  if (scene) {
    scene.dataset.zoom = levelId;
    scene.setAttribute("aria-label", `${level.title} — 3D exploded battery diagram`);
  }

  const layerOrder = ["level-3", "level-2", "level-1", "full"];
  const activeIndex = layerOrder.indexOf(levelId);

  document.querySelectorAll(".battery-layer").forEach((layer) => {
    const layerId = layer.dataset.layer;
    const layerIndex = layerOrder.indexOf(layerId);
    const isTarget = layerId === levelId;

    layer.classList.remove("battery-layer--highlight", "battery-layer--dimmed");
    layer.style.opacity = "";

    if (isTarget) {
      layer.classList.add("battery-layer--highlight");
      layer.style.setProperty("--layer-accent", level.accent);
      return;
    }

    layer.classList.add("battery-layer--dimmed");

    if (levelId === "full") {
      layer.style.opacity = layerId === "full" ? "" : "0";
      layer.classList.toggle("battery-layer--dimmed", layerId !== "full");
      return;
    }

    if (layerId === "full") {
      layer.style.opacity = "0.28";
      return;
    }

    layer.style.opacity = layerIndex < activeIndex ? "0.45" : "0.1";
  });

  const hint = document.getElementById("battery-zoom-hint");
  if (hint) {
    hint.textContent =
      levelId === "full"
        ? "Assembled pack — CE marking, safety labels & DPP QR code on the exterior"
        : `Exploded view — ${level.layerName}${level.focusActors.length ? ` · ${level.focusActors.join(", ")}` : ""}`;
  }

  renderBatteryZoomDetail(level);
}

function renderBatteryZoomDetail(level) {
  const panel = document.getElementById("battery-zoom-detail");
  if (!panel) return;

  const actorsSection =
    level.focusActors && level.focusActors.length
      ? `
    <section class="battery-zoom__detail-section">
      <h4>Focus Actors</h4>
      <ul class="battery-zoom__actor-list">
        ${level.focusActors.map((actor) => `<li>${actor}</li>`).join("")}
      </ul>
    </section>
  `
      : "";

  const obligationsSection =
    level.dppObligations && level.dppObligations.length
      ? `
    <section class="battery-zoom__detail-section">
      <h4>DPP Obligations</h4>
      <ul class="battery-zoom__obligation-list">
        ${level.dppObligations.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>
  `
      : "";

  panel.innerHTML = `
    <span class="battery-zoom__detail-badge" style="background: ${level.accent}">${level.shortLabel}</span>
    <h3>${level.title}</h3>
    <p class="battery-zoom__detail-layer">${level.layerName}</p>
    <p class="battery-zoom__detail-desc">${level.description}</p>
    ${actorsSection}
    ${obligationsSection}
    <p class="battery-zoom__detail-refs">${level.articleRefs}</p>
  `;
  panel.style.setProperty("--detail-accent", level.accent);
}

const PAGES = {
  home: { id: "page-home", title: "Battery Passport Overview" },
  documents: { id: "page-documents", title: "Document Overview — ESPR Documents" },
  process: { id: "page-process", title: "Battery Passport Interactive Website — Interactive DPP Process" },
  feedback: { id: "page-feedback", title: "Battery Passport Interactive Website — Evaluation & Feedback" },
};

let currentPage = "home";

function initNavigation() {
  document.querySelectorAll("[data-page]").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      navigateTo(trigger.dataset.page);
    });
  });

  window.addEventListener("hashchange", () => {
    const page = getPageFromHash();
    if (page !== currentPage) showPage(page, false);
  });

  showPage(getPageFromHash(), false);
}

function getPageFromHash() {
  const hash = window.location.hash.replace("#", "");
  return PAGES[hash] ? hash : "home";
}

function navigateTo(page) {
  if (!PAGES[page]) return;
  window.location.hash = page;
  showPage(page, true);
}

function showPage(page, updateHash) {
  currentPage = page;

  Object.entries(PAGES).forEach(([key, config]) => {
    const section = document.getElementById(config.id);
    const isActive = key === page;
    section.classList.toggle("page--active", isActive);
    section.hidden = !isActive;
  });

  document.querySelectorAll(".nav__link").forEach((link) => {
    link.classList.toggle("nav__link--active", link.dataset.page === page);
  });

  document.title = PAGES[page].title;
  document.body.classList.remove("page-home", "page-documents", "page-process", "page-feedback");
  document.body.classList.add(`page-${page}`);
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (updateHash && window.location.hash !== `#${page}`) {
    window.location.hash = page;
  }
}

function initFeedbackForm() {
  const stageSelect = document.getElementById("useful-stage");
  LIFECYCLE_STAGES.forEach((stage) => {
    const option = document.createElement("option");
    option.value = stage.id;
    option.textContent = stage.label;
    stageSelect.appendChild(option);
  });

  renderFeedbackList();

  document.getElementById("feedback-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const entry = {
      id: Date.now(),
      rating: formData.get("rating"),
      clarity: formData.get("clarity"),
      usefulStage: formData.get("usefulStage"),
      comments: formData.get("comments")?.trim() || "",
      email: formData.get("email")?.trim() || "",
      submittedAt: new Date().toLocaleString(),
    };

    const submissions = getFeedbackSubmissions();
    submissions.unshift(entry);
    localStorage.setItem("battery-passport-feedback", JSON.stringify(submissions));

    form.reset();
    renderFeedbackList();
    showFeedbackConfirmation();
  });
}

function getFeedbackSubmissions() {
  try {
    return JSON.parse(localStorage.getItem("battery-passport-feedback") || "[]");
  } catch {
    return [];
  }
}

function renderFeedbackList() {
  const list = document.getElementById("feedback-list");
  const submissions = getFeedbackSubmissions();

  if (submissions.length === 0) {
    list.innerHTML = '<li class="feedback-list__empty">No feedback submitted yet.</li>';
    return;
  }

  list.innerHTML = submissions
    .map((entry) => {
      const stage = LIFECYCLE_STAGES.find((s) => s.id === entry.usefulStage);
      return `
        <li class="feedback-item">
          <div class="feedback-item__meta">
            <span class="feedback-item__rating">${entry.rating}/5</span>
            <time>${entry.submittedAt}</time>
          </div>
          <p class="feedback-item__clarity">Clarity: ${formatClarity(entry.clarity)}</p>
          ${stage ? `<p class="feedback-item__stage">Most useful: ${stage.label}</p>` : ""}
          ${entry.comments ? `<p class="feedback-item__comments">"${entry.comments}"</p>` : ""}
        </li>
      `;
    })
    .join("");
}

function formatClarity(value) {
  const labels = {
    yes: "Very clear",
    somewhat: "Somewhat clear",
    no: "Needs improvement",
  };
  return labels[value] || value;
}

function showFeedbackConfirmation() {
  const form = document.getElementById("feedback-form");
  const existing = form.querySelector(".form-success");
  if (existing) existing.remove();

  const message = document.createElement("p");
  message.className = "form-success";
  message.textContent = "Thank you! Your feedback has been saved.";
  form.prepend(message);

  setTimeout(() => message.remove(), 4000);
}
