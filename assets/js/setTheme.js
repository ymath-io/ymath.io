// this file is not used
const isDark = localStorage.darkMode === 'true' || (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);document.body.parentElement.classList.toggle('dark', isDark)