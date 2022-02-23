const box = document.getElementById('box');
const optionsPokemon = document.getElementById('pokemos');

optionsPokemon.addEventListener('change', showImagePokemon);

function showImagePokemon() {
  switch (optionsPokemon.value) {
    case '':
      box.innerHTML = '';
      break;
    case 'squirtle':
      box.innerHTML = `<img src="img/007.png">`;
      break;
    case 'eevee':
      box.innerHTML = `<img src="img/Eevee.png">`;
      break;
    case 'mew':
      box.innerHTML = `<img src="img/mew.png">`;
      break;
    case 'rowlet':
      box.innerHTML = `<img src="img/pokemon_rowlet.png">`;
      break;
    default:
      break;
  }
}
