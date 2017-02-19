document.addEventListener('DOMContentLoaded',function(){
	const secondsHand = document.querySelector('.sec-hand');
	const minutesHand = document.querySelector('.min-hand');
	const hoursHand = document.querySelector('.hour-hand');
	let totalSecs = 0;
	function setTime() {
		const now = new Date();
		const seconds = now.getSeconds();
		const minutes = now.getMinutes();
		const hours = now.getHours();
		totalSecs += seconds;
		console.log(totalSecs);
		const secDeg = ((seconds/60)*360+90);
		if(secDeg === 90) {
			secondsHand.style.transition = "all 0.005s";
		} else {
			secondsHand.style.transition = "all 1s";
		}
		secondsHand.style.transform = `rotate(${secDeg}deg)`;
		minutesHand.style.transform = `rotate(${((minutes/60)*360+90)}deg)`;
		hoursHand.style.transform = `rotate(${((hours/12)*360+90)}deg)`;
	}
	setInterval(setTime,1000);
});