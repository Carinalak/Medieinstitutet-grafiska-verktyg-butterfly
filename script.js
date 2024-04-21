

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
            
            var svgElement = document.querySelector('#butterfly');
            svgElement.addEventListener('mouseenter', function() {
                gsap.to(['#eyeBlackRight', '#eyeBlackLeft'], {
                    x: 10,
                    y: 3,
                    duration: 0.5,
                });
            });

            svgElement.addEventListener('mouseleave', function() {
                gsap.to(['#eyeBlackRight', '#eyeBlackLeft'], {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                });
            });

            /*
                gsap.to(['#eyeBlackRight', '#eyeBlackLeft'], {
                    x: 10,
                    y: 3,
                    duration: 0.5,
                    //paused: true // Pausa animationen initialt
                });

                */

