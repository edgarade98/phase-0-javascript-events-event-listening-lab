function addingEventListener() {
    const input = document.getElementById('input');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);

return clickAlert;
}

const clickAlert = addingEventListener;

const result = clickAlert;

console.log(result);


