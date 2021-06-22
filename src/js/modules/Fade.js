import $ from 'jquery'

export function fadeAnime(){
	// じわっ（ぼかしから出現）

	$('.js-blur').each(function(){ //blurTriggerというクラス名が
		const elemPos = $(this).offset().top-20;//要素より、50px上の
		const scroll = $(window).scrollTop();
		const windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
      $(this).addClass('is-active');// 画面内に入ったらis-activeというクラス名を追記
		}else{
      $(this).removeClass('is-active');// 画面外に出たらis-activeというクラス名を外す
		}
		});
}

export function fadeTitle(){
  // fadeTitle-view
  $('.js-fadeTitle-view').children().addBack().contents().each(function () {
    $(this).replaceWith($(this).text().replace(/(\S)/g, '<span class="text-move">$&</span>'));
  });

  $('.text-move').slice(1, 3).addClass('text--small');

  setTimeout(() => {
    $('.js-fadeTitle-view').addClass("is-active");

  }, 500);
}