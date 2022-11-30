
let elForm = document.querySelector("#form");
let inputCity = document.querySelector(".cityInput");
let elBox = document.querySelector(".box");
let loader = document.querySelector(".lds-roller");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '08de63cfa6msh83f0aea57772de7p13cbf7jsnd1fd990aa5b3',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

window.addEventListener("load", (e)=> {
   e.preventDefault()
   setTimeout(() => {
      loader.style.display = "none";
   }, 2000);
})

let renderWeather = (data)=>{
   elBox.innerHTML = ''
   let  div = document.createElement('div');
   div.innerHTML = `
   <h4>${data.location.name}</h4>
   <h5>${data.location.country}</h5>
   <div class="card">
   <p>${data.current.temp_c}<sup>c</sup></p>
   <img src="${data.current.condition.icon}" alt="" width="50" height="50">
   </div>
   `
   elBox.appendChild(div);
};


elForm.addEventListener("submit", (e)=> {
   e.preventDefault()
   let inputVal = inputCity.value;

   fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${inputVal}&days=3`, options)
	.then(response => response.json())
	.then(response => renderWeather(response))
	.catch(err => console.error(err));
})
