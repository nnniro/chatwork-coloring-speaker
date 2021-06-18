// window.addEventListener("load", main, false);
// function main(e) {
var jsInitCheckTimer = setInterval(jsLoaded, 1000);
function jsLoaded() {
if (document.querySelector("p._speakerName") != null) {
    clearInterval(jsInitCheckTimer);
coloring();
  }
}
// }
var timeoutId ;
// var r = document.getElementsByClassName('sc-gbOuXE dfuEXQ');
// var r = document.getElementsByClassName('sc-bhlBdH fmzeeU');
var r = document.getElementById('_timeLine');
if (r !== null) {
  r.addEventListener('scroll', function() {
      console.log('scroll detected');
    // setTimeout()がセットされていたら無視
  	if ( timeoutId ) return ;

  	timeoutId = setTimeout( function () {
  		timeoutId = 0 ;

  		// 処理内容
      coloring();
  	}, 500 ) ;
  }, {passive: true});
}

function coloring() {
  var myStatusName = document.getElementById('_globalHeader');
  var myName = myStatusName.firstElementChild.lastElementChild.lastElementChild.firstElementChild.nextElementSibling.textContent;
  var p = document.getElementsByClassName('_speakerName');
  for (var i = 0; i < p.length; i++) {
    var c1 = p.item(i).parentNode.parentNode.parentNode.parentNode;
    if (p.item(i).textContent === myName) {
      c1.style.background = '#f6e4ed';
        while ( c1.nextElementSibling != null && c1.nextElementSibling.querySelector("p._speakerName") == null) {
          c1.nextElementSibling.style.background = '#f6e4ed';
          c1 = c1.nextElementSibling;
        }
    }
  }
  var timeLine = document.getElementById('_timeLine');
  var lastDiv = timeLine.firstElementChild.lastElementChild;
  // var q = document.getElementsByClassName('sc-eVrGFk VgZoj');
  // q.item(0).parentNode.style.background = '#FFFFFF';
  lastDiv.style.background = '#FFFFFF';
}

// -------今後実装予定--------------------------------------------------------
// 優先度：高
// ├─過去のものを読み込むと反映されない
// └─新しく発言したものも反映されない    --ページの最初の読み込みしか現段階では反映できていない，新しい更新（何で指定すべき？）ごとにsetInterval?しなおす
//     →ページの更新の種類調べる，setIntervalのこと調べる
// 優先度：中
// 色の変更できるポップアップ
//
// 優先度：低
// // _myStatusName内の構造が違っていたとしても"_nameAid*"のclass名から取得できるようにする
// ラストの発言者が自分だったとき，一番下のスペースにも色がつくの消す
