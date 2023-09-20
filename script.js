//your JS code here. If required.
const formElement = document.querySelector('form');

const inputButton = formElement.querySelector('input[type="button"]');

inputButton.addEventListener("click",function () {
option_remove();	
});

function option_remove() {
	const selected_element = document.getElementById('colorSelect');

	const selected_options = selected_element.options[selected_element.selectedIndex];

	if(selected_options){
		selected_element.removeChild(selected_options);
	}
}