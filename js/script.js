/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


// Created an array of quote objects

const quotes = [
	{
		quote: "There were many terrible things in my life, but most of them never happened.",

		source: "Montaigne"
	},
	{
		quote: "My heart is at ease knowing that what was meant for me will never miss me, and that what misses me was never meant for me.",

		source: "Imam Alshai'i"
	},
	{
		quote: "What you focus upon, you become. What you focus on comes to you. So hold in your mind what you want more of.",

		source: "John Roger"
	},
	{
		quote: "The silence in our lives is under assault on all fronts. We are wired, plugged in, constantly catered to and increasingly terrified of silence, unaware of what it has to offer.",

    	source: "Arianna Huffington",

    	citation: "Thrive",

    	year: "2014"
	},
	{
		quote: "The mind is our most precious and valuable resource through which we experience every single moment of life. Are you looking after yours?",

		source: "Mindful Moments"
	},
	{
		quote: "Because one is content with oneself, one doesn't need others' approval. Because one accepts oneself, the whole world accepts him or her.",

		source: "Lao Tzu"
	},
	{
		quote: "The world is full of magical things, patiently waiting for our senses to grow sharper.",

		source: "W.B. Yeats"
	},
	{
		quote: "Treat people like family and they will be loyal and give their all.",

		source: "Howard Schultz"
	},
	{
		quote: "Healing is a verb, the body is constantly repairing itself. Disease happens when the repairing process is not keeping up with the damage process.",

		source: "Ester Sternberg"
	},
	{
		quote: "Science has proven that your mind can heal your body.",

		source: "Herbert Benson and William Proctor"
	},
	{
		quote: "Brilliant things happen in calm minds.",

		source: "Mindful Moments"
  	},
  	{
		quote: "Double up...3 or 4 times I ain't tellin' no lies I just run it up. Never let a hard time humble us...Double up!",

    	source: "Nipsey Hussle",

    	citation: "Double Up ft Belly & Dom Kennedy",

    	year: "2018"
	}
];


// Created a random number generator that pulls from the quotes array

const getRandomQuote = () => {
	let randomQuote = Math.floor(Math.random() * quotes.length);
	return quotes[randomQuote];
};


// Created a function to print the quotes and add the appropriate tags so each quote with a source, citation and/or year can display

const printQuote = () => {
	let singleQuote = getRandomQuote();
	let quoteWithProperties = '';

	quoteWithProperties += `<p class="quote"> ${singleQuote.quote}</p> <p class="source"> ${singleQuote.source}`
	if(singleQuote.citation || singleQuote.year) {
		quoteWithProperties += `<span class="citation"> ${singleQuote.citation}</span> <span class="year"> ${singleQuote.year}</span>`
	} 
 
	quoteWithProperties +=`</p>`;

	document.getElementById('quote-box').innerHTML = quoteWithProperties;

	randomBackgroundColor();
};


// Created a timer to change quotes every 7 seconds

 let timer = setInterval(printQuote, 7000);


// Created a random background generator work ... source: https://www.w3resource.com › javascript-math-exercise-40

   const randomBackgroundColor = () => {
	red = Math.floor(Math.random() * 256);
	green = Math.floor(Math.random() * 256);
	blue = Math.floor(Math.random() * 256);
	let color = `rgb(${red}, ${green},  ${blue})`;

   	document.body.style.backgroundColor = color;
   };


// added an event listener to change quotes when the "Show another quote" button is clicked

document.getElementById('loadQuote').addEventListener("click", printQuote, false);




