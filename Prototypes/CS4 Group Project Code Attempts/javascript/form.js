const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const obj = Object.fromEntries(fd);

  const json = JSON.stringify(obj);
  localStorage.setItem('form, json');

  window.location.href = "./confirm.html"
});
