const axios = require('axios');


const searchForm = document.querySelector('.content_search-form');
const dateInp = document.querySelector('.date');
const timeInp = document.querySelector('.time');
const addressInp = document.querySelector('.address');
const BOT_KEY = '1327741791:AAGmx1Nm5_Cbv__IbCvvtV4AB1EkJXe_Uyc';
const CHAT_ID = '-498282090';
let date, time, address;

searchForm.addEventListener('input', e => {

  date = dateInp.value;
  time = timeInp.value;
  address = addressInp.value;

  if (date.length > 0 && time.length > 0 && address.length > 0) {
    let btn = document.querySelector('.btnSub');
    btn.style.display = "block";
  }
  else {
    let btn = document.querySelector('.btnSub');
    btn.style.display = "none";
  }
});

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const text = `Приглашаем Вас на собеседование в ${time} ${date} по адресу ${address}`;
  const encodedText = encodeURIComponent(text);
  const url = `https://api.telegram.org/bot${BOT_KEY}/sendMessage?chat_id=${CHAT_ID}&text=${encodedText}`;

  console.log(url);

  axios.post(url)
    .then(
      (response) => { console.log(response) },
      (error) => { console.log(error) });

});

