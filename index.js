// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place.

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.

const quotesURL =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

async function getQuotes() {
  const res = await fetch(quotesURL);
  const data = await res.json();
  return data.quotes;
}

async function main() {
  const arrOfQuotes = await getQuotes();
  const currentQuote = getRandomQuote(arrOfQuotes);
  $("#text").text(currentQuote.quote);
  $("#author").text(currentQuote.author);
  addTwitterHref(currentQuote.quote + " -" + currentQuote.author);
  $("#new-quote").on("click", () => {
    const newCurrentQuote = getRandomQuote(arrOfQuotes);
    $("#text").text(newCurrentQuote.quote);
    $("#author").text(newCurrentQuote.author);
    addTwitterHref(currentQuote.quote + " -" + currentQuote.author);
  });
}

function getRandomQuote(arrOfQuotes) {
  const randomQuoteIndex = Math.floor(Math.random() * arrOfQuotes.length);
  return arrOfQuotes[randomQuoteIndex];
}

function addTwitterHref(tweetText) {
  $("#tweet-quote").attr(
    "href",
    "https://twitter.com/intent/tweet?text=" + tweetText.replace(" ", "&20")
  );
}

main();
