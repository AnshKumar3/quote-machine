import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const backgroundColor = ["bg-primary", "bg-success", "bg-info", "bg-warning"];
  const quotes=[
    "You miss 100% of the shots you don’t take.",
    "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
    "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
    "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
  ]
  const authors=["ansh","avina","vaibhav","sona"]

  const [author,setauthor]=useState("kiran")
  const [quote,newquote]=useState("If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.");
  const [color, setColor] = useState("bg-success");

  function getRandomIndex() {
    const randomIndex = Math.floor(backgroundColor.length * Math.random());
    return randomIndex;
  }
  function changequote(){
    const n=quotes[getRandomIndex()];
    newquote(n);
    console.log(n)
  }
  function changeauthor(){
    const newauthor = authors[getRandomIndex()];
    setauthor(newauthor)

  }
  function changeBackgroundColor() {
    const newColor = backgroundColor[getRandomIndex()];
    setColor(newColor);
    console.log(newColor);
  }
  function change(){
    changeBackgroundColor();
    changequote();
    changeauthor();
  }

  return (

    <>
    <div id="quote-box" style={{margin:'0 auto'}}>
      <div id="text quote-box" className={`card ${color} text-white`} style={{ width: '500px', height: '200px', margin:'0'}}>
<div id='text'>
        <div className="card-body">{quote}</div>
        <div id='author'>{author}</div>
        <a id='tweet-quote ' target="_top" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=">tweet</a>
        <button type="button" id='new-quote' className="btn btn-success" onClick={change}>new quote</button>
</div>
      </div>
    </div>
    </>
  );
}

export default App;
