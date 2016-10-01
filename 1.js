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
    var shanchu = document.getElementById('shanchu');
    shanchu.onmouseover = function() {
        document.getElementById('scg').style.display = 'block';
    }
    shanchu.onmouseout = function() {
        document.getElementById('scg').style.display = 'none';
    }
    /*var btn = document.getElementById('btn');
    btn.onclick = function() {
        var box = document.getElementById('box');
        var x = 5 px;
        var y = 5 px;
        box.style.left += x;
    }
*/
}(window))
