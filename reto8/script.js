const messageTemperature = document.getElementById('message-temperature');
const numberTemperature = document.getElementById('number-temperature');

numberTemperature.addEventListener('mousemove', messageNumberTemperature);

function messageNumberTemperature(event) {
  if (numberTemperature.value < 10) {
    messageTemperature.innerText = `${numberTemperature.value}°C Hace mucho frío.`;
  } else if (numberTemperature.value < 26 && numberTemperature.value >= 10) {
    messageTemperature.innerText = `${numberTemperature.value}°C La temperatura es normal.`;
  } else if (numberTemperature.value >= 26) {
    messageTemperature.innerText = `${numberTemperature.value}°C Hace mucho calor.`;
  }
}
