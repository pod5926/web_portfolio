import $ from 'jquery'
import {moveSlide} from '../modules/Slider';
import {fadeAnime,fadeTitle} from '../modules/Fade';
import {progressbar} from '../modules/ProgressBar';

export default class Home {
  constructor() {
    console.log('home!!')
    $.ajax({ url: '/api/contact.php' }).then(data => {
      console.log(data)
    })
  }
}

$(window).on('load', () => {

  progressbar();
  moveSlide();

  $(".c-splash").delay(3000).fadeOut(800,function(){//ローディング画面を3秒（3000ms）待機してからフェードアウト
  $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
  }); //=====ここまでローディングエリア（splashエリア）を0.8秒でフェードアウトした後に動かしたいJSをまとめる

  // 背景が伸びた後に動かしたい
  $('.c-splash-bg').on('animationend', function() {
    fadeTitle();
  });

  // 文字列変換
  $('.p-food__menu-content-text').each(function () {
    const txt = $(this).html();
    $(this).html(
      txt.replace(/\n/g, '<br>')
    );
  });
});


// scroll時発火
$(window).on('scroll', () => {
  fadeAnime();
});
