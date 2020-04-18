import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

function Buttons(props) {
  return (
    <div className='buttons-container'>
      <a
        id='tweet-quote'
        className='button'
        href='twitter.com/intent/tweet'
        alt=''
        title='Tweet this quote!'
      >
        <TwitterIcon />
      </a>
      <a
        id='facebook-quote'
        className='button'
        href='_blank'
        alt=''
        title='Post this quote on Facebook!'
      >
        <FacebookIcon />
      </a>
      <button id='new-quote' onClick={props.onClick} className='button'>
        New quote
      </button>
    </div>
  );
}

export default Buttons;
