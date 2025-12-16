document.addEventListener("DOMContentLoaded", () => {

  // تطبيق الوضع الليلي تلقائياً على أي صفحة
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  // زر التبديل (موجود فقط في الصفحة الرئيسية)
  const themeBtn = document.getElementById("themeToggle");
  if (!themeBtn) return;

  // تغيير النص حسب الوضع الحالي
  themeBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const mode = document.body.classList.contains("dark-mode")
      ? "dark"
      : "light";

    localStorage.setItem("theme", mode);

    themeBtn.textContent =
      mode === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
  });

});
