//1. <div id="bar"></div> 태그를 동적으로 추가
//2. css적용
//3. 스크롤이벤트 적용

$('<div class="scroll-bar-indicator"></div>')
    .css({
        width: 0,
        height: '7px',
        backgroundColor: 'rgb(139, 174, 209)',
        position: 'fixed',
        top: 0,
        left: 0,
        border: 0,
        padding: 0,
        margin: 0
    })
    .prependTo('body');


//스크롤이벤트 - document.onscroll
$(document).scroll(() => {
    // console.log(new Date());
    // 스크롤바의 위치..
    // document.scrollTop
    // console.log($(document).scrollTop());
    // console.log($(document).outerHeight(true));

    //문서의 세로길이(스크롤바의 최대 위치): 100% = 스크롤바의 위치 : x
    let x = $(document).scrollTop()* 100 / ($(document).outerHeight(true)-$(window).outerHeight(true));
    // console.log(x);

    $('.scroll-bar-indicator').css('width', x + '%');
});
