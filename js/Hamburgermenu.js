// JavaScript Document

let toggleNavStatus = false;

let toggleNav= function() {
   let getDropdown = document.querySelector(".drop-down");
   let getDropdownUl = document.querySelector(".drop-down ul");
	let getDropdownLinks = document.querySelectorAll(".drop-down a");
	let getDropdownBars = document.querySelectorAll("hr");

if (toggleNavStatus === false) {
	
	getDropdownUl.style.visibility = "visible";
	getDropdown.style.opacity = "1";
	getDropdownUl.style.opacity = "1";
    
	
	let arrayLength = getDropdownLinks.length;
	

	for (let i = 0; i < arrayLength; i++) {
		getDropdownLinks[i].style.opacity = "1";
			
	}
	
	
	
	
	
	
	toggleNavStatus = true;

	
}
	

else if (toggleNavStatus === true) {
	

	getDropdown.style.opacity = "0";
	getDropdownUl.style.opacity = "0";
	
	
	let arrayLength = getDropdownLinks.length;

	for (let i = 0; i < arrayLength; i++) {
		getDropdownLinks[i].style.opacity = "0";
		
		
	}
	

	

	
	getDropdownUl.style.visibility = "hidden";
	toggleNavStatus = false;
	

	
}	
	
	
	
	

}



