import $ from 'jquery'
import 'slick-carousel'

export function moveSlide(){
$('.slider').slick({
		fade:true,//切り替えをフェードで行う。初期値はfalse。
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
		speed:1000,//スライドの動きのスピード。初期値は300。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		slidesToShow: 1,//スライドを画面に3枚見せる
		slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: false,//左右の矢印なし
    prevArrow:'<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
    dots:false,
    pauseOnFocus: false,//フォーカスで一時停止を無効
    pauseOnHover: false,//マウスホバーで一時停止を無効
    pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});

// //スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
// $('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
//     $('.slider').slick('slickPlay');
// });

}
