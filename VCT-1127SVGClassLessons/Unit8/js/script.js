$(function () {
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

    var sD = 2;
    var mD = 4;
    var lD = 8;
    var eI = "power4.in";
    var eO = "power4.out";
    var tl1 = gsap.timeline({
        id: "tl1"
    });

    tl1.fromTo(rect1, mD, {
        opacity: 0,
        y: "-100%",
        ease: eI
    }, {
        opacity: 1,
        y: "0",
        ease: eO
    }, "-=5");
    


    // no code beyond this point
    GSDevTools.create();
});