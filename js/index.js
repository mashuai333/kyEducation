var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
if (width < height) {
    // console.log(width + " " + height);
    $print = $('#print');
    $print.width(height);
    $print.height(width);
    $print.css('top', (height - width) / 2);
    $print.css('left', 0 - (height - width) / 2);
    $print.css('transform', 'rotate(90deg)');
    $print.css('transform-origin', '50% 50%');
}
var evt = "onorientationchange" in window ? "orientationchange" : "resize";
window.addEventListener(evt, function () {
    // console.log(evt);
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    $print = $('#print');
    if (width > height) {
        $print.width(width);
        $print.height(height);
        $print.css('top', 0);
        $print.css('left', 0);
        $print.css('transform', 'none');
        $print.css('transform-origin', '50% 50%');
    }
    else {
        $print.width(height);
        $print.height(width);
        $print.css('top', (height - width) / 2);
        $print.css('left', 0 - (height - width) / 2);
        $print.css('transform', 'rotate(90deg)');
        $print.css('transform-origin', '50% 50%');
    }

}, false);


var mySwiper = new Swiper('#swiper', {
    noSwiping: true,
    noSwipingClass: 'stop-swiping',
    slidesPerView: 1,
    loop: false,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    on: {
        reachEnd: function () {
            // console.log('到了最后一个slide');
        },
        slideChangeTransitionStart: function () {
            if (this.activeIndex == 10) {
                $(".maincontent").css({
                    'background-color': '#267639'
                });
                $(".maincenter").css({
                    'background-color': '#267639'
                });
            } else if (this.activeIndex > 19) {
                $(".maincontent").css({
                    'background-color': '#0b59a7'
                });
                $(".maincenter").css({
                    'background-color': '#9b1e23'
                });
            }
        },
        slideChangeTransitionEnd: function () {

        },
    }
});
// 计算结果
function countResult() {
    // console.log(rightCount);    
    var vlu = (rightCount / alltitles * 100).toFixed(2);
    $('#rightCount').html("您一共答对了 " + rightCount + " 道题");
    $('#rightRaio').html("正确率：" + vlu + "%");
}
$("#t2").hide();
// 计分器
var rightCount = 0;
var alltitles = 50;
$(".swiper-container").on("click", 'li', function () {
    // console.log("你选择了：", $(this)[0].innerText);
    var this_active = $(this).parents(".swiper-slide").index();
    // console.log("当前题的index:", this_active);
    setTimeout(function () {
        mySwiper.slideTo(this_active + 1, 1000)
    }, 500);
    var a = answer[this_active][this_active + 1];
    var b = $(this)[0].innerText.substr(0, 1);
    var c = $(this)[0].innerText.trim();
    if (a == b || a == c ) {
        // console.log('select right!');
        rightCount += 1;
    } else {
        // console.log('select error!')
    }
    if (this_active == 49) {
        countResult();
    }
});
$("#restart").click(
    function () {
        window.location.reload()
    }
)

var answer = [{
    1: 'D'
},{
    2: 'A'
},{
    3: 'B'
},{
    4: 'B'
},{
    5: 'B'
},{
    6: 'C'
},{
    7: 'A'
},{
    8: 'B'
},{
    9: 'A'
},{
    10: 'B'
},{
    11: 'D'
}, {
    12: 'D'
}, {
    13: 'D'
}, {
    14: 'D'
}, {
    15: 'D'
}, {
    16: 'A'
}, {
    17: 'C'
}, {
    18: 'C'
}, {
    19: 'D'
}, {
    20: 'D'
},{
    21: 'D'
}, {
    22: 'C'
}, {
    23: 'A'
}, {
    24: 'A'
}, {
    25: 'C'
}, {
    26: 'A'
}, {
    27: 'D'
}, {
    28: 'C'
}, {
    29: 'C'
}, {
    30: 'F'
},{
    31: 'T'
}, {
    32: 'F'
}, {
    33: 'T'
}, {
    34: 'F'
}, {
    35: 'T'
}, {
    36: 'F'
}, {
    37: 'T'
}, {
    38: 'F'
}, {
    39: 'T'
}, {
    40: 'F'
},{
    41: 'A'
}, {
    42: 'C'
}, {
    43: 'D'
}, {
    44: 'D'
}, {
    45: 'C'
}, {
    46: 'C'
}, {
    47: 'C'
}, {
    48: 'C'
}, {
    49: 'B'
}, {
    50: 'C'
}
];
