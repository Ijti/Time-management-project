const json = localStorage.getItem('form');
const obj = JSON.parse(json);

for (key in obj) {
    const markup = '
    <span>${key}: ${obj[key]}</span>
  ;
  document.getElementById('data').innerHTML += markup;
}
