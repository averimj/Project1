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

        source: "John Roger",
        
        tag: "Personal Motivation"
	},
	{
		quote: "The silence in our lives is under assault on all fronts. We are wired, plugged in, constantly catered to and increasingly terrified of silence, unaware of what it has to offer.",

    	source: "Arianna Huffington",

    	citation: "Thrive",

    	year: "2014"
	},
	{
		quote: "The mind is our most precious and valuable resource through which we experience every single moment of life. Are you looking after yours?",

        source: "Mindful Moments",
        
        tag: "Personal Motivation"

	},
	{
		quote: "Don't nobody come hug you and say goodnight more than a kid that's suppose to be sleep.",

        source: "Anonymous Feed Up Parent",
        
        tag: "Funny"
	},
	{
		quote: "A society that keeps cures a secret so they can continue to sell medication for huge profits is not a real society but a huge mental asylum.",

        source: "Dr. Sebi",

        tag: "Food For The Soul"
	},
	{
		quote: "Sometimes, being low-key just means: 'I'm working on myself and my life, and I don't need to convinve anyone that I'm up to big things because I don't need their approval.'",

		source: "Vex King"
	},
	{
		quote: " Nutrition Fact: If you drink a gallon of water per day, you won't have time for other people's drama because you'll be too busy peeing. Stay hydrated my friends.",

        source: "Unknown",
        
        tag: "Funny"
	},
	{
		quote: "Science has proven that your mind can heal your body.",

		source: "Herbert Benson and William Proctor"
	},
	{
		quote: "Brilliant things happen in calm minds.",

        source: "Mindful Moments",
        
        tag: "Personal Motivation"

  	},
  	{
		quote: "Double up...3 or 4 times I ain't tellin' no lies I just run it up. Never let a hard time humble us...Double up!",

    	source: "Nipsey Hussle",

    	citation: "Double Up ft Belly & Dom Kennedy",

        year: "2018",
        
        tag: "Hip-Hop"
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
	    if(singleQuote.citation) {
            quoteWithProperties += `<span class="citation"> ${singleQuote.citation}</span>`
        }

        if(singleQuote.year) {
            quoteWithProperties += `<span class="year"> ${singleQuote.year}</span>`
        }

        if(singleQuote.tag) {
            quoteWithProperties += `<span class="tag"> ${singleQuote.tag}</span>`
        }
        
	quoteWithProperties +=`</p>`;

	document.getElementById('quote-box').innerHTML = quoteWithProperties;

    randomBackgroundColor();
    
    setInterval();
};


 // Created a timer to change quotes every 7 seconds

 let timer = setInterval(printQuote, 10000);


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




