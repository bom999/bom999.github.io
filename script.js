document.addEventListener("DOMContentLoaded", () => {
  console.log("JS is working!");
});

// Получаем строку запроса из текущего URL
const params = new URLSearchParams(window.location.search);

// Извлекаем значение параметра "u"
const u = params.get('u');

console.log(u); // выведет: 123
if(u)location.href ='https://www.youtube.com/embed/' + u
