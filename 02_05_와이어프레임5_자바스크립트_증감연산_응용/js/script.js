//1. HTML 태그에 버튼 클릭 이벤트 등록
//1-1. 다음 슬라이드 버튼 클릭 이벤트 등록(right-box) 
//1-2. 이전 슬라이드 버튼 클릭 이벤트 등록(left-box) 


//2. 버튼 클릭시 함수 호출 할 함수를 생성
//2-1. 다음 슬라이드 함수 - nextSlideFn()
//2-2. 이전 슬라이드 함수 - prewSlideFn()


//2-1. 다음 슬라이드 함수 - nextSlideFn()

var cnt = 0; //증감 변수는 반드시 초기값이 설정 되어야 한다.
var $slideWrap = document.querySelector('.slide-wrap');
var $page = document.querySelector('.page');
//1초 = (,1000)

// setInterval(nextSlideFn, 3000); //3초 후에 한번씩 자동으로 다음 슬라이드 호출
// setTimeout(nextSlideFn, 5000); //5초 후에 실행하고 끝



function nextSlideFn(){
    cnt++;
    cnt > 3 ? cnt = 0 : cnt; //마지막 슬라이드 번호가 3을 초과하면
                           //3을 초과하면 3으로 고정 
                           //아니면 증가값 그대로

    $slideWrap.style = 'left:' + (-1200*cnt) +'px';
    $page.innerHTML = cnt + 1 + '/4'; 

    // alert('다음 슬라이드 함수 테스트' + cnt);

}


//2-2. 이전 슬라이드 함수 - nextSlideFn()
function prevSlideFn(){
    cnt--;
    cnt < 0 ? cnt = 3 : cnt; //처음 슬라이드(0) 이전이면(-1)
                           //0으로 슬라이드 설정
                           //그렇지 않으면
                           //감소값 그대로

    $slideWrap.style = 'left:' + (-1200*cnt) +'px';
    $page.innerHTML = cnt + 1 + '/4'; 
    // alert('이전 슬라이드 함수 테스트' + cnt);
}



//3. 생성된 함수와 버튼을 연결 해준다. 
//3-1. 다음 슬라이드 버튼 클릭 이벤트에 다음 슬라이드 함수를 붙여 넣는다.
//3-2. 이전 슬라이드 버튼 클릭 이벤트에 이전 슬라이드 함수를 붙여 넣는다.


//4. 연결 테스트 
//4-1. 다음 슬라이드 버튼 클릭 해본다.(함수에 alert() 넣어서 테스트) 
//4-2. 이전 슬라이드 버튼 클릭 해본다.(함수에 alert() 넣어서 테스트) 


//5. 증감 변수 등록 그리고 함수에 증가변수 코딩
//5-1. 다음 슬라이드 함수 안에 cnt++ 증가 연산식 코딩
//5-2. 이전 슬라이드 함수 안에 cnt-- 감소 연산식 코딩

//6.  증감 변수 등록 그리고 함수에 증가변수 테스트 alert
//6-1. 다음 슬라이드 cnt++ 증가 확인
//6-1. 이전 슬라이드 cnt-- 감소 확인



//7. 이동할 슬라이드 박스(.slide-wrap)를 변수 등록

//8. 스타일 시트에서 이동할 슬라이드 박스(.slide-wrap)에 
//   스타일 설정 position:relative; left:0; transition:all .6s;

//9. 슬라이드 버튼 클릭 슬라이드 실행(구현)
//9-1. 다음 슬라이드 버튼 클릭 다음 슬라이드 실행(구현)
//9-2. 이전 슬라이드 버튼 클릭 이전 슬라이드 실행(구현)




// 변수 설정
var cnt = 0; //증감 변수는 반드시 초기값이 설정 되어야 한다.
var $slideWrap = document.querySelector('.slide-wrap');
var $page = document.querySelector('.page');

//함수 생성

function nextSlideFn(){
    cnt++;
   // cnt > 3 ? cnt=0 : cnt; //마지막 슬라이드 번호가 3을 초과하면
                           //3을 초과하면 3으로 고정 
                           //아니면 증가값 그대로

    $slideWrap.style = 'left:' + (-1200*cnt) +'px';
    $page.innerHTML = cnt+1 + '/4';
    // alert('다음 슬라이드 함수 테스트' + cnt);

}


//2-2. 이전 슬라이드 함수 - nextSlideFn()
function prevSlideFn(){
    cnt--;
    //cnt < 0 ? cnt=3 : cnt; //처음 슬라이드(0) 이전이면(-1)
                           //0으로 슬라이드 설정
                           //그렇지 않으면
                           //감소값 그대로
    $slideWrap.style = 'left:' + (-1200*cnt) +'px';
    $page.innerHTML = cnt+1 + '/4';
    // alert('이전 슬라이드 함수 테스트' + cnt);
}


