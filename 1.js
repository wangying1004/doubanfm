(function() {
    var xiala = document.getElementById("xiala");
    var fufei = document.getElementById('fufei');
    xiala.onmouseover = function() {
        fufei.style.display = 'block';
    }
    xiala.onmouseout = function() {
        fufei.style.display = 'none';
    }

    
    var jindutiao =document.getElementById('jindutiao');
    var jindu=document.getElementById('jindu');
    var fristaudio=document.getElementById('fristaudio');
      fristaudio.ontimeupdate=function(){
     var baifen = fristaudio.currentTime / fristaudio.duration;
        jindutiao.style.width = baifen *230+ "px";
        }
     jindu.onmousedown = function(event) {
        var length = event.clientX - jindutiao.offsetLeft;
        var percent = (length-792) / jindu.offsetWidth; //可视宽度
        jindutiao.style.width = percent * 230 + "px";
        fristaudio.currentTime = percent * fristaudio.duration; //当前时间/视频持续时间
    }
    jindutiao.onmousedown = function(event) {
            var length = event.clientX - jindutiao.offsetLeft;
            var percent = (length-792) / jindu.offsetWidth;
            jindutiao.style.width = percent * 230 + "px";
            fristaudio.currentTime = percent * fristaudio.duration;
        }
        var nextjindutiao =document.getElementById('nextjindutiao');
    var nextjindu=document.getElementById('nextjindu');
    var nextaudio=document.getElementById('nextaudio');
      nextaudio.ontimeupdate=function(){
     var baifen = nextaudio.currentTime / nextaudio.duration;
        nextjindutiao.style.width = baifen *230+ "px";
        }
     nextjindu.onmousedown = function(event) {
        var length = event.clientX - nextjindutiao.offsetLeft;
        var percent = (length-792) / nextjindu.offsetWidth; //可视宽度
        nextjindutiao.style.width = percent * 230 + "px";
        nextaudio.currentTime = percent * nextaudio.duration; //当前时间/视频持续时间
    }
    nextjindutiao.onmousedown = function(event) {
            var length = event.clientX - nextjindutiao.offsetLeft;
            var percent = (length-792) / nextjindu.offsetWidth;
            nextjindutiao.style.width = percent * 230 + "px";
            nextaudio.currentTime = percent * nextaudio.duration;
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
    var playfu= document.getElementById('playfu');
    var playfus= document.getElementById('playfus');
    var nextplayfu=document.getElementById('nextplayfu');
    nextplay.onclick = function() {
        if (gemingtu.style.display == 'block' && zhuanjitu.style.display == 'block'&&nextaudio.play()&&nextjindu.style.display=="block"&&nextjindutiao.style.display=="block"&&playfu.style.display=='block'&&nextplayfu.style.display=='block') {
            gemingtu.style.display = 'none';
            zhuanjitu.style.display = 'none';
            nextaudio.pause();
            fristaudio.play();
            nextjindu.style.display='none';
            nextjindutiao.style.display='none';
            playfu.style.display='none';
            nextplayfu.style.display='none';
        } else {
            gemingtu.style.display = 'block';
            zhuanjitu.style.display = 'block';
            nextaudio.play();
            fristaudio.pause();
            nextjindu.style.display='block';
            nextjindutiao.style.display='block';
            playfu.style.display='block';
            nextplayfu.style.display='block';
        }

    }
    nextplayfu.onclick = function() {
        if (geming.style.display == 'none' && zhuanji.style.display == 'none'&&fristaudio.pause()&&jindu.style.display=="none"&&jindutiao.style.display=="none"&&play.style.display=='none'&&nextplay.style.display=='none') {
            geming.style.display = 'block';
            zhuanji.style.display = 'block';
            fristaudio.play();
            nextaudio.pause();
            jindu.style.display='block';
            jindutiao.style.display='block';
            play.style.display='block';
            nextplay.style.display='block';
        } else {
            geming.style.display = 'none';
            zhuanji.style.display = 'none';
            fristaudio.pause();
            nextaudio.play();
            jindu.style.display='none';
            jindutiao.style.display='none';
            play.style.display='none';
            nextplay.style.display='none';
        }

    }
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
        fristaudio.pause();
    }
    var contplay=document.getElementById('contplay');
    contplay.onclick=function(){
    	document.getElementById('playerfu').style.display='none';
    	 fristaudio.play();
    }
    var playfu = document.getElementById('playfu');
    playfu.onclick=function(){
    	document.getElementById('playerfus').style.display="block";
        nextaudio.pause();
    }
    var contplays=document.getElementById('contplays');
    contplays.onclick=function(){
    	document.getElementById('playerfus').style.display='none';
    	 fristaudio.play();
    }
     var box=document.getElementById('box');
     var bigbox=document.getElementById('bigbox');
    var tbtn = document.getElementById('tbtn');
    var ntbtn = document.getElementById('ntbtn');
    tbtn.onclick=function(){
    	bigbox.style.left ='0px';
    }
     ntbtn.onclick=function(){
    	bigbox.style.left ='-675px';
    }
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
