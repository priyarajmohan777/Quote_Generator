const quotes = [
  { quote: "Youth is happy because it has the ability to see beauty. Anyone who keeps the ability to see beauty never grows old.", author: "Franz Kafka" },
  { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { quote: "Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.", author: "Sylvia Plath" },
  { quote: "I am not afraid of storms, for I am learning how to sail my ship.", author: "Louisa May Alcott" },
  { quote: "No need to hurry. No need to sparkle. No need to be anybody but oneself.", author: "Virginia Woolf" },
  { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" }
];

function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selected = quotes[randomIndex];

  document.getElementById("quote").textContent = selected.quote;
  document.getElementById("author").textContent = `- ${selected.author}`;
}
