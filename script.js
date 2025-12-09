const navLinks=document.querySelectorAll('header nav a');
const LogoLinks=document.querySelector('.logo');
const sections=document.querySelectorAll('section');
const menuIcon=document.querySelector('#menu-icon');
const navbar=document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

const activePage = () => {

  const header = document.querySelector('header');
  const barsBox = document.querySelector('.bars-box');

  header.classList.remove('active');
  setTimeout(() => {
    header.classList.add('active');
  }, 1100);

  navLinks.forEach(link => {
    link.classList.remove('active');
  });

  barsBox.classList.remove('active');
  setTimeout(() => {
    barsBox.classList.add('active');
  }, 1100);

  sections.forEach(section => {
    section.classList.remove('active');
  });

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}

navLinks.forEach((link, idx) => {
  link.addEventListener('click', () => {
    if (!link.classList.contains('active')) {
      activePage();
      link.classList.add('active');

      setTimeout(() => {
        sections[idx].classList.add('active');
      }, 1100);
    }
  });
});

LogoLinks.addEventListener('click', () => {
  if (!navLinks[0].classList.contains('active')) {
    activePage();

    navLinks[0].classList.add('active');

    setTimeout(() => {
        sections[0].classList.add('active');
      }, 1100);
  }
});



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

function initCVDownload() {
  // Make sure the href matches your actual file name
  const downloadBtn = document.querySelector('a[href="CV.pdf"]'); 
  
  if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
      // Optional: prevent double clicks
      downloadBtn.style.opacity = '0.7';
      setTimeout(() => {
        downloadBtn.style.opacity = '1';
      }, 500);
    });
  }
}

// Initialize after DOM is loaded
document.addEventListener('DOMContentLoaded', initCVDownload);



