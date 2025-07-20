(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated');
      }, false)
    })

  })()

// registered events---------------
let regd = document.querySelector(".regd");

document.getElementById('form-r4').addEventListener('submit', function(event) { 
  // event.preventDefault(); // Prevents the form from submitting and the page from reloading 
  // Your custom logic here 
  // const regd = document.querySelector(".regd").value;
  console.log(regd.value);
  const val = Math.floor(Math.random()*11111);
  alert("you have registered and your Event ID is "+val);
}); 

document.getElementById('form-r5').addEventListener('submit', function(event) { 
  // event.preventDefault(); // Prevents the form from submitting and the page from reloading 
  // Your custom logic here 
  // const regd = document.querySelector(".regd").value;
  console.log(regd.value);
  const val = Math.floor(Math.random()*11111);
  alert("you have registered and your Event ID is "+val);
}); 



document.getElementById('form-r3').addEventListener('submit', function(event) { 
  // event.preventDefault(); // Prevents the form from submitting and the page from reloading 
  // Your custom logic here 
  // const regd = document.querySelector(".regd").value;
  console.log(regd.value);
  const val = Math.floor(Math.random()*11111);
  alert("you have registered and your Event ID is "+val);
}); 


document.getElementById('form-r2').addEventListener('submit', function(event) { 
  // event.preventDefault(); // Prevents the form from submitting and the page from reloading 
  // Your custom logic here 
  // const regd = document.querySelector(".regd").value;
  console.log(regd.value);
  const val = Math.floor(Math.random()*11111);
  alert("you have registered and your Event ID is "+val);
}); 


document.getElementById('form-r1').addEventListener('submit', function(event) { 
  // event.preventDefault(); // Prevents the form from submitting and the page from reloading 
  // Your custom logic here 
  // const regd = document.querySelector(".regd").value;
  console.log(regd.value);
  const val = Math.floor(Math.random()*11111);
  alert("you have registered and your Event ID is "+val);
}); 



let registered = document.querySelector(".reg-events");
registered += regd;

