const resumeBtns = document.querySelectorAll('.resume-btn');
// Get ALL the content areas
const resumeDetails = document.querySelectorAll('.resume-detail');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        
        // 1. --- BUTTON VISUAL STATE (Your original code) ---
        // Remove 'active' class from all buttons
        resumeBtns.forEach(b => {
            b.classList.remove('active');
        });
        // Add 'active' class to the clicked button
        btn.classList.add('active');

        // 2. --- CONTENT SWITCHING LOGIC (The New Part) ---
        
        // Hide all content areas
        resumeDetails.forEach(content => {
            content.classList.remove('active');
        });

        // Get the class name of the target content from the button's data-target
        const targetClass = btn.getAttribute('data-target');
        
        // Find the matching content element using the target class and show it
        const targetContent = document.querySelector(`.${targetClass}`);
        
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});