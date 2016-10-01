(function() {
    var xiala = document.getElementById("xiala");
    var fufei = document.getElementById('fufei');
    xiala.onmouseover = function() {
        fufei.style.display='block';
    }
    xiala.onmouseout= function() {
        fufei.style.display='none';
    }

    var shoucang= document.getElementById('shoucang');
    var like=document.getElementById('like');
    shoucang.onclick=function(){
    	like.style.display="block";
    }
    like.onclick=function(){
    	like.style.display="none";
    }

}(window))
