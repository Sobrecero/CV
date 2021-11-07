const arr = ['circle', 'square', 'disc'];
const ul = document.querySelector('ul');

arr.forEach(element => {
  setTimeout(function(element) {
    ul.setAttribute('type', element);
    
  }, 1000);
});