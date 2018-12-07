$(function () {
    //侧边菜单
    function dropDown(btn) {
        $(btn).on('click', function () {
            var flag = $(this).parent().children('.layui_nav_child').is(':hidden')
            if (flag) {
                $(this).parent().children('.layui_nav_child').slideDown(1)
                $(this).addClass('color_active')
            } else {
                $(this).parent().children('.layui_nav_child').slideUp(1)
                $(this).removeClass('color_active')
            }
            var parentChild = $(this).parent().siblings().children('a')
            $(this).parent().siblings().children('.layui_nav_child').slideUp(1)
            parentChild.children('span').removeClass('layui_nav_more_top').end().removeClass('color_active')
            $(this).children('span').toggleClass('layui_nav_more_top')
        })
        var Ddbtn = $('.layui_nav_child').children('dd')
        Ddbtn.on('click', function () {
            if ($(this).children('a').hasClass('three_menu_btn')) {
                $(this).children('a').removeClass('child_click')
            } else {
                $(this).children('a').addClass('child_click')
                $(this).siblings().children('a').removeClass('child_click')
            }
        })
    }

    dropDown('.drop_down > a')
    dropDown('.three_menu > a')

    //隐藏菜单
    function hiddenMenu() {
        var flag = true
        $('#flex_btn').on('click', function () {
            if ($(this).children('span').hasClass('layui-icon-shrink-right')) {
                $('.slide_menu').css({width: "60px"})
                $('.i_txt,.h_title h1').hide()
                $('.logo_bg').show()
                $(this).children('span').removeClass('layui-icon-shrink-right')
                $(this).children('span').addClass('layui-icon-spread-left')
                $('.header_bar_left').css({left: "60px"})
                $('.drop_down > a').click(function () {
                    $('.slide_menu').css({width: "220px"})
                    $('.i_txt,.h_title h1').show()
                    $('.logo_bg').hide()
                    $('#flex_btn').children('span').addClass('layui-icon-shrink-right')
                    $('#flex_btn').children('span').removeClass('layui-icon-spread-left')
                    $('.header_bar_left').css({left: "220px"})
                    flag = true
                })
            } else {
                $('.slide_menu').css({width: "220px"})
                $('.i_txt,.h_title h1').show()
                $('.logo_bg').hide()
                $(this).children('span').addClass('layui-icon-shrink-right')
                $(this).children('span').removeClass('layui-icon-spread-left')
                $('.header_bar_left').css({left: "220px"})
            }
            console.log(flag)
            if (flag == true) {
                $('.color_active').parent().children('.layui_nav_child').hide()
                flag = false
            } else {
                $('.color_active').parent().children('.layui_nav_child').show()
                flag = true
            }

        })


    }

    hiddenMenu()

    //鼠标hover跟随
    function slideHover() {
        $('.drop_down').hover(
            function () {
                $('.nav_bar_line').css({
                    transform: "scale(1,1)",
                    top: $(this).offset().top + $('.main_nav').scrollTop() - $('.h_title').height() + "px"
                })
            },
            function () {
                $('.nav_bar_line').css({transform: "scale(1,0)"})
            }
        )
    }

    slideHover()

    //顶部导航hover跟随
    function topHover() {
        $('.left_wrap > li').hover(
            function () {
                $('.left_wrap > .h_bar_line').css({
                    width: $(this).children('span').width(),
                    transform: "scale(1,1)",
                    left: $(this).children('span').offset().left - $('.left_wrap').offset().left
                })
            },
            function () {
                $('.left_wrap > .h_bar_line').css({transform: "scale(0,1)"})
            }
        )
        $('.right_wrap > li > span').hover(
            function () {
                $('.right_wrap > .h_bar_line').css({
                    width: $(this).parent().width(),
                    transform: "scale(1,1)",
                    left: $(this).offset().left - $('.right_wrap').offset().left
                })
            },
            function () {
                $('.right_wrap > .h_bar_line').css({transform: "scale(0,1)"})
            }
        )
    }

    topHover()

    /*贤心*/
    function loginHover() {
        $('.login_enter').hover(
            function () {
                $('.login_menu').removeClass('login_menu_show')
                    .stop().animate({top: "50px", opacity: "1"}, 100)
                $(this).children('span').children('span').addClass('layui_admin_top')
            },
            function () {
                $('.login_menu').addClass('login_menu_show')
                    .stop().animate({
                        opacity: '0',
                        top: '110px'
                    },100)
                $(this).children('span').children('span').removeClass('layui_admin_top')
            }
        )
    }

    loginHover()

    /*点击出现隐藏页脚*/
    function footerShow(listObj, hideMenu) {
        $(listObj).click(function () {
            $('.cover_shadow').show();
            $(hideMenu).css({right: "0px"})
        })
        $('.cover_shadow').click(function () {
            $('.cover_shadow').hide();
            $(hideMenu).css({right: "-300px"})
        })
    }

    footerShow('#hide_footer', '.footer_page_massage')
    footerShow('#hide_theme', '.theme')

    //改变主题

    function changeTheme() {
        var arr = [
            {tipone: 'small_slide1', tiptwo: 'small_header_top1', tipthree: 'small_top_bar1'},
            {tipone: 'small_slide2', tiptwo: 'small_header_top2', tipthree: 'small_top_bar1'},
            {tipone: 'small_slide3', tiptwo: 'small_header_top3', tipthree: 'small_top_bar1'},
            {tipone: 'small_slide4', tiptwo: 'small_header_top4', tipthree: 'small_top_bar1'},
            {tipone: 'small_slide5', tiptwo: 'small_header_top5', tipthree: 'small_top_bar1'},
            {tipone: 'small_slide6', tiptwo: 'small_header_top6', tipthree: 'small_top_bar1'},
            {tipone: 'small_slide7', tiptwo: 'small_header_top7', tipthree: 'small_top_bar1'},
            {tipone: 'small_slide8', tiptwo: 'small_header_top8', tipthree: 'small_top_bar1'},
            {tipone: 'small_slide9', tiptwo: 'small_header_top9', tipthree: 'small_top_bar1'},
            {tipone: 'small_slide10', tiptwo: 'small_header_top10', tipthree: 'small_top_bar10'},
            {tipone: 'small_slide11', tiptwo: 'small_header_top11', tipthree: 'small_top_bar11'},
            {tipone: 'small_slide12', tiptwo: 'small_header_top12', tipthree: 'small_top_bar12'},
            {tipone: 'small_slide13', tiptwo: 'small_header_top13', tipthree: 'small_top_bar13'},
            {tipone: 'small_slide14', tiptwo: 'small_header_top14', tipthree: 'small_top_bar14'},
            {tipone: 'small_slide15', tiptwo: 'small_header_top15', tipthree: 'small_top_bar15'}
        ]
        $('#changelist').children('li').each(function (i, value) {
            $(this).click(function () {
                    $('.slide_menu').removeClass().addClass(arr[i].tipone+' slide_menu')
                    $('.h_title').removeClass().addClass(arr[i].tiptwo+' h_title')
                    $('.header_bar').removeClass().addClass(arr[i].tipthree+' header_bar')
                    $(this).siblings().removeClass()
                    $(this).addClass('themeacitve')
            })
        })
    }

    changeTheme()
})