//네비게이션(Navigation) : GNB(메인메뉴) & LNB(서브메뉴)
//마우스를 메인메뉴에 클릭하면 해당 서브메뉴가 아래로 나타난다.
//1. 메인메뉴를 클릭하면 해당 메인메뉴에 on 클래스가 추가된다.
//   해당 버튼을 제외한 모든 버튼은 클래스가 삭제(removeclass)된다.
//2. 해당 아래 서브메뉴에도 on 클래스가 추가(addClass) 된다.
//   해당 서브메뉴를 제외한 모든 서브메뉴는 클래스가 삭제(removeclass)된다.
//3. 해당 메인메뉴와 서브메뉴의 영역을 떠나면(mouseleave == mouseout)
//   메인메뉴와 서브메뉴 모두 초기화 모든 클래스 삭제(removeclass)된다. 
// var nav = 객체 / init:function : 메서드 / init 프로퍼티
// window.onload = function(){

// }

var nav = {
    init:function(){
        this.navFn();
        //this.forFn();
    },
    navFn:function(){
        
        var $mainBtn = document.getElementsByClassName('main-btn'); 
        var $sub     = document.getElementsByClassName('sub'); 
        var $navArea = document.getElementsByClassName('nav-area');

            //메인0 버튼 클릭 추가(add) 이벤트(event) 리스너(Listener) 등록
            //버튼 타겟 EventTarget ==> $mainBtn[0] 

            //1. $mainBtn 요소 배열 처리 : [].slice.call($mainBtn);
            //2. 변수에 대입
            $mainBtn = [].slice.call($mainBtn);

            //3. 변수.forEach(function(1요소,2인덱스,3배열){})
            // $mainBtn.forEach();
            // $mainBtn.forEach(function(매개변수){});
            $mainBtn.forEach(function(el,idx,arr){
                $mainBtn[idx].addEventListener('mouseenter', function(event){
                    event.preventDefault();                 
                    for(i=0; i<=3;i++){
                        $mainBtn[i].classList.remove('on');            
                        $sub[i].classList.remove('on');
                    }
                    $mainBtn[idx].classList.add('on');
                    $sub[idx].classList.add('on');
                },false);   
            });

           // 마우스 이벤트로 반복문 처리 안된다.
           // 그래서 $navArea 영역 객체를 객체 배열처리 한다.
           // 객체를 배열로 처리하는건 Array.prototype.slice.call(객체)
           // 객체를 배열로 처리하는건              [].slice.call(객체)
           // 그리고 객체 배열 반복문(forEach())을 활용 한다.

            /*
           var obj = {irum:'김유신'}; //객체선언 리터럴 방식 
           var arr = ['김유신','이순신','김좌진']; //배열선언 리터럴 방식
                console.log( arr[2] );
            */
            
            

           // li.$navArea 영역을 떠나면 메인 메뉴, 서브메뉴 모든 클래스 삭제

           // 1. 배열처리 [].slice.call(클래스요소);

            $navArea = [].slice.call($navArea); // 클래스요소를 배열처리
            console.log( $navArea ); //배열 결과 값 확인

            // 2. 반복문 처리 배열처리된 변수.forEach(function(element,index));
            // 마우스 event는 forEach 반복문 사용 
            $navArea.forEach(function(el, idx){
                $navArea[idx].addEventListener('mouseleave',function(){
                    $mainBtn[idx].classList.remove('on');
                    $sub[idx].classList.remove('on');
                },false);
            });          
           
    },
    forFn:function(){ //반복문 알고리즘
        //1 ~ 100 까지 출력하는 반복문 1씩 증가
        for(var i=1; i<=100; i+=2 ){ 
            console.log( i );
        }
        //짝수(Even)
        for(var i=2; i<=100; i+=2){ // 2 4 6 ... 100
            console.log('짝수 : '+ i);
        }

        //홀수(Odd)
        for(var i=1; i<=100; i+=2 ){ // 1 3 5 7 9 ... 99
            console.log('홀수 : '+ i);
        }

        //5의 배수
        for(var i=5; i<=100; i+=5){ // 5 10 15 20 ... 100
            console.log(`5의배수 : ${i} `);
        }

        //구구단 2단
        // for(var i=1; i<=9; i++){
        //     console.log(`2 * ${i}  = ${2*i}`);
        //     // console.log('2 * ' + i + '=' + (2*i));
        // }
        
        // //구구단 3단
        // for(var i=1; i<=9; i++){
        //     console.log(`3 * ${i}  = ${3*i}`);
        //     // console.log('2 * ' + i + '=' + (2*i));
        // }
        
        // //구구단 4단
        // for(var i=1; i<=9; i++){
        //     console.log(`4 * ${i}  = ${4*i}`);
        //     // console.log('2 * ' + i + '=' + (2*i));
        // }

        var cnt = 0;
        var txt = '';
        var $outTable = document.querySelector('#out-table');

        //구구단 2 ~ 9단
        for(var i=1; i<=9; i++){    // 2 3 4 5 ... 9
            txt += '<tr><th>' + i + '단</th></tr>';
            
            for(var j=2; j<=9; j++){ // 1~9 1~9 1~9 1~9 ... 1~9
                cnt++; //반복 횟수 누적 합
                var x = (i*j)< 10 ? ('0' + (i*j)) : (i*j);

                txt += '<tr><td>' + i + '*' + j + '=' + x + '</td></tr>';
                // txt += `<tr><td>${i}*${j} = ${x}</td></tr>`;
            }
        }


        // console.log(txt);
        //$outTable.innerHTML = txt;

        txt=''; //변수 내용 삭제

        //구구단 2 ~ 9 가로 출력 <tr> 줄 <td> 
        for(var j=1; j<=9; j++){ //1~9 : 줄 시작
            txt+='<tr>';  
            for(var i=2; i<=9; i++){ //2~9 : 8칸
                var x = (i*j) < 10 ? ('0' + (i*j)) : (i*j); 
                txt += '<td>' + i +'*' + j + '=' + x + '</td>';
            }
            txt+='</tr>'; //줄 끝
        }

        // $outTable.innerHTML = txt;
        
        txt ='';
        
        //구구단 2,4,6,8단 가로출력
        for(var i=1; i<=9; i++){
            txt +='<tr>';    
            for(var j=2; j<=9; j++){
                var x = (i*j) < 10 ? ('0'+(i*j)) : (i*j);
                txt += '<td>' + j + '*' + i + '=' + x + '</td>'; 
            }
            txt+='</tr>';
        }
        
        //$outTable.innerHTML=txt;

        txt = '';
        for(var i=1; i<=9; i++){
            txt +='<tr>';
            for(var j=2; j<=9; j++){
                txt += '<td>' + j + '*'+ i + '=' + (i*j) + '</td>';  
            }    
            txt +='</tr>';
        }
        $outTable.innerHTML = txt;
    }

   

};

nav.init();  //로딩시

