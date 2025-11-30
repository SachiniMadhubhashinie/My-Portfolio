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
