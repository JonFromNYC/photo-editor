const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
    const suffix = this.dataset.sizing || ""; //data object from target element
    
    // update specific css variable
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// listen for change evet on each input
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
