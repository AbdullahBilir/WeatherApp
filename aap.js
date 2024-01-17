const url = "https://api.openweathermap.org/data/2.5/";
let key = "aee9368ab4b3e538bec75d39005eccf3&units=metric";
let input = document.querySelector(".İnputText");
let search = document.querySelector(".search");
let term = document.querySelector(".terms-text");
let baslık = document.querySelector(".city");

search.addEventListener("click", getCountry);

async function getWeather(country) {
  try {
    const requit = await fetch(
      `${url}weather?q=${country}&appid=${key}&lang=tr`
    );
    data = await requit.json();
    let temp = Math.round(data.main.temp);
    creatElement(temp, country);
  } catch {
    eror();
  }
}

function getCountry() {
  let textİnput = input.value.trim();
  if (textİnput != "") {
    getWeather(textİnput);
    input.value = "";
  }
}

function eror() {
  baslık.textContent = "";
  baslık.className = "";
  term.className = "";
  term.textContent = "Bu İsimde Bir Şehir Yoktur";
  term.className = "bg-danger text-light p-2 term-border";

  setTimeout(() => {
    term.textContent = "";
    term.className = "";
  }, 3000);
}

function creatElement(temp, country) {
  term.className = "";
  term.className = "terms-text";
  term.textContent = temp + "°C";
  baslık.textContent = country;
  baslık.style.fontSize = "20px";
}
