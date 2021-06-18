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

   /*===========================================================*/
    /*機能編 4-2-3	背景色が伸びる（右から左） */
    /*===========================================================*/

    //=====ここから背景が伸びた後に動かしたいJSをまとめる
    $('.c-splash-bg').on('animationend', function() {
      fadeTitle();
    });

  // 文字列変換
  $('.p-food__menu-content-text').each(function () {
    const txt = $(this).html();
    $(this).html(
      txt.replace(/\n/g,'<br>')
    );
  })
});


// scroll時発火
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
