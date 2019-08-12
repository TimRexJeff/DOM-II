// Your code goes here

function textColorChange(event) {
    event.target.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

let logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener('mouseover', textColorChange);

let navLink = document.querySelectorAll('.nav-link');
for (let i=0; i<navLink.length; i++) {
    navLink[i].addEventListener('mouseover', textColorChange);
}

let introText = document.querySelector(".intro");
introText.addEventListener('mouseover', textColorChange);

let textCon = document.querySelectorAll('.text-content');
for (let i=0; i<textCon.length; i++) {
    textCon[i].addEventListener('mouseover', textColorChange);
}

let conDest = document.querySelector(".content-destination");
conDest.addEventListener('mouseover', textColorChange);

let dest = document.querySelectorAll('.destination');
for (let i=0; i<textCon.length + 1; i++) {
    dest[i].addEventListener('mouseover', textColorChange);
}

let footerText = document.querySelector(".footer p");
footerText.addEventListener('mouseover', textColorChange);





// function logSelection(event) {
//     let selected = (event.target.value.substring(event.target.selectionStart, event.target.selectionEnd));
//     selected = selected.trim();
//     let words = 'The fun bus is not as fun as it seems.'
//     let currentText = event.target.value;
//     // console.log({selected, words, currentText})
//     event.target.value = currentText.replace(selected, words.substring(0, selected.length));
//     console.log({selected, words, currentText})
//   }
//   const div = document.querySelector('input');
//   div.addEventListener('select', logSelection);