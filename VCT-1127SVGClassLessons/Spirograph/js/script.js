$(document).ready(function () {
    // $("svg").hover(function(){
    //     var ellipses = [$("div>svg>g>ellipse")];
    //     // console.log(ellipses);
    //     ellipses.forEach((x) => {
    //         gsap.fromTo(x, {
    //             opacity: 0
    //         }, {
    //             opacity: 0.5,
    //             duration: 2,
    //             stagger: 0.1,
    //             ease: "power4.Out",
    //             delay: 2,
    //             repeat: -1,
    //             yoyo: true
    //         })
    //     });  
    // })
    var ellipses = [$("div>svg>g>ellipse")];
    console.log(ellipses);
    ellipses.forEach((x) => {
        gsap.fromTo(x, {
            opacity: 0
        }, {
            opacity: 0.5,
            duration: 2,
            stagger: 0.1,
            ease: "power4.Out",
            delay: 2,
            repeat: -1,
            yoyo: true
        })
    });
GSDevTools.create();

});