"use strict"

// マウスストーカー
$(window).on('mousemove',function(e){
    $('#js_cursor').css('transform','translate(' + e.clientX + 'px, ' + e.clientY + 'px)');
    $('#js_cursor').css('opacity',1);
    $('#js_stalker').css('transform','translate(' + e.clientX + 'px, ' + e.clientY + 'px)');
    $('#js_stalker').css('opacity',0.5);
})
$('a').on('mouseover',function(){
    $('#js_stalker').css('width',100 + 'px');
    $('#js_stalker').css('height',100 + 'px');
    $('#js_stalker').css('top',-50 + 'px');
    $('#js_stalker').css('left',-50 + 'px');
})
$('a').on('mouseout',function(){
    $('#js_stalker').css('width',50 + 'px');
    $('#js_stalker').css('height',50 + 'px');
    $('#js_stalker').css('top',-25 + 'px');
    $('#js_stalker').css('left',-25 + 'px');
})

// ハンバーガーメニュー
$('#js_navshow').on('click',function(){
    console.log("aaa")
    $('.sp_nav_item').addClass("navshow");
})
$('#js_navhide').on('click',function(){
    $('.sp_nav_item').removeClass("navshow");
})

// スクロールアニメーション

let workPt = window.$('.main_work').offset().top;
let profilePt = window.$('.main_profile').offset().top;

// PCのスクロールアニメーション

// work
$('#js_pc_work-scroll').on('click',function(){
    $('html,body').animate({
        scrollTop:workPt
    },300)
})

// profile
$('#js_pc_profile-scroll').on('click',function(){
    $('html,body').animate({
        scrollTop:profilePt
    },300)
})

// スマホのスクロールアニメーション

// work
$('#js_sp_work_scroll').on('click',function(){
    console.log(workPt)
    $('.sp_nav_item').removeClass("navshow");
    $('html,body').animate({
        scrollTop:workPt
    },500)
})

// profile
$('#js_sp_profile_scroll').on('click',function(){
    console.log(workPt)
    $('.sp_nav_item').removeClass("navshow");
    $('html,body').animate({
        scrollTop:profilePt
    },500)
})