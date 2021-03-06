const $  = (e) => document.querySelector(e),
      $$ = (e) => document.querySelectorAll(e);

function engines () {
  return {
    g: ['https://google.com/search?q=', 'Google'],
    i: ['https://ixquick.com/do/search?q=', 'Ixquick'],
    d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
    yx: ['https://yandex.ru/search/?text=', 'Yandex'],
    yt: ['https://youtube.com/results?search_query=', 'Youtube'],
    n: ['https://search.naver.com/search.naver?query=', 'Naver']
  };
}

const { parse, stringify } = JSON;

const nodes = (elem) =>
      Array.prototype.slice.call($(elem).children);

var place = localStorage.place || 'san diego';

$('.weather .edit').onclick = () =>
  $('.weather-config').classList.add('show');

$('.weather-config input').onkeyup = (e) => {
  if (e.key == 'Enter') {
    localStorage.place = e.target.value;
    window.location.reload();
  }
  else if (e.keyCode == 27)
    e.target.parentNode.classList.remove('show');
};

(function () {
  if (localStorage.getItem("todo") === null)
    localStorage.todo = '[]';
})();

new Todo().display;
new Weather(place).getWeather;
new Powerline();
