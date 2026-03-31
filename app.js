const valorbase = document.getElementById("input");
const moedabase = document.getElementById("moedabase");
const moedaconvertidaprincipal = document.getElementById("moedaconvertida");
let valorconvertidoprincipal = document.getElementById("valorconvertido");
const moedasconvertidas1 = document.getElementById("moedasconvertidas1")
const moedasconvertidas2 = document.getElementById("moedasconvertidas2")
const moedasconvertidas3 = document.getElementById("moedasconvertidas3")
const moedasconvertidas4 = document.getElementById("moedasconvertidas4")
const valorconvertido1 = document.getElementById("valorconvertidas1")
const valorconvertido2 = document.getElementById("valorconvertidas2")
const valorconvertido3 = document.getElementById("valorconvertidas3")
const valorconvertido4 = document.getElementById("valorconvertidas4")

function convert() {
  const valor = Number(valorbase.value);
  const base = moedabase.value.toLowerCase();
  const conversao1 = moedasconvertidas1.value.toLowerCase();

  fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${base}.json`)
    .then(res => res.json())
    .then(data => {
      const resultado1 = valor * data[base][conversao1];
      valorconvertido1.innerText = Number(resultado1.toFixed(2));
    
    const conversao2 = moedasconvertidas2.value.toLowerCase();
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${base}.json`)
    .then(res => res.json())
    .then(data => {
      const resultado2 = valor * data[base][conversao2];
      valorconvertido2.innerText = Number(resultado2.toFixed(2));

    const conversao3 = moedasconvertidas3.value.toLowerCase();
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${base}.json`)
    .then(res => res.json())
    .then(data => {
      const resultado3 = valor * data[base][conversao3];
      valorconvertido3.innerText = Number(resultado3.toFixed(2));
    
    const conversao4 = moedasconvertidas4.value.toLowerCase();
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${base}.json`)
    .then(res => res.json())
    .then(data => {
      const resultado4 = valor * data[base][conversao4];
      valorconvertido4.innerText = Number(resultado4.toFixed(2));
    });
})}
