(function(){
	const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
	const searchInput = document.querySelector('.search');
	const searchBorder = document.querySelector('.searchBorder');
	const suggestions = document.querySelector('.suggestions');
	const cityStateData = [];
	const noRecordsFound = "Your search didn't match any of the fields. Refine your search!"
	searchInput.addEventListener('focus',()=>{
		searchBorder.classList.add('show');
	});
	searchInput.addEventListener('blur',()=>{
		searchBorder.classList.remove('show');
	});
	fetch(endpoint)
	.then(res=>res.json())
	.then(data=>{
		cityStateData.push(...data);
		searchInput.addEventListener('keyup',display);
		searchInput.addEventListener('change',display);
		display();
	});

	function matchedData(wordToMatch) {
		const matchCriteria = new RegExp(wordToMatch,'gi');
		return cityStateData.filter((record)=>{
			return record.city.match(matchCriteria) || record.state.match(matchCriteria);
		});
	}

	function display() {
		let value = this.value || "";
		const listItems = matchedData(value).map((field)=>{
			let highlight = new RegExp(value,'gi');
			let cityName = field.city.replace(highlight,`<span class="highlight">${value}</span>`);
			let stateName = field.state.replace(highlight,`<span class="highlight">${value}</span>`);
			return `<li class="list-group-item">
					<span class="cityName">${cityName}</span>
					<span class="stateName">${stateName}</span>
					<span class="population">${field.population}</span>
					</li>`
		});
		listItems.unshift(`<li class="list-group-item">
					<span class="cityName header">City</span>
					<span class="stateName header">State</span>
					<span class="population header">Population</span>
					</li>`);
		suggestions.innerHTML = listItems.length>1?listItems.join(''):`<li class="list-group-item">${noRecordsFound}</li>`;
	}
	console.dirxml(suggestions);
})();