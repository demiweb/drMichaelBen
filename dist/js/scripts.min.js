let allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        const observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })
        // if (el.loaded()) {
        //     el.classList.add('is-loaded');
        // }
    })
}

allLozadImg();






//sliders




let cardsSlider = [...document.querySelectorAll('.slides-row')];
function goCardsSlider() {
    if (!cardsSlider.length) {

    } else {
        cardsSlider.forEach((sld) => {
            let sldCont = sld.querySelector('.bot-slides');

            let sldNext = sld.querySelector('.btn-sld--n');
            let sldPrev = sld.querySelector('.btn-sld--p');
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 'auto',
                slidesPerGroup:1,
                speed: 600,
                reverseDirection: true,
                // spaceBetween: 10,
                autoplay: {
                    delay: 5000,
                    pauseOnMouseEnter: true,
                },
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },



            });
        })
    }
}

goCardsSlider();



//sliders

//scrolling

let jsAnimBlocks = [...document.querySelectorAll('.btn-down')];
var Visible3 = function (target) {
    if (!jsAnimBlocks.length) {

    } else {

        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top ,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset + 10,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight - (window.innerHeight / 2.4)
            };

        if (targetPosition.bottom + (window.innerHeight / 5) > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top + (window.innerHeight / 4.2) <  windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            // console.log(targetPosition.bottom + ' ... ' + windowPosition.top);
            // console.log(targetPosition.top + ' ...2 ' + windowPosition.bottom + target.classList);
            setTimeout(() => {
                target.classList.add('hidden');
            }, 60)


        } else {
            target.classList.remove('hidden');
        }
    }
    // Все позиции элемента

};


// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {
    jsAnimBlocks.forEach((el, k) => {
        setTimeout(() => {
            Visible3(el);
        }, k * 30)
    })

});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно

jsAnimBlocks.forEach((el, k) => {
    setTimeout(() => {
        Visible3(el);
    }, k * 30)
});



let jsAnimBlocks2 = [...document.querySelectorAll('.video-sec')];
var Visible4 = function (target) {
    if (!jsAnimBlocks.length) {

    } else {

        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top ,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset + 10,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight - (window.innerHeight / 2.2)
            };

        if (targetPosition.bottom  > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top  <  windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            // console.log(targetPosition.bottom + ' ... ' + windowPosition.top);
            // console.log(targetPosition.top + ' ...2 ' + windowPosition.bottom + target.classList);
            setTimeout(() => {
                document.querySelector('.slides-row').classList.add('visible');
            }, 60)


        } else {
            document.querySelector('.slides-row').classList.remove('visible');
        }
    }
    // Все позиции элемента

};


window.addEventListener('scroll', function () {
    jsAnimBlocks2.forEach((el, k) => {
        setTimeout(() => {
            Visible4(el);
        }, k * 30)
    })

});


jsAnimBlocks2.forEach((el, k) => {
    setTimeout(() => {
        Visible4(el);
    }, k * 30)
});
//scrolling


//video scripts


    // Video
    $('body').on('click', '.video-block' ,function () {
        console.log('clicked');
        $(this).addClass('play');
        $(this).find('.block-overlay').fadeOut(300);

        let videoId = $(this).find('.play-btn').data('video-id');

        if (!videoId) {
            videoId = $(this).data('video-id');
        }

        if (videoId == undefined) {
            $(this).find('video')[0].play();
        } else{
            let videoType = $(this).data('video-type') ? $(this).data('video-type').toLowerCase() : 'youtube';

            if (videoType == 'youtube') {
                $(this).find('.video-item').append('<div class="video-iframe" id="'+videoId+'"></div>');
                createVideo(videoId, videoId);
            } else if(videoType == 'vimeo'){
                $(this).find('.video-item').append('<div class="video-iframe" id="'+videoId+'"><iframe allow="autoplay" class="video-iframe" src="https://player.vimeo.com/video/'+videoId+'?playsinline=1&autoplay=1&transparent=0&app_id=122963"></div>');
            }
        }
    });

    var player;

    function createVideo(videoBlockId, videoId) {
        player = new YT.Player(videoBlockId, {
            videoId: videoId,
            playerVars: {
                // 'autoplay':1,
                'autohide': 1,
                'showinfo': 0,
                'rel': 0,
                'loop': 1,
                'playsinline': 1,
                'fs': 0,
                'allowsInlineMediaPlayback': true
            },
            events: {
                'onReady': function(e) {
                    // e.target.mute();
                    // if ($(window).width() > 991) {
                    setTimeout(function() {
                        e.target.playVideo();
                    }, 200);
                    // }
                }
            }
        });
    }



//video scripts

let btnsDown = [...document.querySelectorAll('.btn-down')];

function scrollDownBtn() {
    if (btnsDown.length) {
        btnsDown.forEach((btn) => {
            if (btn.classList.contains('home-top')) {
                $(btn).click(function() {
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $(".video-sec").offset().top
                    }, 500);
                });
            }
            if (btn.classList.contains('home-text')) {
                $(btn).click(function() {
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $(".mobile-home-text").offset().top
                    }, 500);
                });
            }
            if (btn.classList.contains('form-down')) {
                $(btn).click(function() {
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $(".fixed-form").offset().top
                    }, 500);
                });
            }

        })
    }
}
scrollDownBtn();

let fixedLogoMob = [...document.querySelectorAll('.fixed-logo-2')];

function scrollFixedLogo() {
    if (fixedLogoMob.length) {
        fixedLogoMob.forEach((logo) => {
            let img = logo.querySelector('img');
            let p = logo.querySelector('p');
            $(p).click(function() {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(".fixed-form").offset().top
                }, 500);
            });
            $(img).click(function() {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $("body").offset().top
                }, 500);
            });
        })
    }
}
scrollFixedLogo();


let botSlides = [...document.querySelectorAll('.bot-slides .single-slide')];

function videoControlSlides() {
    if (botSlides.length) {
        botSlides.forEach((btn) => {
            let type = btn.dataset.type;
            let id = btn.dataset.vidId;
            let videoCont = document.querySelector('.video-block');
            console.log(id);
            btn.addEventListener('click', () => {
                videoCont.dataset.videoType = type;
                videoCont.dataset.videoId = id;

                if (videoCont.querySelector('iframe')) {
                    videoCont.querySelector('.video-item').innerHTML = '';
                }
                // videoCont.click();
                // createVideo(id, id);
                console.log($(this) + ' this');
                console.log('clicked');
                $('.video-block').addClass('play');
                $('.video-block').find('.block-overlay').fadeOut(300);

                let videoId = id;

                if (!videoId) {
                    videoId = $('.video-block').data('video-id');
                }

                if (videoId == undefined) {
                    $('.video-block').find('video')[0].play();
                } else{
                    let videoType = $('.video-block').data('video-type') ? $('.video-block').data('video-type').toLowerCase() : 'youtube';

                    if (videoType == 'youtube') {
                        $('.video-block').find('.video-item').append('<div class="video-iframe" id="'+videoId+'"></div>');
                        createVideo(videoId, videoId);
                    } else if(videoType == 'vimeo'){
                        $('.video-block').find('.video-item').append('<div class="video-iframe" id="'+videoId+'"><iframe allow="autoplay" class="video-iframe" src="https://player.vimeo.com/video/'+videoId+'?playsinline=1&autoplay=1&transparent=0&app_id=122963"></div>');
                    }
                }
            })
        })
    }
}
videoControlSlides()










