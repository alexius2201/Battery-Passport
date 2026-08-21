function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightText(text, query) {
  const escaped = escapeHtml(text ?? "");
  const terms = query.trim().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return escaped;

  const pattern = new RegExp(`(${terms.map(escapeRegex).join("|")})`, "gi");
  return escaped.replace(pattern, '<mark class="search-highlight">$1</mark>');
}

function uniqueSortedValues(rows, key) {
  return [...new Set(rows.map((row) => row[key]).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
  );
}

function rowMatchesSearch(row, columns, query) {
  if (!query) return true;
  const normalized = query.toLowerCase();
  return columns.some((col) => String(row[col.key] ?? "").toLowerCase().includes(normalized));
}

function populateSelectOptions(selectEl, options, currentValue) {
  selectEl.innerHTML =
    `<option value="">All</option>` +
    options
      .map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`)
      .join("");

  if (currentValue && options.includes(currentValue)) {
    selectEl.value = currentValue;
  } else {
    selectEl.value = "";
  }
}

function renderFilterableTable(container, { columns, rows, selectFilters = [], cascadeOrder = null }) {
  container.innerHTML = "";
  container.className = "data-table-wrap";

  const isCascade = Array.isArray(cascadeOrder) && cascadeOrder.length > 0;

  const toolbar = document.createElement("div");
  toolbar.className = "table-filters";
  toolbar.innerHTML = `
    <div class="table-filters__controls">
      <label class="table-filters__field">
        <span class="table-filters__label">Search</span>
        <input
          class="table-filters__input"
          type="search"
          placeholder="Search all columns…"
          autocomplete="off"
        />
      </label>
      ${selectFilters
        .map(
          (filter) => `
        <label class="table-filters__field">
          <span class="table-filters__label">${filter.label}</span>
          <select class="table-filters__select" data-filter-key="${filter.key}">
            <option value="">All</option>
            ${
              isCascade
                ? ""
                : filter.options
                    .map(
                      (option) =>
                        `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`
                    )
                    .join("")
            }
          </select>
        </label>`
        )
        .join("")}
      <button class="table-filters__clear" type="button">Clear filters</button>
    </div>
    <p class="table-filters__count" aria-live="polite"></p>
  `;

  const tableScroll = document.createElement("div");
  tableScroll.className = "table-scroll";

  const table = document.createElement("table");
  table.className = "data-table";
  table.innerHTML = `
    <thead>
      <tr>
        ${columns.map((col) => `<th scope="col">${col.label}</th>`).join("")}
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = table.querySelector("tbody");
  const renderedRows = rows.map((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = columns.map((col) => `<td>${escapeHtml(row[col.key])}</td>`).join("");
    tbody.appendChild(tr);
    return { row, tr };
  });

  tableScroll.appendChild(table);
  container.appendChild(toolbar);
  container.appendChild(tableScroll);

  const searchInput = toolbar.querySelector(".table-filters__input");
  const clearButton = toolbar.querySelector(".table-filters__clear");
  const countEl = toolbar.querySelector(".table-filters__count");
  const selectEls = [...toolbar.querySelectorAll(".table-filters__select")];

  function getSelectValues() {
    return Object.fromEntries(selectEls.map((el) => [el.dataset.filterKey, el.value]));
  }

  function updateCascadeSelects() {
    if (!isCascade) return;

    const query = searchInput.value.trim();
    const activeSelects = {};

    cascadeOrder.forEach((key) => {
      const selectEl = selectEls.find((el) => el.dataset.filterKey === key);
      if (!selectEl) return;

      const parentKeys = cascadeOrder.slice(0, cascadeOrder.indexOf(key));
      const matchingRows = rows.filter((row) => {
        if (!rowMatchesSearch(row, columns, query)) return false;
        return parentKeys.every((parentKey) => !activeSelects[parentKey] || row[parentKey] === activeSelects[parentKey]);
      });

      const options = uniqueSortedValues(matchingRows, key);
      populateSelectOptions(selectEl, options, selectEl.value);
      activeSelects[key] = selectEl.value;
    });
  }

  function filterRows() {
    const query = searchInput.value.trim();
    const activeSelects = getSelectValues();

    let visibleCount = 0;
    renderedRows.forEach(({ row, tr }) => {
      const matchesSearch = rowMatchesSearch(row, columns, query);
      const matchesSelects = selectEls.every((el) => {
        const value = activeSelects[el.dataset.filterKey];
        return !value || row[el.dataset.filterKey] === value;
      });
      const visible = matchesSearch && matchesSelects;
      tr.hidden = !visible;

      columns.forEach((col, index) => {
        tr.cells[index].innerHTML = highlightText(row[col.key], query);
      });

      if (visible) visibleCount += 1;
    });

    countEl.textContent = `Showing ${visibleCount} of ${rows.length} rows`;
  }

  function applyFilters() {
    updateCascadeSelects();
    filterRows();
  }

  searchInput.addEventListener("input", applyFilters);
  selectEls.forEach((el) => el.addEventListener("change", applyFilters));
  clearButton.addEventListener("click", () => {
    searchInput.value = "";
    selectEls.forEach((el) => {
      el.value = "";
    });
    applyFilters();
    searchInput.focus();
  });

  applyFilters();
}

function renderEsprTables() {
  renderEsprDocumentsTable();
  renderEsprActorsTable();
  renderBatteryRegulationDocumentsTable();
  renderBatteryRegulationActorsTable();
}

function renderEsprDocumentsTable() {
  const container = document.getElementById("espr-documents-table");
  if (!container || typeof ESPR_DOCUMENTS === "undefined") return;

  renderFilterableTable(container, {
    columns: [
      { key: "chapter", label: "Chapter" },
      { key: "article", label: "Article" },
      { key: "title", label: "Title" },
      { key: "summary", label: "Summary of Content" },
    ],
    rows: ESPR_DOCUMENTS,
    cascadeOrder: ["chapter", "article", "title"],
    selectFilters: [
      { key: "chapter", label: "Chapter" },
      { key: "article", label: "Article" },
      { key: "title", label: "Title" },
    ],
  });
}

function renderEsprActorsTable() {
  const container = document.getElementById("espr-actors-table");
  if (!container || typeof ESPR_ACTORS === "undefined") return;

  renderFilterableTable(container, {
    columns: [
      { key: "actor", label: "Actor / Entity" },
      { key: "reference", label: "ESPR Reference" },
      { key: "scope", label: "Primary Scope / Role" },
      { key: "responsibilities", label: "Key Legal Responsibilities & Obligations" },
    ],
    rows: ESPR_ACTORS,
    selectFilters: [
      {
        key: "scope",
        label: "Scope / Role",
        options: uniqueSortedValues(ESPR_ACTORS, "scope"),
      },
    ],
  });
}

function renderBatteryRegulationDocumentsTable() {
  const container = document.getElementById("battery-regulation-documents-table");
  if (!container || typeof BATTERY_REGULATION_DOCUMENTS === "undefined") return;

  renderFilterableTable(container, {
    columns: [
      { key: "chapter", label: "Chapter" },
      { key: "article", label: "Article" },
      { key: "title", label: "Article Title" },
      { key: "summary", label: "Summary" },
    ],
    rows: BATTERY_REGULATION_DOCUMENTS,
    cascadeOrder: ["chapter", "article", "title"],
    selectFilters: [
      { key: "chapter", label: "Chapter" },
      { key: "article", label: "Article" },
      { key: "title", label: "Article Title" },
    ],
  });
}

function renderBatteryRegulationActorsTable() {
  const container = document.getElementById("battery-regulation-actors-table");
  if (!container || typeof BATTERY_REGULATION_ACTORS === "undefined") return;

  renderFilterableTable(container, {
    columns: [
      { key: "actor", label: "Actor / Entity" },
      { key: "reference", label: "Battery Regulation Reference" },
      { key: "scope", label: "Primary Scope / Role" },
      { key: "responsibilities", label: "Key Legal Responsibilities and Obligations" },
    ],
    rows: BATTERY_REGULATION_ACTORS,
    selectFilters: [
      {
        key: "actor",
        label: "Actor / Entity",
        options: uniqueSortedValues(BATTERY_REGULATION_ACTORS, "actor"),
      },
    ],
  });
}

document.addEventListener("DOMContentLoaded", renderEsprTables);
