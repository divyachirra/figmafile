 const toggleBtn = document.getElementById("theme-toggle");
    const icon = document.getElementById("theme-icon");

    function updateIcon(isDark) {
      icon.textContent = isDark ? "🌞" : "🌙";
    }

    window.addEventListener("DOMContentLoaded", () => {
      const savedTheme = localStorage.getItem("theme");
      const isDark = savedTheme === "dark";
      if (isDark) document.body.classList.add("dark-mode");
      updateIcon(isDark);
    });

    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      updateIcon(isDark);
    });
    function showSection(sectionId) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(sec => sec.style.display = 'none');

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
      activeSection.style.display = 'block';
    }
  }

  // Optional: Show 'home' by default when page loads
  window.addEventListener('DOMContentLoaded', () => {
    showSection('home');
  });