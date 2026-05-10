/* ═══════════════════════════════════════════════
   PPNI 2026 — app.js
   Theme toggle (dark/light) + mobile sidebar
   ═══════════════════════════════════════════════ */

/**
 * Toggle dark / light mode.
 * Called by the .theme-toggle button in every page's sidebar.
 */
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("ppni-theme", next);
  updateThemeIcon(next);
}

/** Update the moon/sun icon to reflect current theme. */
function updateThemeIcon(theme) {
  const icons = document.querySelectorAll(".theme-icon");
  icons.forEach(function (icon) {
    icon.textContent = theme === "dark" ? "🌙" : "☀️";
  });
}

/** Open sidebar on mobile. */
function toggleSidebar() {
  document.body.classList.toggle("sidebar-open");
}

/** Close sidebar on mobile (called by overlay click). */
function closeSidebar() {
  document.body.classList.remove("sidebar-open");
}

/* ── Init on DOM ready ── */
document.addEventListener("DOMContentLoaded", function () {
  // Sync theme icon with current theme
  const theme = document.documentElement.getAttribute("data-theme") || "dark";
  updateThemeIcon(theme);

  // Close sidebar when navigating (on mobile)
  const navItems = document.querySelectorAll(".sidebar-nav .nav-item");
  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      closeSidebar();
    });
  });

  // Close sidebar on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeSidebar();
    }
  });
});
