// 'use strict';

function getDogPictures() {
    let numberOfPics = $('#dogPictures').val();
    console.log(numberOfPics)
    let fetchURL = 'https://dog.ceo/api/breeds/image/random/' + numberOfPics;
    fetch(fetchURL)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
}
function displayPictures(responseJson) {
    console.log(responseJson);
    //replace the existing image with the new one
    $('.dog-image').replaceWith(
      `<img src="${responseJson.message}" class="dog-image">`
    )
    //display the results section
    $('.results').removeClass('hidden');
  }
  

function submitForm() {
    $("#numberSubmission").submit(event => {
        console.log('it works')
        event.preventDefault(); 
            console.log($('#dogPictures').val());

            getDogPictures();
        
    });
}



$(function () {
    console.log('do it to it!');
    submitForm();
});