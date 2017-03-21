// // $(function() {
// //         $("#button1").on({
// //         	'click':function() {
// //         		var nozaki = ["あいうえお","かきくけこ","さしすせそ"];
// //         		var string = nozaki[Math.floor(Math.random() * string.length)];
// //         		if ($(".a").find("li").length) {
// //         			$(".a li").remove();
// //         		} else {
// //         			$(".a").text(string);
// //         		}
				
// // 			}
// //         });
// // });
     
// //  $(function() {
// //         $("#button2").on({
// //         	'click':function() {
// //         		if ($(".b").find("li").length) {
// //         			$(".b li").remove();
// //         		} else {
// //         			$(".b").append ("<li>かきくけこ</li>");
// //         		}
				
// // 			}
// //         });
// // });

// $(function() {
//         $("#button1").click(function(){
//         		var nozaki = ["あいうえお","かきくけこ","さしすせそ"];
//         		var string = nozaki[Math.floor(Math.random() * nozaki.length)];
// 			$(".a").text(string);
//         });
// });

//  $(function() {
//         $("#button3").on({
//         	'click':function() {
//         		var nozaki = ["あいうえお","かきくけこ","さしすせそ"];
//         		var string = nozaki[Math.floor(Math.random() * nozaki.length)];
//         		var ns = $("<li>string</li>")
//         		if ($(".c").find("li").length) {
//         			$(".c li").remove();
//         		} else {
//         			$(".c").append(ns);
//         		}
				
// 			}
//         });
// });

//  $(function() {
//         $("#button4").on({
//         	'click':function() {
//         		if ($(".d").find("li").length) {
//         			$(".d li").remove();
//         		} else {
//         			$(".d").append ("<li>たちつてと</li>");
//         		}
				
// 			}
//         });
// });

//  $(function() {
//         $("#button5").on({
//         	'click':function() {
//         		if ($(".e").find("li").length) {
//         			$(".e li").remove();
//         		} else {
//         			$(".e").append ("<li>なにぬねの</li>");
//         		}
				
// 			}
//         });
// });

//  $(function() {
//         $("#button6").on({
//         	'click':function() {
//         		if ($(".f").find("li").length) {
//         			$(".f li").remove();
//         		} else {
//         			$(".f").append ("<li>はひふへほ</li>");
//         		}
				
// 			}
//         });
// });


$('.add-btn').click(function(){
    var words = ["ステップのレベルが上がった⭐︎","good","絶対にできるよ！","元気と勇気⭐︎","頑張っているの知ってるよ⭐︎"]
    var word = words[Math.floor(Math.random() * words.length)]
    $(this).next('.text').text(word);
});

$('.add-btn').click(function(){
    var menues = ["腹筋","背筋","スクワット","腕立て","パドブレ"]
    var menu = menues[Math.floor(Math.random() * menues.length)]
    $(this).next('.text').text(word);
});

$('.add-btn').click(function(){
    var menbers = ["TAIKI","HIKARU","OMICHI","TAIHEI",""]
    var menber = menbers[Math.floor(Math.random() * menbers.length)]
    $(this).next('.text').text(word);
});

$('.add-btn').click(function(){
    var kibuns = ["ふわっと","かっこよく","かわいく","るんるんで","不思議っぽく"]
    var kibun = kibuns[Math.floor(Math.random() * kibuns.length)]
    $(this).next('.text').text(word);
});

$('.add-btn').click(function(){
    var kaisuus = ["１０回","２０回","３０回","７０回","５回"]
    var kaisuu = kaisuus[Math.floor(Math.random() * kaisuus.length)]
    $(this).next('.text').text(word);
});

$('.add-btn').click(function(){
    var meigens = ["自分の足を信じてBY　おみち","悩んでる時間あるなら練習しろと思うBY　たいき","特殊な訓練を受けてるからBY　ひかる","境目がわからないところがポイントだから　BYだいへい","ダンスを習うことを選んだ人にダンスが出来ない人はいないよBY　たいき"]
    var meigen = meigens[Math.floor(Math.random() * meigens.length)]
    $(this).next('.text').text(word);
});

$('.delete-btn1').click(function(){
    $('.text1,.text3,.text5').text("");
});

$('.delete-btn2').click(function(){
    $('.text2,.text4,.text6').text("");
});















