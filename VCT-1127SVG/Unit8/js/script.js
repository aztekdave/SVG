$(function() {
    var rect1 = $(".cls-1");
    var rect2 = $(".cls-2");
    var rect3 = $(".cls-3");
    var rect4 = $(".cls-4");
    var rect5 = $(".cls-5");
    var rect6 = $(".cls-6");
    var rect7 = $(".cls-7");
    var rect8 = $(".cls-8");
    var rect9 = $(".cls-9");
    var rect10 = $(".cls-10");
    var rect11 = $(".cls-11");
    var rect12 = $(".cls-12");
    var rect13 = $(".cls-13");
    var rect14 = $(".cls-14");
    var rect15 = $(".cls-15");
    var line1 = $(".cls-16");
    var line2 = $(".cls-17");
    var line3 = $(".cls-18");
    var line4 = $(".cls-19");

    var tl1 = gsap.timeline({id:"tl1"});

    tl1.fromTo(rect1, 5, {opacity:0},{opacity:1}, "-=5");
    // gsap.from(rect3, {opacity:0, x:-600, duration: 4});
    // gsap.from(rect6, {opacity:0.5, y:350, duration: 3});
    // gsap.from(rect8, {opacity:0.5, y:120, duration: 2});

    GSDevTools.create();
});