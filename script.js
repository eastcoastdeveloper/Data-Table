// WTF doesn't let work here??
var details = [],
  checkBoxes = [];

details = Array.from(document.querySelectorAll('.see-more'));
checkBoxes = Array.from(document.querySelectorAll('.checkbox'));

for (var i = 0; i < details.length; i++) {
  details[i].addEventListener('click', (e) => {
    e.target.parentElement.classList.remove('show-details');
  });
}

for (var i = 0; i < checkBoxes.length; i++) {
  checkBoxes[i].addEventListener('click', (e) => {
    let item = e.target.parentElement.querySelector('.partial');
    item.classList.toggle('show-details');
    item.classList.contains('show-details')
      ? (item.parentElement.querySelector('.checkbox').innerHTML = '&check;')
      : (item.parentElement.querySelector('.checkbox').innerHTML = '');
  });
}

// fetch('data.json')
//   .then((response) => response.json())
//   .then((json) => {
//     let content = document.querySelector('.content');
//         // content.innerHTML.repeat()
//         console.log(json)
//   });

// console.log(checkBoxes);
