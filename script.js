/*const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
           const resumeDetails = document.querySelectorAll('.resume-detail'); 

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');

resumeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Reset buttons
    resumeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Reset details
    resumeDetails.forEach(detail => detail.classList.remove('active'));

    // Show the one that matches data-target
    const target = btn.getAttribute('data-target');
    document.querySelector(`.resume-detail.${target}`).classList.add('active');
  });
});*/

document.addEventListener("DOMContentLoaded", () => {
  const resumeBtns = document.querySelectorAll('.resume-btn');
  const resumeDetails = document.querySelectorAll('.resume-detail');

  resumeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Reset buttons
      resumeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Reset details
      resumeDetails.forEach(detail => detail.classList.remove('active'));

      // Show the one that matches data-target
      const target = btn.getAttribute('data-target');
      document.querySelector(`.resume-detail.${target}`).classList.add('active');
    });
  });
});


//Portfolio Carousel
const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index= 0;
const activePortfolio =() => {
  const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
  const portfolioDetails= document.querySelectorAll('.portfolio-detail');
  
  imgSlide.style.transform=`translateX(calc(${-index * 100}% - ${index * 2}rem))`;

  portfolioDetails.forEach(detail => {
    detail.classList.remove('active');
  });

  portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
  if(index < 4){
    index++;
     arrowLeft.classList.remove('disabled');
  }
  else{
    index=4;
    arrowRight.classList.add('disabled');
  }

  activePortfolio();
});

arrowLeft.addEventListener('click', () => {
  if(index > 0){
    index--;
    arrowLeft.classList.remove('disabled');
    if (index < 4) {
      arrowRight.classList.remove('disabled');
    }
  }
  else{
    index=0;
    arrowLeft.classList.add('disabled');
  }

  activePortfolio();
});