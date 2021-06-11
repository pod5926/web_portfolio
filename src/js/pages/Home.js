import $ from 'jquery'
import ProgressBar from 'progressbar.js'
import {moveSlide} from '../modules/Slider';

export default class Home {
  constructor() {
    console.log('home!!')
    $.ajax({ url: '/api/contact.php' }).then(data => {
      console.log(data)
    })
  }
}

// barつき  分割

const bar = new ProgressBar.Line('.c-splash__text', {
  easing:'easeInOut',//アニメーション
  duration: 1000,//時間
  strokeWidth: 1,//太さ
  color: '#555',//色
  trailWidth: 1,//ゲージベースの太さ
  trailColor: '#ccc',//ゲージベース色
  text: {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      padding: '0',
      margin: '-30px 0 0 0',
      transform: 'translate(-50%,-50%)',
      'font-size': '1.2rem',
      color: '#fff',
    },
    autoStyleContainer: false
  },
  step: function (state, bar) {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar.animate(1.0, function () {
  $('.c-splash__text').fadeOut(10);
  $('.loader_cover--up').addClass('coveranime');
  $('.loader_cover--down').addClass('coveranime');
  $(".c-splash").fadeOut();
});

$(window).on('load', () => {

  // fadeTitle-view
  $('.js-fadeTitle-view').children().addBack().contents().each(function () {
    $(this).replaceWith($(this).text().replace(/(\S)/g, '<span class="text-move">$&</span>'));
  });

  $('.text-move').slice(1, 3).addClass('text--small');

  setTimeout(() => {
    $('.js-fadeTitle-view').addClass("is-active");

  }, 900);

  // 文字列変換
  $('.p-food__menu-content-text').each(function () {
    const txt = $(this).html();
    $(this).html(
      txt.replace(/\n/g,'<br>')
    );
  })
});

moveSlide();