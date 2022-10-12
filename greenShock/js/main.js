
(() => {

    let theBoxes = document.querySelectorAll('.box');

    function animateBox() {
        let targetEL = this;

        gsap.to(targetEL, { 
            x: 200,
            y: 300, 
            rotation: 250,
            opacity: 0.5,
            borderRadius: '50%',
            backgroundColor: 'blue',

             //duration is time in seconds
              duration: 1.5,
              ease: "elastic.out(1, 0.3)",

              onComplete: doSomethingElse

    })
   
    }

    function doSomethingElse() {
        console.log('second tween fire')
        gsap.to(theBoxes[0],{
            x: 400,
            opacity: 1,
            y: 20

        })
    }

    theBoxes.forEach(box => box.addEventListener('click', animateBox));

})();