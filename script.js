function zobrazTip(id) {
  const tip = document.getElementById(id);
  tip.style.display = tip.style.display === 'none' ? 'block' : 'none';
}
function filtrujBylinky() {
  const input = document.getElementById('filtr').value.toLowerCase();
  const items = document.querySelectorAll('.bylinka');
  items.forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(input) ? '' : 'none';
  });
}
function validujEmail() {
  const email = document.getElementById('email').value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    alert('Zadejte správný email!');
    return false;
  }
  return true;
}