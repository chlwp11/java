var cnt = 0;
var $slideWrap = document.querySelector('.slide-wrap');
var $slideWrap2 = document.querySelector('.slide-wrap2');
var $slideWrap3 = document.querySelector('.slide-wrap3');
var $page = document.querySelector('.page');
setInterval(freeimgFn, 3000);
function nextSlideFn(){
    cnt++;
    cnt > 3 ? cnt=0 : cnt;
    $slideWrap.style = 'left:' + (-1200*cnt) + 'px';
    $page.innerHTML = cnt+1 + '/4';
}

function prevSlideFn(){
    cnt--;
    cnt < 0 ? cnt=3 : cnt;
    $slideWrap.style = 'left:' + (-1200*cnt) + 'px';
    $page.innerHTML = cnt+1 + '/4';
}

function freeimgFn(){
    cnt++;
    cnt > 2 ? cnt=0 : cnt;
    $slideWrap2.style = 'left:' + (-400*cnt) + 'px';
    $slideWrap3.style = 'left:' + (-400*cnt) + 'px';
}

