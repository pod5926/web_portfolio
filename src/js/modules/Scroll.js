import $ from 'jquery'

export function scrollTop() {
		const scroll = $(window).scrollTop(); //スクロール値を取得
		if (scroll >= 200){//200pxスクロールしたら
			$('.c-pageTop').removeClass('downMove');		// downMoveというクラス名を除去して
			$('.c-pageTop').addClass('upMove');			// upMoveというクラス名を追加して出現
		}else{//それ以外は
			if($('.c-pageTop').hasClass('upMove')){//upMoveというクラス名が既に付与されていたら
				$('.c-pageTop').removeClass('upMove');	//  upMoveというクラス名を除去し
				$('.c-pageTop').addClass('downMove');	// downMoveというクラス名を追加して非表示
			}
		}

		const wH = window.innerHeight; //画面の高さを取得
		const footerPos =  $('.p-footer').offset().top; //footerの位置を取得
		if(scroll+wH >= (footerPos+10)) {
			const pos = (scroll+wH) - footerPos+10 //スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得し
			$('.c-pageTop').css('bottom',pos);	//.c-pageTopに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
		}else{//それ以外は
			if($('.c-pageTop').hasClass('upMove')){//upMoveというクラス名がついていたら
				$('.c-pageTop').css('bottom','10px');// 下から10pxの位置にページリンクを指定
			}
		}
}

// .c-pageTopをクリックした際の設定
$('.c-pageTop a').on('click',function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});
