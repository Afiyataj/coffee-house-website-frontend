let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
	navbar.classList.toggle('active');
	searchForm.classList.remove('active');
	cartitems.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
	searchForm.classList.toggle('active');
	navbar.classList.remove('active');
	cartitems.classList.remove('active');
}

let cartitems = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
	cartitems.classList.toggle('active');
	navbar.classList.remove('active');
	searchForm.classList.remove('active');
}

window.onscroll = () =>{
	navbar.classList.remove('active');
	searchForm.classList.remove('active');
	cartitems.classList.remove('active');
}
