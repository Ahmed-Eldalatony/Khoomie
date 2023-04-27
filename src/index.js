//? How to Solver the problem of html files are not actually connected when not active , that is why js is not reading the elements , so is there is a way to connect pages or search how to handle multi page html app
// ? or should i use multiple javascript files ?
// ! Dropdown Menu
let dropdownToggle = document.querySelector(".dropdown-toggle");
let navMenu = document.querySelector(".nav-menu");

dropdownToggle.addEventListener("click", function(){
    document.querySelector(".dropdown-menu").classList.toggle("show")
})
let cardsCont= document.querySelector(".recommend .cards-cont")
let tpProdCont= document.querySelector(".top-product .cards-cont")
let navItem= document.querySelectorAll(".nav-menu li")

navItem.forEach((e) => {
    e.addEventListener("click", function(){

        let sudos= document.querySelectorAll(".sudo")
        sudos.forEach(el=> el.classList.remove("fill") )

        const sudo= e.querySelector(':first-child');
        console.log(sudo)
        sudo.classList.toggle("fill")
   
})})


// ! Card element
let dataCont=[]
let api_url= "https://fakestoreapi.com/products"

  
 async function cons(){
    let data= await fetch(api_url)
    let response= await data.json()
	render(response,8,tpProdCont)
     render(response,4,cardsCont)
    }
    cons()
// console.log(product)
// products.push(dataCont)
 function render(products,length,place){
    products.length=length
    console.log(products)
    place.innerHTML= products.map((product)=>{
       return  `<div class="card">
            <div class="card-img">
                <img src="${product.image}" alt="">
            </div>
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text"></p>
                <p class="price">${product.price}</p>
              
            </div>
            </div>`
    }).join("\n")  
       
   }
// ! Router for Card
// cardsCont.innerHTML = 
// let card=function(){
//     return `<div class="card">
//     <div class="card-body">
//         <h5 class="card-title"></h5>
//         <p class="card-text">$20</p>
//         <a href="#" class="btn btn-primary">Buy</a>
//     </div>`

// }



//! Url Routing
const urlPageTitle = "JS Single Page Application Router";

// create document click that watches the nav links only
document.addEventListener("click", (e) => {
	const { target } = e;
	if (!target.matches(".nav-menu a")) {
		return;
	}
	e.preventDefault();
	urlRoute();
});

// const urlRoutes = {
// 	404: {
// 		template: "/templates/404.html",
// 		title: "404 | " + urlPageTitle,
// 		description: "Page not found",
// 	},
// 	"/": {
// 		template: "/dist/index.html",
// 		title: "Home | " + urlPageTitle,
// 		description: "This is the home page",
// 	},
// 	"/trending" : {
// 		template: "/dist/trending.html",
// 		title: "About Us | " + urlPageTitle,
// 		description: "This is the about page",
// 	},
// 	"/contact": {
// 		template: "/templates/contact.html",
// 		title: "Contact Us | " + urlPageTitle,
// 		description: "This is the contact page",
// 	},
// };

// // create a function that watches the url and calls the urlLocationHandler
// const urlRoute = (event) => {
// 	event = event || window.event; // get window.event if event argument not provided
// 	event.preventDefault();
// 	// window.history.pushState(state, unused, target link);
// 	window.history.pushState({}, "", event.target.href);
// 	urlLocationHandler();
// };

// // create a function that handles the url location
// const urlLocationHandler = async () => {
// 	const location = window.location.pathname; // get the url path
// 	// if the path length is 0, set it to primary page route
// 	if (location.length == 0) {
// 		location = "/";
// 	}
// 	// get the route object from the urlRoutes object
// 	const route = urlRoutes[location] || urlRoutes["404"];
// 	// get the html from the template
// 	const html = await fetch(route.template).then((response) => response.text());
// 	// set the content of the content div to the html
// 	document.querySelector(".cards-cont").innerHTML = html;
// 	// set the title of the document to the title of the route
// 	document.title = route.title;
// 	// set the description of the document to the description of the route
// 	// document
// 	// 	.querySelector('meta[name="description"]')
// 	// 	.setAttribute("content", route.description);
// };

// // add an event listener to the window that watches for url changes
// window.onpopstate = urlLocationHandler;
// // call the urlLocationHandler function to handle the initial url
// window.route = urlRoute;
// // call the urlLocationHandler function to handle the initial url
// urlLocationHandler();