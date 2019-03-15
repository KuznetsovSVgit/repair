var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

button.addEventListener('click', function(){
modal.classList.add('modal_active')
setTimeout(func, 5000);
});
close.addEventListener('click', function(){
modal.classList.remove('modal_active')
});
function func(){
modal.classList.remove('modal_active')  
};
