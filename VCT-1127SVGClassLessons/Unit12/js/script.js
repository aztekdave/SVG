GSDevTools.create();
// GSDevTools.create({animation: "Rectangle_1"});

function rect1() {
    var tl = gsap.timeline({
        id: "Rectangle_1" //id for gsap identification
    });
    tl.to("#Rectangle_1", {
        opacity: 1,
        duration: 3
    });
    return tl;
}

function rect2() {
    var tl = gsap.timeline({
        id: "Rectangle_2" //id for gsap identification
    });
    tl.to("#Rectangle_2", {
        opacity: 1,
        duration: 3
    });
    return tl;
}

function sRect() {
    var tl = gsap.timeline({
        id:"short Rectangles" //id for gsap identification
    });
     tl.to("#Rectangle_10", {x:907})
     tl.to("#Rectangle_9", {x:907})
}

function text() {
    var tl = gsap.timeline({
        id: "Demo" //id for gsap identification
    });
    tl.to("#Demo", {
        opacity: 1,
        duration: 3
    });
    return tl;
}

// stitch them together in a master timeline...
var master = gsap.timeline();
master.add(rect1())
      .add(rect2(), "-=2")
      .add(sRect(), "-=1")
      .add(text(), "-=1")