let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");

const quotes = [
  {
    "quote": "\"Be the change that you wish to see in the world.\"",
    "author": " - Mahatma Gandhi"
  },
  {
    "quote": "\"In the middle of every difficulty lies opportunity.\"",
    "author": " - Albert Einstein"
  },
  {
    "quote": "\"The future belongs to those who believe in the beauty of their dreams.\"",
    "author": " - Eleanor Roosevelt"
  },
  {
    "quote": "\"Do what you can, with what you have, where you are.\"",
    "author": " - Theodore Roosevelt"
  },
  {
    "quote": "\"It always seems impossible until it's done.\"",
    "author": " - Nelson Mandela"
  },
  {
    "quote": "\"Happiness depends upon ourselves.\"",
    "author": " - Aristotle"
  },
  {
    "quote": "\"The only way to do great work is to love what you do.\"",
    "author": " - Steve Jobs"
  },
  {
    "quote": "\"Success is not final, failure is not fatal: It is the courage to continue that counts.\"",
    "author": " - Winston Churchill"
  },
  {
    "quote": "\"That which does not kill us makes us stronger.\"",
    "author": " - Friedrich Nietzsche"
  },
  {
    "quote": "\"The best way to predict the future is to invent it.\"",
    "author": " - Alan Kay"
  },
  {
    "quote": "\"Life is what happens when you're busy making other plans.\"",
    "author": " - John Lennon"
  },
  {
    "quote": "\"Not everything that can be counted counts, and not everything that counts can be counted.\"",
    "author": " - Albert Einstein"
  }
];

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
})