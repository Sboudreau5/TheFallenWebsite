// JavaScript Document

let toggleNavStatus = false;

let toggleNav= function() {
   let getDropdown = document.querySelector(".drop-down");
   let getDropdownUl = document.querySelector(".drop-down ul");
	let getDropdownLinks = document.querySelectorAll(".drop-down a");
	let getDropdownBars = document.querySelectorAll("hr");
	let getExitButton = document.querySelector(".exitmenu");
	let getHamburgerMenu = document.querySelector(".hamburgermenu");

if (toggleNavStatus === false) {
	
	getDropdownUl.style.visibility = "visible";
	getDropdown.style.opacity = "1";
	getDropdownUl.style.opacity = "1";
	getExitButton.style.display = "block";
    getHamburgerMenu.style.display = "none";
	
	let arrayLength = getDropdownLinks.length;
	

	for (let i = 0; i < arrayLength; i++) {
		getDropdownLinks[i].style.opacity = "1";
			
	}
	
	
	
	
	
	
	toggleNavStatus = true;

	
}
	

else if (toggleNavStatus === true) {
	

	getDropdown.style.opacity = "0";
	getDropdownUl.style.opacity = "0";
	getExitButton.style.display = "none";
    getHamburgerMenu.style.display = "block";
	
	
	let arrayLength = getDropdownLinks.length;

	for (let i = 0; i < arrayLength; i++) {
		getDropdownLinks[i].style.opacity = "0";
		
		
	}
	

	

	
	getDropdownUl.style.visibility = "hidden";
	toggleNavStatus = false;
	

	
}	
	
	
	
	

}



