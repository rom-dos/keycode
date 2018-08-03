const p_keycode = document.getElementById('keycode');
const p_key = document.getElementById('key');
const p_code = document.getElementById('code');

document.addEventListener('keydown', event => {
  p_keycode.textContent = "keyCode: " + event.keyCode;
  p_key.textContent = "key: " + event.key;
  p_code.textContent = "code: " + event.code; 
})
