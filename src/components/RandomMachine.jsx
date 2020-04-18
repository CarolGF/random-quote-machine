import React, { useState } from "react";
import Buttons from "./Buttons";
import quotes from "./quotes.js";

function RandomMachine() {
  const [quote, setQuote] = useState({
    currentQuote:
      "The only person you are destined to become is the person you decide to be.",
    currentAuthor: "Ralph Waldo Emerson",
  });

  function randomizeData() {
    let newData = quotes[Math.floor(Math.random() * quotes.length)];
    return {
      newQuote: newData.quote,
      newAuthor: newData.author,
    };
  }

  function getRandomQuote() {
    let random = randomizeData();
    setQuote({
      currentQuote: random.newQuote,
      currentAuthor: random.newAuthor,
    });
  }

  return (
    <div id='quote-box' className='quote-box'>
      <div id='text'>
        <span>{quote.currentQuote}</span>
      </div>
      <div id='author'>
        <span>- {quote.currentAuthor}</span>
      </div>
      <Buttons onClick={getRandomQuote} />
    </div>
  );
}

export default RandomMachine;
