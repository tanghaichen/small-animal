// 首页选项卡走马灯




$(function () {
    var tempWrap = document.getElementById('tempWrap');
    var num = 0;
    var stop;
    // alert(tempWrap.children.length)
    function running() {
        num--;
        tempWrap.style.left = num + 'px';
        if (num == -1438) {
            num = 0;
        }
    }
    stop = setInterval(running, 20);
    tempWrap.onmouseout = function () {
        stop = setInterval(running, 20);
    };
    tempWrap.onmouseover = function () {
        clearInterval(stop)
    };

    $('.parBd:eq(1)').css({
        display:'none'
    })
    $('.lione').mouseover(function(){
        $('.parBd:eq(0)').css({
            display:'block'
        }).siblings('.parBd').css({
            'display':'none'
        })
    });
    $('.litwo').mouseover(function(){
        $('.parBd:eq(1)').css({
            display:'block'
        }).siblings('.parBd').css({
            'display':'none'
        })
    });
    $('.slideGroup ul li').mouseover(function () {
        $(this).removeClass('on').siblings().addClass('on');
    });


});

