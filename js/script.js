/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

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
		quote: "The world is full of magic things, patiently waiting for our senses to grow sharper.",

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

    citation: "Double Up ft Belly & Dom Kennedy"
	}
];



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Use the random number to `return` a random quote object from the `quotes` array.
***/

const getRandomQuote = () => {
  let randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    return randomQuotes;
};



/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

const printQuote = () => {
  let randQuote = getRandomQuote();
  let stringQuote = '';

  stringQuote += <p class="quote"> randQuote.quote </p> <p class="source"> randQuote.source;

    if(randQuote.year) {

       stringQuote += <span class="year"> randQuote.year </span>
    } 
    
    if (randQuote.citation) {

      stringQuote += <span class="citation"> randQuote.citation </span>
    } 
    
  stringQuote += </p>;
  document.getElementById("quote-box").innerHTML = stringQuote;
  return stringQuote;
  }

console.log(printQuote);


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.