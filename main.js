const WubbaLubbaDubDub = () => {
	return fetch("https://raw.githubusercontent.com/eatsleeptravel/WubbaLubbaDubDub/main/rickQuotes.json")
		.then(response => response.json())
		.then(parsedData => {
			return parsedData;
		})
};

const randomizer = WubbaLubbaDubDub()
	.then(rickQuotes => {
		console.log(rickQuotes[Math.floor(Math.random() * rickQuotes.length)].what);
});