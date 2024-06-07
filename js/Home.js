 
const span = document.getElementById('Delicious Food');
span.addEventListener('mouseenter', function() {
   
  span.style.color = 'black';
});
span.addEventListener('mouseleave', function() {
  span.style.color = 'Tomato'
});

document.getElementById('visit').addEventListener('click', function() {
    window.location.href = 'login form.html';
  });

const searchicon1 = document.querySelector('#searchicon1');
const srchicon1 = document.querySelector('#srchicon1');
const search1 = document.querySelector('#searchinput1');

searchicon1.addEventListener('click' , function(){
    search1.style.display = 'flex';
    searchicon1.style.display = 'none';
})

const searchicon2 = document.querySelector('#searchicon2');
const srchicon2 = document.querySelector('#srchicon2');
const search2 = document.querySelector('#searchinput2');

searchicon2.addEventListener('click', function(){
    search2.style.display = 'flex';
    searchicon2.style.display = 'none';
})

const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

bar.addEventListener('click', function(){
    setTimeout(()=> {
        cross.style.display = 'block';
    },200);
    headerbar.style.right = '0%';
})

cross.addEventListener('click', function(){
    cross.style.display = 'none';
    headerbar.style.right = '-100%';
})

document.getElementById('submitButton').addEventListener('click', function() { 
  const emailInput = document.getElementById('email');
    if (  emailInput.value === ''  ) {
     alert('Please drop down your email before submitting.');
    } else {
     document.getElementById('Newsteller').submit();
    }
});

function darkmode(){
         var theme = document.getElementsByTagName('link')[0];

         if (theme.getAttribute('href') == '/css/Home.css') { 
             theme.setAttribute('href', '/css/homedark.css');
              
         } else { 
             theme.setAttribute('href', '/css/Home.css');
}};

function handleFormSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    localStorage.setItem('newsletterEmail', email);
    alert('Your email has been saved in a local storage!');
}
  
function populateEmailField() {
     const savedEmail = localStorage.getItem('newsletterEmail');
      if (savedEmail) {
          document.getElementById('email').value = savedEmail;
      }
  }
    const form = document.getElementById('Newsteller');
    form.addEventListener('submit', handleFormSubmit);
    window.onload = populateEmailField;