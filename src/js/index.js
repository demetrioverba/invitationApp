let searchForm = document.querySelector('.content_search-form');
let dateInp = document.querySelector('.date');
let timeInp = document.querySelector('.time');
let addressInp = document.querySelector('.address');
let x, y, z;

searchForm.addEventListener('input', e => {

  x = dateInp.value;
  y = timeInp.value;
  z = addressInp.value;

  if (x.length > 0 && y.length > 0 && z.length > 0) {
    let btn = document.querySelector('.btnSub');
    btn.style.display = "block";
  }
  else {
    let btn = document.querySelector('.btnSub');
    btn.style.display = "none";
  }
});
console.log(x, y, z);

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log(x, y, z);
});

