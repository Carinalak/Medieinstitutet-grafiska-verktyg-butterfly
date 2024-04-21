
// ---------------------------- LETTERS ---------------------------------- //
gsap.to('#h', { 
    fill: '#7f066e', 
    duration: 1, 
    repeat: 3 
});
gsap.to('#o', { 
    rotation: 360,
     duration: 2, 
     transformOrigin: 'center center', 
     repeat: 2 
    });
    gsap.to('#f', { 
        fill: '#7f066e', 
        duration: 1, 
        repeat: 3 
    });
gsap.to('#n', { 
    scale: 0.3, 
    transformOrigin: 'center center', 
    duration: 5, 
    repeat: -1, 
    yoyo: true 
});
gsap.to('#d', { 
    fill: '#5180e0', 
    duration: 1, 
    repeat: -1, 
    yoyo: true 
});
gsap.to('#utrop', { 
    opacity: 0, 
    duration: 0.5,
    repeat: -1,
    yoyo: true 
});
     

// ---------------------------- BUTTERFLY ---------------------------------- //


var svgElement = document.querySelector('#butterfly');
var leftWing = document.querySelector('#leftWing');
var rightWing = document.querySelector('#rightWing');

svgElement.addEventListener('mouseenter', function(event) {
    var rect = svgElement.getBoundingClientRect();
    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top; 

    var offsetX = mouseX > rect.width / 2 ? 10 : -10;
    var offsetY = mouseY > rect.height / 2 ? 3 : -3;

    gsap.to(['#eyeBlackRight', '#eyeBlackLeft'], {
        x: offsetX,
        y: offsetY,
        duration: 0.5,
    });

    gsap.to(eyebrowLeft, {
        rotation: -20,
        duration: 0.5,
    });
    gsap.to(eyebrowRight, {
        rotation: -10,
        y: -5,
        duration: 0.5,
    });
});

svgElement.addEventListener('mouseleave', function() {
    gsap.to(['#eyeBlackRight', '#eyeBlackLeft'], {
        x: 0,
        y: 0,
        duration: 0.5,
    });

    gsap.to(eyebrowLeft, {
        rotation: 0,
        duration: 0.5,
    });    
    gsap.to(eyebrowRight, {
        rotation: 0,
        y: 0,
        duration: 0.5,
    });
});

leftWing.addEventListener('mouseenter', function() {
    gsap.to(leftWing, {
        x: 2,
        y: 3,
        duration: 0.5,
        repeat: 3,
        ease: "power1.inOut",
        yoyo: true,
    });
});

rightWing.addEventListener('mouseenter', function() {
    gsap.to(rightWing, {
        x: 2,
        y: 3,
        duration: 0.5,
        repeat: 3,
        ease: "power1.inOut",
        yoyo: true,
    });
});

leftDot.addEventListener('mouseenter', function() {
    gsap.to(leftDot, {
        rotation: "+=360", 
        duration: 1,
        transformOrigin: "center center",
        ease: "none"
    });
});

leftDot.addEventListener('mouseleave', function() {
    gsap.to(leftDot, {
        rotation: 0,
        duration: 0
    });
});

rightDot.addEventListener('mouseenter', function() {
    gsap.to(rightDot, {
        rotation: "+=360",
        duration: 1,
        transformOrigin: "center center",
        ease: "none"
    });
});

rightDot.addEventListener('mouseleave', function() {
    gsap.to(rightDot, {
        rotation: 0,
        duration: 0
    });
});

