import $ from 'jquery'
import ProgressBar from 'progressbar.js'
import {moveSlide} from '../modules/Slider';
import {fadeAnime,fadeTitle} from '../modules/Fade';

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


  fadeTitle();

  // 文字列変換
  $('.p-food__menu-content-text').each(function () {
    const txt = $(this).html();
    $(this).html(
      txt.replace(/\n/g,'<br>')
    );
  })
});

moveSlide();

$(window).on('scroll', () => {
  fadeAnime();
});


// /*===========================================================*/
// /* 関数をまとめる */
// /*===========================================================*/

// // 画面をスクロールをしたら動かしたい場合の記述
// $(window).scroll(function () {
//     fadeAnime();//印象編 4 最低限おぼえておきたい動きの関数を呼ぶ
//     PageTopAnime();//機能編 8-1-6 ページの指定の高さを超えたら出現し、フッター手前で止まる関数を呼ぶ
// 	VivusAnime();//印象編 9-4-1 SVG アニメーションの関数を呼ぶ
// });

// // ページが読み込まれたらすぐに動かしたい場合の記述
// $(window).on('load',function(){

//     //機能編 4-1-5 ロゴアウトラインアニメーション
//     $("#splash_logo").delay(3000).fadeOut('slow');//ロゴを3秒（3000ms）待機してからフェードアウト

//     stroke.play();//印象編 9-4-1 SVG アニメーションの実行

//     //=====ここからローディングエリア（splashエリア）をフェードアウトした後に動かしたいJSをまとめる
//     $("#splash").delay(3000).fadeOut(800,function(){//ローディング画面を3秒（3000ms）待機してからフェードアウト
//     $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
//     PageTopAnime();//機能編 8-1-6 ページの指定の高さを超えたら出現し、フッター手前で止まる関数を呼ぶ
// 	VivusInit(); //印象編 9-4-1 SVG アニメーション初期設定
// 	VivusAnime();//印象編 9-4-1 SVG アニメーションの関数を呼ぶ
//     }); //=====ここまでローディングエリア（splashエリア）を0.8秒でフェードアウトした後に動かしたいJSをまとめる

//    /*===========================================================*/
//     /*機能編 4-2-3	背景色が伸びる（右から左） */
//     /*===========================================================*/

//     //=====ここから背景が伸びた後に動かしたいJSをまとめる
//     $('.splashbg').on('animationend', function() {
//       fadeAnime();//印象編 4 最低限おぼえておきたい動きの関数を呼ぶ
//      });
//     //=====ここまで背景が伸びた後に動かしたいJSをまとめる
// });
