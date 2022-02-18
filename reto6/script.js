const box = document.getElementById('box');
const optionsPokemon = document.getElementById('pokemos');

optionsPokemon.addEventListener('change', showImagePokemon);

function showImagePokemon() {
  switch (optionsPokemon.value) {
    case '':
      box.innerHTML = '';
      break;
    case 'squirtle':
      box.innerHTML = `<img src="img/007.png" style="width: 100px height: 100px;">`;
      break;
    case 'eevee':
      box.innerHTML = `<img src="img/Eevee.png" style="width: 200px height: 200px;">`;
      break;
    case 'mew':
      box.innerHTML = `<img src="img/mew.png" style="width: 200px height: 200px;">`;
      break;
    case 'rowlet':
      box.innerHTML = `<img src="img/pokemon_rowlet.png" style="width: 200px height: 200px;">`;
      break;
    default:
      break;
  }
}
