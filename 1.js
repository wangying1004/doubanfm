(function() {
    var xiala = document.getElementById("xiala");
    var fufei = document.getElementById('fufei');
    xiala.onmouseover = function() {
        fufei.style.display = 'block';
    }
    xiala.onmouseout = function() {
        fufei.style.display = 'none';
    }

    var shoucang = document.getElementById('shoucang');
    var like = document.getElementById('like');
    shoucang.onclick = function() {
        like.style.display = "block";
    }
    like.onclick = function() {
        like.style.display = "none";
    }
    shoucang.onmouseover=function(){
    	document.getElementById('verylike').style.display='block';
    }
    shoucang.onmouseout=function(){
    	document.getElementById('verylike').style.display='none';
    }

    var nextplay = document.getElementById('nextplay');
    var gemingtu = document.getElementById('gemingtu');
    var zhuanjitu = document.getElementById('zhuanjitu');
    nextplay.onclick = function() {
        if (gemingtu.style.display == 'block' && zhuanjitu.style.display == 'block') {
            gemingtu.style.display = 'none';
            zhuanjitu.style.display = 'none';
        } else {
            gemingtu.style.display = 'block';
            zhuanjitu.style.display = 'block';
        }

    }
    var nextplay = document.getElementById('nextplay');
    nextplay.onmouseover = function() {
        document.getElementById('next').style.display = 'block';
    }
    nextplay.onmouseout = function() {
        document.getElementById('next').style.display = 'none';
    }
    var shanchu = document.getElementById('shanchu');
    shanchu.onmouseover = function() {
        document.getElementById('scg').style.display = 'block';
    }
    shanchu.onmouseout = function() {
        document.getElementById('scg').style.display = 'none';
    }
    var play = document.getElementById('play');
    play.onclick=function(){
    	document.getElementById('playerfu').style.display="block";
    }
    var contplay=document.getElementById('contplay');
    contplay.onclick=function(){
    	document.getElementById('playerfu').style.display='none';
    }
    /*var btn = document.getElementById('btn');
    btn.onclick = function() {
        var box = document.getElementById('box');
        var x = 5 px;
        var y = 5 px;
        box.style.left += x;
    }
*/
    var xta =document.getElementById('xta');
    var xtaa =document.getElementById('xtaa');
    var xtb =document.getElementById('xtb');
    var xtbb =document.getElementById('xtbb');
    var xtc =document.getElementById('xtc');
    var xtcc =document.getElementById('xtcc');
    var xtd =document.getElementById('xtd');
    var xtdd =document.getElementById('xtdd');
    var xte =document.getElementById('xte');
    var xtee =document.getElementById('xtee');
    var xtf =document.getElementById('xtf');
    var xtff =document.getElementById('xtff');
    xta.onmouseover=function(){
    	xtaa.style.display="block";
    	document.getElementById('a').style.display="block";
    	document.getElementById('b').style.display="none";
    	document.getElementById('c').style.display="none";
    	document.getElementById('d').style.display="none";
    	document.getElementById('e').style.display="none";
    	document.getElementById('f').style.display="none";
    	document.getElementById('wa').style.display="block";
    	document.getElementById('wb').style.display="none";
    	document.getElementById('wc').style.display="none";
    	document.getElementById('wd').style.display="none";
    	document.getElementById('we').style.display="none";
    	document.getElementById('wf').style.display="none";
    }
     xta.onmouseout=function(){
    	xtaa.style.display="none";
    }
    xtb.onmouseover=function(){
    	xtbb.style.display="block";
    	document.getElementById('b').style.display="block";
    	document.getElementById('a').style.display="none";
    	document.getElementById('c').style.display="none";
    	document.getElementById('d').style.display="none";
    	document.getElementById('e').style.display="none";
    	document.getElementById('f').style.display="none";
    	document.getElementById('wb').style.display="block";
    	document.getElementById('wa').style.display="none";
    	document.getElementById('wc').style.display="none";
    	document.getElementById('wd').style.display="none";
    	document.getElementById('we').style.display="none";
    	document.getElementById('wf').style.display="none";

    }
    xtb.onmouseout=function(){
    	xtbb.style.display="none";
    }
    xtc.onmouseover=function(){
    	xtcc.style.display="block";
    	document.getElementById('c').style.display="block";
    	document.getElementById('a').style.display="none";
    	document.getElementById('b').style.display="none";
    	document.getElementById('d').style.display="none";
    	document.getElementById('e').style.display="none";
    	document.getElementById('f').style.display="none";
    	document.getElementById('wc').style.display="block";
    	document.getElementById('wb').style.display="none";
    	document.getElementById('wa').style.display="none";
    	document.getElementById('wd').style.display="none";
    	document.getElementById('we').style.display="none";
    	document.getElementById('wf').style.display="none";

    }
    xtc.onmouseout=function(){
    	xtcc.style.display="none";
    }
    xtd.onmouseover=function(){
    	xtdd.style.display="block";
    	document.getElementById('d').style.display="block";
    	document.getElementById('a').style.display="none";
    	document.getElementById('b').style.display="none";
    	document.getElementById('c').style.display="none";
    	document.getElementById('e').style.display="none";
    	document.getElementById('f').style.display="none";
    	document.getElementById('wd').style.display="block";
    	document.getElementById('wb').style.display="none";
    	document.getElementById('wc').style.display="none";
    	document.getElementById('wa').style.display="none";
    	document.getElementById('we').style.display="none";
    	document.getElementById('wf').style.display="none";

    }
    xtd.onmouseout=function(){
    	xtdd.style.display="none";
    }
     xte.onmouseover=function(){
    	xtee.style.display="block";
    	document.getElementById('e').style.display="block";
    	document.getElementById('a').style.display="none";
    	document.getElementById('b').style.display="none";
    	document.getElementById('c').style.display="none";
    	document.getElementById('d').style.display="none";
    	document.getElementById('f').style.display="none";
    	document.getElementById('we').style.display="block";
    	document.getElementById('wb').style.display="none";
    	document.getElementById('wc').style.display="none";
    	document.getElementById('wd').style.display="none";
    	document.getElementById('wa').style.display="none";
    	document.getElementById('wf').style.display="none";

    }
    xte.onmouseout=function(){
    	xtee.style.display="none";
    }
    xtf.onmouseover=function(){
    	xtff.style.display="block";
    	document.getElementById('f').style.display="block";
    	document.getElementById('a').style.display="none";
    	document.getElementById('b').style.display="none";
    	document.getElementById('c').style.display="none";
    	document.getElementById('d').style.display="none";
    	document.getElementById('e').style.display="none";
    	document.getElementById('wf').style.display="block";
    	document.getElementById('wb').style.display="none";
    	document.getElementById('wc').style.display="none";
    	document.getElementById('wd').style.display="none";
    	document.getElementById('we').style.display="none";
    	document.getElementById('wa').style.display="none";

    }
    xtf.onmouseout=function(){
    	xtff.style.display="none";
    }
}(window))
