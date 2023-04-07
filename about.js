console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
}

function compliment(){
	alert ("Thank you, you are amazing!")
}


let form = document.querySelector('#contact');

form.addEventListener('mouseover', compliment)


// form.addEventListener('submit', handleSubmit);