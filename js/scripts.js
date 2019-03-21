function toggleNav(toggleClass, activeClass) {
  if (document.querySelector('.' + toggleClass)) {
    function toggle() {
      if (!document.body.classList.contains(activeClass)) {
        document.body.classList.add(activeClass)
      } else {
        document.body.classList.remove(activeClass)
      }
    }
    document.querySelector('.' + toggleClass).addEventListener('click', toggle)
  }
}

toggleNav('nav-toggle', 'nav-active')







const track = document.querySelector ('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.casousel__button--right');
const prevButton = document.querySelector;('.casousel__button--left');
const dotsNav = document.querySelector;('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;



// arrange slides next to one another

//slides[0].style.left = SlideWidth * 0 +'px';
//slides[1].style.left = slideWidth * 1 + 'px';
//slides[2].style.left = slideWidth * 2 + 'px';

const setSlidePosition = (slide, index) => {
	slide.style.let = slideWidth * index + 'px';
}


slides.forEach(setSlidePosition);
	

// when i click left, move slides left


//when I click right, move slides right

nextButton.addEventListener('click', e => {
	const currentSlide = track.querySelector('.current-slide');
	console.log(currentSlide);
	
//move the slide
	
	
	
})


//when i click nav indcators, move to that slide
