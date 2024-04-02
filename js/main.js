const btnDarkMode = document.querySelector('.dark-mode-btn');
// 1.проверка тёмной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia("(prefers-color-sheme: dark)").matches) {
    btnDarkMode.classList.add("dark-mode-btn_active");
    document.body.classList.add("dark");
}
//2. проверка тёмной темы в LocalStorage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn_active");
    document.body.classList.add("dark");
} else if (localStorage.getItem('darkMode') === 'light') {
    btnDarkMode.classList.remove("dark-mode-btn_active");
    document.body.classList.remove("dark");
}

// если меняются системные настройки, меняем тему
window.matchMedia("(prefers-color-sheme: dark)").addEventListener('change', () => {
    const newColorSheme = event.matches ? "dark" : "light";
  
    if (newColorSheme === 'dark') {
        btnDarkMode.classList.add("dark-mode-btn_active");
        document.body.classList.add("dark");
        localStorage.setItem('darkMode', 'dark');
    } else {
        btnDarkMode.classList.remove("dark-mode-btn_active");
        document.body.classList.remove("dark");
        localStorage.setItem('darkMode', 'light');
    }
});

//  включение ночного режима
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn_active");
    const isDark = document.body.classList.toggle('dark');
    if (isDark) {
        localStorage.setItem('darkMode', 'dark');
    } else {
        localStorage.setItem('darkMode', 'light');
    }
}








