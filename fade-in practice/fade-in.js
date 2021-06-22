//htmlのfadeinクラスを取得
let fadeInTarget = document.querySelectorAll('.fade-in');
//scrollの時に以下のeventを発生させる
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++) {
    //getboundingclientrect.topはページの一番上からの距離
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    //pageYOffset、document.documentElement.scrollTopは縦方向のスクロール量を取得
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      fadeInTarget[i].classList.add('scroll-in');
    }
  }
});