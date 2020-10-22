function tb(id) {
    id.innerHTML = 'heihei';
}
// const bt = document.getElementById('bt');
// const bt = document.getElementsByClassName('alertbt');
// bt[0].innerHTML = 'what the fuck';
// bt[0].addEventListener('click', function() {
//     this.innerHTML = "oooooooo";
// });

const bt = document.querySelector('.alertbt');
bt.innerHTML = 'what the fuck';
// bt.addEventListener('click', function () {
//     this.innerHTML = "uuuuuuuu";
//     alert('shit');
// });
bt.addEventListener('click', () => {
    bt.innerHTML = "why would this happen?";
    alert('haha');
});

const linkSection = document.querySelector('.links');
const errorMessage = document.querySelector('.error-message');
const newLinkForm = document.querySelector('.new-link-form');
const newLinkUrl = document.querySelector('.new-link-url');
const newLikSubmit = document.querySelector('.new-link-submit');
const clearStorageButton = document.querySelector('.clear-storage');

// newLikSubmit.disabled = false;
newLinkUrl.addEventListener('keyup', () => {
    bt.innerHTML = newLinkUrl.validity.valid;
    newLikSubmit.disabled = !newLinkUrl.validity.valid;
});

const clearForm = () => {
    newLinkUrl.value = null;
};

newLinkForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const url = newLinkUrl.value;  
});

fetch(url).then(response => response.text());