// スライドショー------------------------------------------------
$(".slider").slick({
  fade: true, //切り替えをフェードで行う。初期値はfalse。
  autoplay: true, //自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 3000, //次のスライドに切り替わる待ち時間
  speed: 1000, //スライドの動きのスピード。初期値は300。
  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 1, //スライドを画面に3枚見せる
  slidesToScroll: 1, //1回のスクロールで3枚の写真を移動して見せる
  arrows: true, //左右の矢印あり
  prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
  dots: true, //下部ドットナビゲーションの表示
  pauseOnFocus: false, //フォーカスで一時停止を無効
  pauseOnHover: false, //マウスホバーで一時停止を無効
  pauseOnDotsHover: false, //ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$(".slider").on("touchmove", function (event, slick, currentSlide, nextSlide) {
  $(".slider").slick("slickPlay");
});

// タブメニュー-------------------------------------------------
//任意のタブにURLからリンクするための設定
function GethashID(hashIDName) {
  if (hashIDName) {
    //タブ設定
    $(".tab li")
      .find("a")
      .each(function () {
        //タブ内のaタグ全てを取得
        var idName = $(this).attr("href"); //タブ内のaタグのリンク名（例）#lunchの値を取得
        if (idName == hashIDName) {
          //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
          var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
          $(".tab li").removeClass("active"); //タブ内のliについているactiveクラスを取り除き
          $(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
          //表示させるエリア設定
          $(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
          $(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加
        }
      });
  }
}

//タブをクリックしたら
$(".tab a").on("click", function () {
  var idName = $(this).attr("href"); //タブ内のリンク名を取得
  GethashID(idName); //設定したタブの読み込みと
  return false; //aタグを無効にする
});

// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on("load", function () {
  $(".tab li:first-of-type").addClass("active"); //最初のliにactiveクラスを追加
  $(".area:first-of-type").addClass("is-active"); //最初の.areaにis-activeクラスを追加
  var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
  console.log(hashName);
  GethashID(hashName); //設定したタブの読み込み
});

// フェードアップ-------------------------------------------------
// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime() {
  //ふわっと動くきっかけのクラス名と動きのクラス名の設定
  $(".fadeUpTrigger").each(function () {
    //fadeInUpTriggerというクラス名が
    var elemPos = $(this).offset().top - (-50); //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeUp"); // 画面内に入ったらfadeInというクラス名を追記
    } else {
      $(this).removeClass("fadeUp"); // 画面外に出たらfadeInというクラス名を外す
    }
  });

  //関数でまとめることでこの後に違う動きを追加することが出来ます
  $(".fadeDownTrigger").each(function () {
    //fadeInDownTriggerというクラス名が
    var elemPos = $(this).offset().top - (-50); //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeDown"); // 画面内に入ったらfadeDownというクラス名を追記
    } else {
      $(this).removeClass("fadeDown"); // 画面外に出たらfadeDownというクラス名を外す
    }
  });
} //ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
  fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述



