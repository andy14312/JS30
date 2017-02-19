document.addEventListener('DOMContentLoaded',function(){
	const inputs = document.querySelectorAll('.controls input');
	function handleChange() {
		let unit = this.dataset.unit || '';
		let property = this.name;
		document.documentElement.style.setProperty(`--${property}`,this.value+unit);
	}
	inputs.forEach(input=>input.addEventListener('mousemove',handleChange));
	inputs.forEach(input=>input.addEventListener('change',handleChange));
});