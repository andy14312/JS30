(function(){
	let canvas = document.querySelector('#canvas');
	let context = canvas.getContext('2d');
	let lastX = 0;
	let lastY = 0;
	let isDrawing = false;
	let direction = true;
	let hue = 0;
	canvas.width = window.outerWidth;
	canvas.height = window.outerHeight;
	context.lineWidth = 10;
	context.strokeStyle = "#BADA55";
	context.lineJoin = "round";
	context.shadowBlur = 30;
	context.lineCap = "round";
	function draw(e) {
		if(!isDrawing) return;
		context.strokeStyle = `hsl(${hue},100%,50%)`;
		context.beginPath();
		context.moveTo(lastX,lastY);
		context.lineTo(e.offsetX,e.offsetY);
		context.stroke();
		[lastX,lastY] = [e.offsetX,e.offsetY];
		if(context.lineWidth>=100 || context.lineWidth<=1)
			direction=!direction;
		if(direction) 
			context.lineWidth += 0.2;
		if(!direction)
			context.lineWidth -= 0.2;
		if(hue>360)
			hue = 0;
		hue++;
	}

	canvas.addEventListener('mousemove',draw);
	canvas.addEventListener('mousedown',(e)=>{
		[lastX,lastY] = [e.offsetX,e.offsetY];
		isDrawing = true;
	});
	canvas.addEventListener('mouseup',()=>isDrawing=false);
	canvas.addEventListener('mouseout',()=>isDrawing=false);
})();