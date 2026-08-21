/**
 * Guided website tour (driver.js)
 * Targets elements via [data-tour="…"] attributes.
 */
(function () {
  const TOUR_STORAGE_KEY = "battery-passport-tour-completed";
  const AUTO_START_DELAY_MS = 900;
  const PAGE_SWITCH_MS = 180;

  /** @type {ReturnType<NonNullable<ReturnType<typeof getDriverFactory>>> | null} */
  let activeDriver = null;

  function goToPage(page) {
    if (!page) return;
    if (typeof navigateTo === "function") {
      navigateTo(page);
      return;
    }
    if (typeof showPage === "function") {
      showPage(page, true);
    }
  }

  function waitForVisible(selector, timeoutMs = 1400) {
    return new Promise((resolve) => {
      const start = Date.now();
      const tick = () => {
        const el = document.querySelector(selector);
        const pageHidden = el?.closest(".page")?.hasAttribute("hidden");
        if (el && !pageHidden) {
          resolve(el);
          return;
        }
        if (Date.now() - start >= timeoutMs) {
          resolve(el || null);
          return;
        }
        requestAnimationFrame(tick);
      };
      tick();
    });
  }

  function markTourCompleted() {
    try {
      localStorage.setItem(TOUR_STORAGE_KEY, "true");
    } catch {
      /* ignore quota / private mode */
    }
  }

  function hasCompletedTour() {
    try {
      return localStorage.getItem(TOUR_STORAGE_KEY) === "true";
    } catch {
      return false;
    }
  }

  function getDriverFactory() {
    const api = window.driver?.js?.driver || window.driver?.driver;
    return typeof api === "function" ? api : null;
  }

  function buildStepDefs() {
    return [
      {
        page: "home",
        element: '[data-tour="page-header"]',
        popover: {
          title: "Welcome to the Battery Passport dashboard",
          description:
            "This site explains EU Battery Regulation and Digital Product Passport (DPP) requirements. Follow the tour to see how regulation tables, the lifecycle chart, and actor modules work together.",
          side: "bottom",
          align: "center",
        },
      },
      {
        page: "documents",
        element: '[data-tour="regulation-table"]',
        popover: {
          title: "Regulation data tables",
          description:
            "Search ESPR articles and filter by Chapter → Article → Title. Matching words are highlighted in the table. The same controls are available for Battery Regulation documents further down the page.",
          side: "bottom",
          align: "start",
        },
      },
      {
        page: "process",
        element: '[data-tour="chart-section"]',
        popover: {
          title: "Interactive lifecycle chart",
          description:
            "Six stages map the battery value chain—from mining to recycling. Click any node to open passport metrics, compliance status, and role-based DPP responsibilities under the Battery Regulation.",
          side: "top",
          align: "center",
        },
      },
      {
        page: "process",
        element: '[data-tour="dpp-modules"]',
        popover: {
          title: "DPP layers & actor access",
          description:
            "Zoom through physical layers (exterior → casing → BMS → cells) to see which actors access each depth and which DPP obligations apply—including due diligence and material composition data.",
          side: "bottom",
          align: "center",
        },
      },
      {
        page: "home",
        element: undefined,
        popover: {
          title: "You're ready to explore",
          description:
            'Re-open this guide anytime with <strong>Take a Tour</strong> in the navigation. Use Document Overview for article lookup, or Interactive DPP Process for charts and layer zoom.',
          side: "over",
          align: "center",
        },
      },
    ];
  }

  function createTourDriver() {
    const createDriver = getDriverFactory();
    if (!createDriver) {
      console.warn("[tour] driver.js is not loaded.");
      return null;
    }

    const stepDefs = buildStepDefs();

    const driverObj = createDriver({
      showProgress: true,
      animate: true,
      overlayOpacity: 0.62,
      smoothScroll: true,
      allowClose: true,
      stagePadding: 10,
      stageRadius: 12,
      popoverOffset: 12,
      nextBtnText: "Next",
      prevBtnText: "Previous",
      doneBtnText: "Finish",
      progressText: "{{current}} of {{total}}",
      onDestroyStarted: () => {
        if (!driverObj.isActive()) return;
        markTourCompleted();
        driverObj.destroy();
        activeDriver = null;
      },
      onCloseClick: () => {
        markTourCompleted();
        driverObj.destroy();
        activeDriver = null;
      },
      onPopoverRender: (popover) => {
        const footer = popover.footer;
        if (!footer || footer.querySelector(".driver-skip-btn")) return;

        const skipBtn = document.createElement("button");
        skipBtn.type = "button";
        skipBtn.className = "driver-skip-btn";
        skipBtn.textContent = "Skip";
        skipBtn.addEventListener("click", () => {
          markTourCompleted();
          driverObj.destroy();
          activeDriver = null;
        });

        footer.insertBefore(skipBtn, footer.firstChild);
      },
      onNextClick: async () => {
        if (driverObj.isLastStep()) {
          markTourCompleted();
          driverObj.destroy();
          activeDriver = null;
          return;
        }

        const nextIndex = (driverObj.getActiveIndex() ?? 0) + 1;
        const nextStep = stepDefs[nextIndex];
        if (nextStep?.page) {
          goToPage(nextStep.page);
          if (nextStep.element) {
            await waitForVisible(nextStep.element);
          } else {
            await new Promise((r) => setTimeout(r, PAGE_SWITCH_MS));
          }
        }
        driverObj.moveNext();
      },
      onPrevClick: async () => {
        const prevIndex = (driverObj.getActiveIndex() ?? 0) - 1;
        if (prevIndex < 0) return;

        const prevStep = stepDefs[prevIndex];
        if (prevStep?.page) {
          goToPage(prevStep.page);
          if (prevStep.element) {
            await waitForVisible(prevStep.element);
          } else {
            await new Promise((r) => setTimeout(r, PAGE_SWITCH_MS));
          }
        }
        driverObj.movePrevious();
      },
      steps: stepDefs.map((step) => {
        const config = {
          popover: {
            ...step.popover,
            showButtons: ["next", "previous", "close"],
          },
        };
        if (step.element) {
          config.element = step.element;
        }
        return config;
      }),
    });

    return driverObj;
  }

  async function startTour() {
    if (activeDriver) {
      try {
        activeDriver.destroy();
      } catch {
        /* already destroyed */
      }
      activeDriver = null;
    }

    const driverObj = createTourDriver();
    if (!driverObj) return;

    activeDriver = driverObj;
    goToPage("home");
    await waitForVisible('[data-tour="page-header"]');
    driverObj.drive(0);
  }

  function initTourControls() {
    const startBtn = document.querySelector('[data-tour="tour-start-btn"]');
    if (startBtn) {
      startBtn.addEventListener("click", (event) => {
        event.preventDefault();
        startTour();
      });
    }

    if (!hasCompletedTour()) {
      window.setTimeout(() => {
        if (!hasCompletedTour() && !activeDriver) {
          startTour();
        }
      }, AUTO_START_DELAY_MS);
    }
  }

  document.addEventListener("DOMContentLoaded", initTourControls);

  window.BatteryPassportTour = {
    start: startTour,
    reset: () => {
      try {
        localStorage.removeItem(TOUR_STORAGE_KEY);
      } catch {
        /* ignore */
      }
    },
  };
})();
