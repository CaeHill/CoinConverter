const valorbase = document.getElementById("input");
const moedabase = document.getElementById("moedabase");
const moedaconvertida = document.getElementById("moedaconvertida");
let valorconvertido = document.getElementById("valorconvertido");

function convert() {
  const valor = Number(valorbase.value);
  const base = moedabase.value.toLowerCase();
  const destino = moedaconvertida.value.toLowerCase();

  fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${base}.json`)
    .then(res => res.json())
    .then(data => {
      const resultado = valor * data[base][destino];
      valorconvertido.innerText = Number(resultado.toFixed(2));
      console.log(resultado);
    });
}