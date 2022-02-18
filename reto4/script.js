const containerCountries = document.getElementById('container');
const selectCountries = document.getElementById('select-countries');
const listCountries = document.getElementById('list-countries');

selectCountries.addEventListener('change', validateForm);

function createList() {
  countries.forEach((country) => {
    listCountries.innerHTML += `
     <li>Ciudad: ${country.city}, País: ${country.country}</li>
     `;
  });
}

createList();

function validateForm() {
  if (selectCountries.value === '') {
    listCountries.innerHTML = '';
    createList();
  } else if (selectCountries.value == 'colombia') {
    const countryColombia = countries.filter(function (country) {
      return country.country === 'Colombia';
    });
    listCountries.innerHTML = '';
    countryColombia.forEach((item) => {
      const li = document.createElement('li');
      li.innerText = 'Ciudad: ' + item.city + ', País: ' + item.country;
      listCountries.appendChild(li);
    });
  } else if (selectCountries.value == 'ecuador') {
    const countryEcuador = countries.filter(function (country) {
      return country.country === 'Ecuador';
    });
    listCountries.innerHTML = '';
    countryEcuador.forEach((item) => {
      const li = document.createElement('li');
      li.innerText = 'Ciudad: ' + item.city + ', País: ' + item.country;
      listCountries.appendChild(li);
    });
  } else if (selectCountries.value == 'peru') {
    const countryPeru = countries.filter(function (country) {
      return country.country === 'Perú';
    });
    listCountries.innerHTML = '';
    countryPeru.forEach((item) => {
      const li = document.createElement('li');
      li.innerText = 'Ciudad: ' + item.city + ', País: ' + item.country;
      listCountries.appendChild(li);
    });
  } else if (selectCountries.value == 'mexico') {
    const countryMexico = countries.filter(function (country) {
      return country.country === 'México';
    });
    listCountries.innerHTML = '';
    countryMexico.forEach((item) => {
      const li = document.createElement('li');
      li.innerText = 'Ciudad: ' + item.city + ', País: ' + item.country;
      listCountries.appendChild(li);
    });
  }
}
