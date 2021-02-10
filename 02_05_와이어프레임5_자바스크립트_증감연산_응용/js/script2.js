var cnt = 0;
var $slideWrap = document.querySelector('.slide-wrap');

function nextSlideFn(){
    cnt++;

    cnt > 3 ? cnt = 0 : cnt;

    $slideWrap.style = 'left:' + (-1200*cnt) + 'px';

}

function prevSlideFn(){
    cnt--;

    cnt < 0 ? cnt = 3 : cnt;

    $slideWrap.style = 'left:' + (-1200*cnt) + 'px';

}