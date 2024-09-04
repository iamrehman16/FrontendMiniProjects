let btn=document.querySelector('.btn');

btn.addEventListener('click',(e)=>{
    let ripple = btn.querySelector('.ripple');

    // Remove any existing ripple
    ripple.classList.remove('ripple-active');
    
    // Force reflow to ensure removal works correctly
    void ripple.offsetWidth; 
    
    // Add the ripple class
    ripple.classList.add('ripple-active');

    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

})