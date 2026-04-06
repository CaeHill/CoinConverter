
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
const bandeirabase = document.getElementById("flag0")
const bandeira1 = document.getElementById("flag1")
const bandeira2 = document.getElementById("flag2")
const bandeira3 = document.getElementById("flag3")
const bandeira4 = document.getElementById("flag4")
const bandeira5 = document.getElementById("flag5")
const valorbaseformatado = document.getElementById("valorBaseTexto")

bandeirabase.innerHTML = `<img src="https://flagsapi.com/BR/flat/48.png"></img>`
bandeira1.innerHTML = `<img src="https://flagsapi.com/US/flat/48.png"></img>`
bandeira2.innerHTML = `<img src="https://flagsapi.com/DE/flat/48.png"></img>`
bandeira3.innerHTML = `<img src="https://flagsapi.com/JP/flat/48.png"></img>`
bandeira4.innerHTML = `<img src="https://flagsapi.com/GB/flat/48.png"></img>`
bandeira5.innerHTML = `<img src="https://flagsapi.com/CN/flat/48.png"></img>`

const btn = document.getElementById("btnConversao")
btn.addEventListener('click', convert)

function convert() {
  const input = document.getElementById("valorBase");
  let valorbase = Number(input.value.replace(/[^\d.-]/g, ""));
  input.value = "R$ " + valorbase.toFixed(2);
  const moedabaseformat = "brl";

  const conversaoprincipal = "usd";
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${moedabaseformat}.json`)
      .then(res => res.json())
      .then(data => {
        const resultado0 = valorbase * data[moedabaseformat][conversaoprincipal];
        valorconvertidoprincipal.innerText = "$ " + Number(resultado0.toFixed(2));
      });

  const conversao1 = "eur";
  fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${moedabaseformat}.json`)
    .then(res => res.json())
    .then(data => {
      const resultado1 = valorbase * data[moedabaseformat][conversao1];
      valorconvertido1.innerText = "€ " + Number(resultado1.toFixed(2));
    });

  const conversao2 = "jpy";
  fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${moedabaseformat}.json`)
    .then(res => res.json())
    .then(data => {
      const resultado2 = valorbase * data[moedabaseformat][conversao2];
      valorconvertido2.innerText = "¥ " +Number(resultado2.toFixed(2));
    });

  const conversao3 = "gbp";
  fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${moedabaseformat}.json`)
    .then(res => res.json())
    .then(data => {
      const resultado3 = valorbase * data[moedabaseformat][conversao3];
      valorconvertido3.innerText = "£ " +Number(resultado3.toFixed(2));
    });

  const conversao4 = "cny";
  fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${moedabaseformat}.json`)
    .then(res => res.json())
    .then(data => {
      const resultado4 = valorbase * data[moedabaseformat][conversao4];
      valorconvertido4.innerText = "¥ " +Number(resultado4.toFixed(2));
  
  })
  } 

  
