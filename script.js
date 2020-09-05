// 'use strict';

function getDogPictures() {
  fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson));
}

function displayPictures(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="dog-images">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function submitForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  submitForm();
});