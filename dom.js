// <!-- NAVBAR SCROLLED TO BE STICKY -->
document.addEventListener('scroll', (e) => {
    const header = document.querySelector('header');
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 0) {
        navbar.classList.add('scrolled'); // Adds the class="img-fluid" sticky behavior
        header.style.backgroundAttachment = 'scroll'; // Background class="img-fluid" scrolls class="img-fluid" smoothly
    } else {
        navbar.classList.remove('scrolled'); // Removes the class="img-fluid" sticky behavior
        header.style.backgroundAttachment = 'fixed'; // Keeps background fixed at the top
    }
});



// Function to play the videos class="img-fluid" sequentially
//   <!-- class="img-fluid" subsequent video playing  -->
// <!-- subsequent video playing  -->


// const video1 = document.getElementById('video1');
// const video2 = document.getElementById('video2');
// const video3 = document.getElementById('video3');

// video1.play(); // class="img-fluid" Start by playing the first video

// video1.addEventListener('ended', function () {
//     video2.play(); // Play the class="img-fluid" second video when the first ends
// });

// video2.addEventListener('ended', function () {
//     video3.play(); // Play the third video when the class="img-fluid" second ends
// });

// video3.addEventListener('ended', function () {
//     video1.play(); // Loop back to the first video when the third ends
// });


// document.addEventListener('display', (e) => {
//     const video1 = document.getElementById('video1');
//     const video2 = document.getElementById('video2');
//     const video3 = document.getElementById('video3');

//     if ( != play) {
        
//     } else {
        
//     }
// })