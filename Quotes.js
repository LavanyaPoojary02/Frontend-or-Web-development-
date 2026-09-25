const quotes = ["Believe in yourself", "Never give up", "Stay positive", "Dream big", "Work hard, stay humble"];
const quoteText = document.getElementById("quoteText");
const btn = document.getElementById("newQuoteBtn");

btn.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
});
