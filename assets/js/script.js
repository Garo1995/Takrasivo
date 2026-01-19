
$(document).ready(function () {
    var time = 0;
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if (window.innerHeight < 380) {
        }
        if ($(this).hasClass('close-menu')) {
            $('.menu-cnt').addClass('transition-menu');
            $('.menu-header-mobile').css({'width': '100%', transition: '0.3s'});
            $('body').addClass('body_fix');
            var menu_li = $(".sidenav>ul>li");
            $(menu_li).each(function () {
                time++;
                $(this).css({'transition-delay': '0.' + time + 's'});
                $(this).addClass('anim-menu');
                $('.menu-cnt').addClass('transition-menu');
            })
        } else {
            $('.menu-cnt').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-cnt').removeClass('transition-menu');
            time = 0;
            var menu_lis = $(".sidenav ul li");
            $(menu_lis).each(function () {
                if ($(this).hasClass('anim-menu')) {
                    $(this).removeClass('anim-menu');
                    $(this).css({'opacity': '1', transition: '0.2s'})
                }
            })
        }

    });
    $('.for-mobile-bg').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.menu-cnt').removeClass('transition-menu');
        $('.menu-cnt').css({width: '0%!important'});
        $('body').removeClass('body_fix');
        time = 0;
        var menu_li = $(".sidenav ul li");
        $(menu_li).each(function () {
            if ($(this).hasClass('anim-menu')) {
                $(this).removeClass('anim-menu');
                $(this).css({'opacity': '0', transition: '0.2s'})
            }
        })
    })
});



$(document).ready(function () {
    $(".phone").mask('+7 (999)-999-99-99');
});

$('.click-open-save').on('click', function () {
    $(this).parent().toggleClass('personal-data-izmin-act')
});
$('.click-actols').on('click', function () {
    $(this).parent().removeClass('personal-data-izmin-act')
});

$('.history-of-more-details').on('click',function () {
    $(this).parent().parent().toggleClass('history-of-more-details-act')
});




$(document).ready(function () {

    $('.open-catalog-for-menu').on('click',function () {
        $(this).parent().toggleClass('open-catalog-for-menu-act');
        $('body').toggleClass('fon-hed-men');
    });


});



if ($('.catalog-tavar-menu ul li').has('submenu-head')) {
    $('.submenu-head').parent().addClass('submenu-active');
}

$('.open_modal').on('click', function () {
    var attr = $(this).attr('data-val');
    var modal = $('#' + attr);
    modal.removeClass('out')
    $('body').css({overflow: 'hidden '});
    modal.fadeIn()
});

$('.close').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
    $('body').css({overflow: 'visible '})

});
$('.close_this').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out');
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
    $('body').css({overflow: 'visible '})

});
$(window).on('click', function (event) {
    $('.modal').each(function () {
        var gtattr = $(this).attr('id');
        var new_mod = $('#' + gtattr);
        var md_cnt = $(new_mod).find('.modal-content');

        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()

            }, 100);
            $('body').css({overflow: 'visible '})
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()

            }, 100);
            $('body').css({overflow: 'visible '})

        }
    })
});


$('.online-cosmetics-slid').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,

});

$(document).ready(function() {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 200,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});


$(document).ready(function () {

    addActiveClass('reviews-min-text-hrefs', 'active-href');
    changeCaseBlock(this, 'reviews-min-text-hrefs', 'reviews-min-info', 'active-href', 'click-reviews');

    $('.click-reviews').on('click', function () {
        changeActiveClassWithClick(this, 'reviews-min-text-hrefs', 'active-href')
        changeCaseBlock(this, 'reviews-min-text-hrefs', 'reviews-min-info', 'active-href', 'click-reviews');
    })

    function addActiveClass(parent_menu, active_class) {
        var prt = $('.' + parent_menu);
        var prt_childrens = $(prt).children();
        var prt_child_li = $(prt_childrens).children();
        var first_child = $(prt_child_li)[0];
        if (!$(first_child).hasClass(active_class)) {
            !$(first_child).addClass(active_class)
        }
    }

    function changeActiveClassWithClick($this, parent_block, active_class) {
        var prt = $($this).parents('.' + parent_block);
        var prt_child = $(prt).find('li');
        $(prt_child).each(function () {
            $(this).removeClass(active_class);
        });
        $($this).addClass(active_class);
    }

    //   change case block with click  case menu
    function changeCaseBlock($this, case_menu, case_block, active_class, menu_link) {
        var case_menu_block = $('.' + case_menu);
        var case_block_sub = $('.' + case_block);
        var case_block_child = $(case_block_sub).children();
        $(case_block_child).each(function () {
            $(this).css({display: 'none', height: 0});
        })

        if ($($this).hasClass(menu_link)) {
            var this_attr = $($this).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == this_attr) {
                    $(this).css({display: 'block', height: 'auto'});
                }
            })

        } else {
            var active_find = $(case_menu_block).find('.' + active_class);
            var active_find_attr = $(active_find).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == active_find_attr) {
                    $(this).css({display: 'block', height: 'auto'});

                }
            })
        }
    }

});
$(document).ready(function () {
    $('.search-block').on('click', function (e) {
        $(this).toggleClass('open-search');
        openSearchMenu(this, 'search-box');
        e.stopPropagation();
    });
    $('.search-box').on('click', function (e) {
        e.stopPropagation();
    });

    function openSearchMenu($this, search_box) {
        let search_block = $($this).find('.' + search_box);
        $(search_block).slideToggle(400);
    }
    $(document).on('click', function () {
        $('.search-box').slideUp();
        $('.search-block').removeClass('open-search')
    })
});


$('.click-open-new').on('click', function () {
    $(this).parent().toggleClass('pages-new-sort-drop-act');
});


$('.cosmetics-online-item-slid').slick({
    dots: false,
    arrows: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1299,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});


$('.recommended-products-slider').slick({
    dots: true,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.buyer-recommendations-slider').slick({
    dots: true,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1170,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
            }
        }
    ]
});

$('.interesting-articles-slider').slick({
    dots: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1299,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$('.hair-cosmetics-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1299,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1170,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$('.photo-caption-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1299,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$('.every-rubles-gift-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1299,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                arrows: true,

            }
        },
        {
            breakpoint: 1170,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true,

            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,

            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,

            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,

            }
        }
    ]
});

$('.catalog-ultrasound-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,

});

$('.physical-item-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.physical-item-small-slider'
});

$('.physical-item-small-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.physical-item-slider',
    dots: false,
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
});

const incrementDecrementCount = {
    decrement: (element) => {
        const parentBlock = element.parentNode;
        let counterValue = +parentBlock.children.item(1).innerText;
        const counterBlock = parentBlock.children.item(1);
        if (counterValue === 1) {
            counterValue = 1
        } else {
            counterValue--;
        }
        counterBlock.innerText = counterValue
    },
    increment: (element) => {
        const parentBlock = element.parentNode;
        let counterValue = +parentBlock.children.item(1).innerText;
        const counterBlock = parentBlock.children.item(1);
        counterValue++;
        counterBlock.innerText = counterValue
    }
};

$('.asked-question-box').on('click', function () {
   $(this).parent().toggleClass('parameter-filter_acts')
});


$('.close-filter-in-mob').on('click',function () {
    $('.catalog-ultrasound-left').addClass('angular-contact-pop-act')
});

$('.close-filter-as').on('click',function () {
    $('.catalog-ultrasound-left').removeClass('angular-contact-pop-act')
});

$('.read-completely-particles').on('click',function () {
    $(this).parent().toggleClass('liked-scrub-arrow-act');
    $('.liked-scrub-name-anast').toggleClass('liked-scrub-name-anast-act');
});

$('.often-buy-together-img').on('click',function () {
    $(this).parent().toggleClass('often-buy-together-info-act');
});
$('.menu>a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            var targetOffset = $target.offset().top-70;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});


let sliders = document.getElementsByClassName('nonlinear');

for (let i = 0; i < sliders.length; i++) {

    let slid = sliders[i];
    noUiSlider.create(slid, {
        connect: true,
        behaviour: 'tap',
        start: [document.getElementById(slid.getAttribute('data-id') + '-lower-value').value, document.getElementById(slid.getAttribute('data-id') + '-upper-value').value],
        range: {
            'min': [parseInt(slid.getAttribute('data-min'))],
            'max': [parseInt(slid.getAttribute('data-max'))]
        },
    });

    // document.getElementById(slid.getAttribute('data-id') + '-lower-value').value = 0;
    // document.getElementById(slid.getAttribute('data-id') + '-upper-value').value = slid.getAttribute('data-max');
    document.getElementById(slid.getAttribute('data-id') + '-lower-value').addEventListener('change', function () {
        sliders[this.getAttribute('data-index')].noUiSlider.set([this.value, null]);
        // check();
    });
    document.getElementById(slid.getAttribute('data-id') + '-upper-value').addEventListener('change', function () {
        sliders[this.getAttribute('data-index')].noUiSlider.set([null, this.value]);
        // check();

    });

    slid.noUiSlider.on('slide', function (values, handle, unencoded, isTap, positions) {
        var nodes = [
            document.getElementById(this.target.getAttribute('data-id') + '-lower-value'), // 0
            document.getElementById(this.target.getAttribute('data-id') + '-upper-value'),  // 1
        ];

        nodes[handle].value = parseInt(values[handle]);

    });
    slid.noUiSlider.on('end', function (values, handle, unencoded, isTap, positions) {
        let data = $('form').serializeArray();
        // filter(data)
        // check()
    });
}