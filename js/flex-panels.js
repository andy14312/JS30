window.onload = function(){
	const panels = document.querySelectorAll('.panel');

	function toggleOpen() {
		this.classList.toggle('open');
		this.classList.toggle('active');		
	}

	function toggleActive(e) {
		if(e.propertyName.includes('flex')) {
			this.classList.toggle('active');			
		}
	}

	Array.from(panels).forEach(panel=>panel.addEventListener('click',toggleOpen));
}