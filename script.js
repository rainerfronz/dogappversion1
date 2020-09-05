// 'use strict';

function getDogPictures() {
    fetch('https://dog.ceo/api/breeds/image/random/3')
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
}

function submitForm() {
    $('form').submit(event => {
        event.preventDefault();
        getDogPictures();
    });
}



$(function () {
    console.log('do it to it!');
    submitForm();
});