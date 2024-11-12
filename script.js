/* Find all the radio buttons */
document.querySelectorAll('input[type="radio"]')
  /* For all of the radio buttons */
  .forEach(button =>{
    /* Listen for changes in value */
    button.addEventListener('change', (event) =>{
      /* If there's a new value update the HTML status box */
      document.querySelector('#status').innerHTML = 
        `Rating is ${event.target.value}` 
    })
  })