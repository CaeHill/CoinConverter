
const moedabase = document.getElementById("moedaBase");
const moedaconvertidaprincipal = document.getElementById("moedaConvertida");
const valorconvertidoprincipal = document.getElementById("valorConvertido");
const moedasconvertidas1 = document.getElementById("moedaConvertida1");
const moedasconvertidas2 = document.getElementById("moedaConvertida2");
const moedasconvertidas3 = document.getElementById("moedaConvertida3");
const moedasconvertidas4 = document.getElementById("moedaConvertida4");
const valorconvertido1 = document.getElementById("valorConvertido1");
const valorconvertido2 = document.getElementById("valorConvertido2");
const valorconvertido3 = document.getElementById("valorConvertido3");
const valorconvertido4 = document.getElementById("valorConvertido4");
const bandeirabase = document.getElementById("bandeiraBase")

const btn = document.getElementById("btnConversao")
btn.addEventListener('click', convert)

function convert() {
  const valorbase = Number(document.getElementById("valorBase").value);
  const moedabaseformat = moedabase.value.toLowerCase();

  const conversaoprincipal = moedaconvertidaprincipal.value.toLowerCase();
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${moedabaseformat}.json`)
      .then(res => res.json())
      .then(data => {
        const resultado0 = valorbase * data[moedabaseformat][conversaoprincipal];
        valorconvertidoprincipal.innerText = Number(resultado0.toFixed(2));
      });

  const conversao1 = moedasconvertidas1.value.toLowerCase();
  fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${moedabaseformat}.json`)
    .then(res => res.json())
    .then(data => {
      const resultado1 = valorbase * data[moedabaseformat][conversao1];
      valorconvertido1.innerText = Number(resultado1.toFixed(2));
    });

  const conversao2 = moedasconvertidas2.value.toLowerCase();
  fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${moedabaseformat}.json`)
    .then(res => res.json())
    .then(data => {
      const resultado2 = valorbase * data[moedabaseformat][conversao2];
      valorconvertido2.innerText = Number(resultado2.toFixed(2));
    });

  const conversao3 = moedasconvertidas3.value.toLowerCase();
  fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${moedabaseformat}.json`)
    .then(res => res.json())
    .then(data => {
      const resultado3 = valorbase * data[moedabaseformat][conversao3];
      valorconvertido3.innerText = Number(resultado3.toFixed(2));
    });

  const conversao4 = moedasconvertidas4.value.toLowerCase();
  fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${moedabaseformat}.json`)
    .then(res => res.json())
    .then(data => {
      const resultado4 = valorbase * data[moedabaseformat][conversao4];
      valorconvertido4.innerText = Number(resultado4.toFixed(2));
  })
  switch (moedabase.value) {
    case "BRL": 
      bandeirabase.innerHTML = `<img src="https://flagsapi.com/BR/flat/24.png"></img>`
      break
      
      case "USD": 
      bandeirabase.innerHTML = `<img src="https://flagsapi.com/US/flat/24.png"></img>`
      break
      
      case "EUR": 
      bandeirabase.innerHTML = `<img src="https://flagsapi.com/GB/flat/24.png"></img>`
      break
      
      case "JPY": 
      bandeirabase.innerHTML = `<img src="https://flagsapi.com/JP/flat/24.png"></img>`
      break
      
      case "GBP": 
      bandeirabase.innerHTML = `<img src="https://flagsapi.com/GB/flat/24.png"></img>`
      break

      case "CNY": 
      bandeirabase.innerHTML = `<img src="https://flagsapi.com/CN/flat/24.png"></img>`
      break

      default:
      bandeirabase.innerHTML = `<img src="https://img.cdndsgni.com/preview/12329729.jpg"></img>`
}}


