const quotes = [
    {
        quote:"The most terrible poverty is loneliness and the feeling of being unloved.",
        author:"Mother Teresa",
    },
    {
        quote:"All my possessions for a moment of time.",
        author:"Elizabeth I",
    },
    {
        quote:"Strong reasons make strong actions.",
        author:"William Shakespeare",
    },
    {
        quote:"Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important.",
        author:"Bill Gates",
    },
    {
        quote:"When virtue has slept, she will get up more refreshed.",
        author:"Friedrich Nietzsche",
    },
    {
        quote:"If you know how to spend less than you get, you have the philosopher's stone.",
        author:"Benjamin Franklin",
    },
    {
        quote:"A mind too active is no mind at all.",
        author:"Theodore Roethke",
    },
    {
        quote:"Fear not those who argue but those who dodge.",
        author:"Marie Ebner von Eschenbach",
    },
    {
        quote:"Seek not happiness too greedily, and be not fearful of happiness.",
        author:"Lao-tzu",
    },
    {
        quote:"No matter what side of the argument you are on, you always find people on your side that you wish were on the other.",
        author:"Jascha Heifetz",
    },
    {
        quote:"The strongest principle of growth lies in human choice.",
        author:"George Eliot",
    },    
]

const quote = document.querySelector("div#quote span:first-child");
const author = document.querySelector("div#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;

