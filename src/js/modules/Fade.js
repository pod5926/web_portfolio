import $ from 'jquery'

export function fadeAnime(){
	// じわっ（ぼかしから出現）

	$('.blur-Trigger').each(function(){ //blurTriggerというクラス名が
		const elemPos = $(this).offset().top-20;//要素より、50px上の
		const scroll = $(window).scrollTop();
		const windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
      $(this).addClass('blur');// 画面内に入ったらblurというクラス名を追記
		}else{
      $(this).removeClass('blur');// 画面外に出たらblurというクラス名を外す
		}
		});

    //4-8 スーッ（枠線が伸びて出現）

    $('.lineTrigger').each(function(){ //lineTriggerというクラス名が
		const elemPos = $(this).offset().top-50;//要素より、50px上の
		const scroll = $(window).scrollTop();
		const windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('lineanime');// 画面内に入ったらlineanimeというクラス名を追記
		}else{
			$(this).removeClass('lineanime');// 画面外に出たらlineanimeというクラス名を外す
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

  }, 900);
}