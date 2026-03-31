
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
      bandeirabase.innerHTML = `<img src="https://flagsapi.com/US/flat/48.png"></img>`
      break
      
      case "EUR": 
      bandeirabase.innerHTML = `<img src="https://flagsapi.com/GB/flat/48.png"></img>`
      break
      
      case "JPY": 
      bandeirabase.innerHTML = `<img src="https://flagsapi.com/JP/flat/48.png"></img>`
      break
      
      case "GBP": 
      bandeirabase.innerHTML = `<img src="https://flagsapi.com/GB/flat/48.png"></img>`
      break

      case "CNY": 
      bandeirabase.innerHTML = `<img src="https://flagsapi.com/CN/flat/48.png"></img>`
      break

      default:
      bandeirabase.innerHTML = `<img src="https://img.cdndsgni.com/preview/12329729.jpg"></img>`
  } 
   switch (moedaconvertidaprincipal.value) {
    case "BRL": 
      bandeira1.innerHTML = `<img src="https://flagsapi.com/BR/flat/24.png"></img>`
      break
      
      case "USD": 
      bandeira1.innerHTML = `<img src="https://flagsapi.com/US/flat/48.png"></img>`
      break
      
      case "EUR": 
      bandeira1.innerHTML = `<img src="https://flagsapi.com/GB/flat/48.png"></img>`
      break
      
      case "JPY": 
      bandeira1.innerHTML = `<img src="https://flagsapi.com/JP/flat/48.png"></img>`
      break
      
      case "GBP": 
      bandeira1.innerHTML = `<img src="https://flagsapi.com/GB/flat/48.png"></img>`
      break

      case "CNY": 
      bandeira1.innerHTML = `<img src="https://flagsapi.com/CN/flat/48.png"></img>`
      break

      default:
      bandeira1.innerHTML = `<img src="https://img.cdndsgni.com/preview/12329729.jpg"></img>`
  } 
   switch (moedasconvertidas1.value) {
    case "BRL": 
      bandeira2.innerHTML = `<img src="https://flagsapi.com/BR/flat/24.png"></img>`
      break
      
      case "USD": 
      bandeira2.innerHTML = `<img src="https://flagsapi.com/US/flat/48.png"></img>`
      break
      
      case "EUR": 
      bandeira2.innerHTML = `<img src="https://flagsapi.com/GB/flat/48.png"></img>`
      break
      
      case "JPY": 
      bandeira2.innerHTML = `<img src="https://flagsapi.com/JP/flat/48.png"></img>`
      break
      
      case "GBP": 
      bandeira2.innerHTML = `<img src="https://flagsapi.com/GB/flat/48.png"></img>`
      break

      case "CNY": 
      bandeira2.innerHTML = `<img src="https://flagsapi.com/CN/flat/48.png"></img>`
      break

      default:
      bandeira2.innerHTML = `<img src="https://img.cdndsgni.com/preview/12329729.jpg"></img>`
  } 
   switch (moedasconvertidas2.value) {
    case "BRL": 
      bandeira3.innerHTML = `<img src="https://flagsapi.com/BR/flat/24.png"></img>`
      break
      
      case "USD": 
      bandeira3.innerHTML = `<img src="https://flagsapi.com/US/flat/48.png"></img>`
      break
      
      case "EUR": 
      bandeira3.innerHTML = `<img src="https://flagsapi.com/GB/flat/48.png"></img>`
      break
      
      case "JPY": 
      bandeira3.innerHTML = `<img src="https://flagsapi.com/JP/flat/48.png"></img>`
      break
      
      case "GBP": 
      bandeira3.innerHTML = `<img src="https://flagsapi.com/GB/flat/48.png"></img>`
      break

      case "CNY": 
      bandeira3.innerHTML = `<img src="https://flagsapi.com/CN/flat/48.png"></img>`
      break

      default:
      bandeira3.innerHTML = `<img src="https://img.cdndsgni.com/preview/12329729.jpg"></img>`
  } 
   switch (moedasconvertidas3.value) {
    case "BRL": 
      bandeira4.innerHTML = `<img src="https://flagsapi.com/BR/flat/24.png"></img>`
      break
      
      case "USD": 
      bandeira4.innerHTML = `<img src="https://flagsapi.com/US/flat/48.png"></img>`
      break
      
      case "EUR": 
      bandeira4.innerHTML = `<img src="https://flagsapi.com/GB/flat/48.png"></img>`
      break
      
      case "JPY": 
      bandeira4.innerHTML = `<img src="https://flagsapi.com/JP/flat/48.png"></img>`
      break
      
      case "GBP": 
      bandeira4.innerHTML = `<img src="https://flagsapi.com/GB/flat/48.png"></img>`
      break

      case "CNY": 
      bandeira4.innerHTML = `<img src="https://flagsapi.com/CN/flat/48.png"></img>`
      break

      default:
      bandeira4.innerHTML = `<img src="https://img.cdndsgni.com/preview/12329729.jpg"></img>`
  } 
}


