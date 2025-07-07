const quotes = [
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  {
    text: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll"
  },
  {
    text: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs"
  },
  {
    text: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    author: "Jim Rohn"
  },
  {
    text: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford"
  }
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const tweetBtn = document.getElementById("tweet-quote");

function showNewQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  quoteText.textContent = `"${quote.text}"`;
  authorText.textContent = `- ${quote.author}`;

  tweetBtn.onclick = () => {
    const tweet = `"${quote.text}" - ${quote.author}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
    window.open(tweetUrl, "_blank");
  };
}

newQuoteBtn.addEventListener("click", showNewQuote);

// Load a quote on page load
showNewQuote();
