document.addEventListener("DOMContentLoaded", () => {
  const filterBar = document.getElementById("publication-badge-filters");
  if (!filterBar) {
    return;
  }

  const entries = Array.from(document.querySelectorAll(".bibliography > li"));
  const badges = new Map();

  entries.forEach((item) => {
    const entry = item.querySelector(".publication-entry");
    if (!entry) {
      return;
    }

    const slug = entry.dataset.badge;
    const label = entry.dataset.badgeLabel;
    if (slug && label && !badges.has(slug)) {
      badges.set(slug, label);
    }
  });

  if (badges.size === 0) {
    filterBar.classList.add("unloaded");
    return;
  }

  const createButton = (label, filter, isActive = false) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "badge-filter";
    if (isActive) {
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");
    } else {
      button.setAttribute("aria-pressed", "false");
    }
    button.dataset.filter = filter;
    button.textContent = label;
    return button;
  };

  const allowedLabels = new Set(["Education", "Manufacturing", "Requirements"]);
  const sortedBadges = Array.from(badges.entries())
    .filter((entry) => allowedLabels.has(entry[1]))
    .sort((a, b) => a[1].localeCompare(b[1]));
  filterBar.appendChild(createButton("All", "all", true));
  sortedBadges.forEach(([slug, label]) => {
    filterBar.appendChild(createButton(label, slug));
  });

  const setActive = (activeButton) => {
    filterBar.querySelectorAll("button.badge-filter").forEach((button) => {
      const isActive = button === activeButton;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  };

  const isHidden = (item) => item.classList.contains("filtered-out") || item.classList.contains("unloaded");

  const updateGroupedVisibility = () => {
    document.querySelectorAll("h2.bibliography").forEach((heading) => {
      heading.classList.remove("filtered-out");
      let iterator = heading.nextElementSibling;
      let hideHeading = true;

      while (iterator && iterator.tagName !== "H2") {
        if (iterator.tagName === "OL") {
          const ol = iterator;
          const items = Array.from(ol.querySelectorAll(":scope > li"));
          const allHidden = items.length > 0 && items.every((item) => isHidden(item));

          if (allHidden) {
            ol.classList.add("filtered-out");
            if (ol.previousElementSibling) {
              ol.previousElementSibling.classList.add("filtered-out");
            }
          } else {
            hideHeading = false;
            ol.classList.remove("filtered-out");
            if (ol.previousElementSibling) {
              ol.previousElementSibling.classList.remove("filtered-out");
            }
          }
        }
        iterator = iterator.nextElementSibling;
      }

      if (hideHeading) {
        heading.classList.add("filtered-out");
      }
    });
  };

  const applyFilter = (filter) => {
    entries.forEach((item) => {
      const entry = item.querySelector(".publication-entry");
      const badge = entry ? entry.dataset.badge : "";
      const shouldShow = filter === "all" || (badge && badge === filter);
      item.classList.toggle("filtered-out", !shouldShow);
    });

    updateGroupedVisibility();
  };

  filterBar.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) {
      return;
    }

    setActive(button);
    applyFilter(button.dataset.filter);
  });

  applyFilter("all");
});
