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

  const tabList = document.createElement("ul");
  tabList.className = "tab-nav";
  filterBar.appendChild(tabList);

  const createButton = (label, filter, isActive = false) => {
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "button badge-filter";
    if (isActive) {
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");
    } else {
      button.setAttribute("aria-pressed", "false");
    }
    button.dataset.filter = filter;
    button.textContent = label;
    listItem.appendChild(button);
    return listItem;
  };

  const orderedLabels = ["Computational Design", "Manufacturing", "Education"];
  const sortedBadges = Array.from(badges.entries())
    .filter((entry) => orderedLabels.includes(entry[1]))
    .sort((a, b) => orderedLabels.indexOf(a[1]) - orderedLabels.indexOf(b[1]));
  tabList.appendChild(createButton("All", "all", true));
  sortedBadges.forEach(([slug, label]) => {
    tabList.appendChild(createButton(label, slug));
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
    document.querySelectorAll("ol.bibliography").forEach((ol) => {
      const items = Array.from(ol.querySelectorAll(":scope > li"));
      const allHidden = items.length > 0 && items.every((item) => isHidden(item));
      const previous = ol.previousElementSibling;
      const toggleHeading = (element, shouldHide) => {
        if (element) {
          element.classList.toggle("filtered-out", shouldHide);
        }
      };

      if (allHidden) {
        ol.classList.add("filtered-out");
        toggleHeading(previous, true);
      } else {
        ol.classList.remove("filtered-out");
        toggleHeading(previous, false);
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
