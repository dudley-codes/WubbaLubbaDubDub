const WubbaLubbaDubDub = () => {
	return fetch("rickQuotes.json")
		.then(response => response.json())
		.then(parsedData => {
			return parsedData;
		})
};

const colors = WubbaLubbaDubDub()
	.then(rickQuotes => {
		console.log(rickQuotes[Math.floor(Math.random() * rickQuotes.length)].what);
});