import "./App.css";
import { Tex } from 'react-tex';
import React, {useState} from 'react';

const Button = ({onClick, text, counter}) => (
  <div className='buttoncol'>
    <button  onClick={onClick}>
      {text}
    </button>
    <p>{counter}</p>
  </div>
  
)

const StatisticLine = ({text,value,symbol}) => (
    <tr>
      <td>{text}</td>
      <td>{value}{symbol}</td>
    </tr>
)

const Statistics = ({good,neutral,bad}) => {
  if(good+bad+neutral === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  else {
    return (
      <div>
        <table className="stattable">
          <tbody>
            <StatisticLine text="Good" value={good}></StatisticLine>
            <StatisticLine text="Neutral" value={neutral}></StatisticLine>
            <StatisticLine text="Bad" value={bad}></StatisticLine>
            <StatisticLine text="Total" value={good+neutral+bad}></StatisticLine>
            <StatisticLine text="Average" value={(good-bad)/(good+bad+neutral)}></StatisticLine>
            <StatisticLine text="Positive" value={100*good/(good+bad+neutral)} symbol="%"></StatisticLine>
          </tbody>
        </table>
      </div>
    )
  }
}

const Formula = ({title,content}) => (
  <div className="buttoncol">
    <h2>{title}</h2>
    <p><Tex texContent={content}></Tex></p>
  </div>
)

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good+1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral+1)
  }

  const handleBadClick = () => {
    setBad(bad+1)
  }

  return (
    <>
    <div className="landing">
      <h1>Give Feedback</h1>
      <div className="row">
        <Button onClick={handleGoodClick} text="Good" counter={good}></Button>
        <Button onClick={handleNeutralClick} text="Neutral" counter={neutral}></Button>
        <Button onClick={handleBadClick} text="Bad" counter={bad}></Button>
      </div>
    </div>
    <div className = "stats">
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
    <div className ="stats">
      <h1>Assorted Formulae</h1>
      <div className ="row">
        <Formula title="Pythagorean's Theorem" content="a^2 + b^2 = c^2"></Formula>
        <Formula title="Law of Sines" content="\frac{a}{\sin{\alpha}} = \frac{b}{\sin{\beta}}"></Formula>
        <Formula title="The Fundamental Theorem of Calculus" content="\int_{a}^{b} f(x)dx = F(b) - F(a)"></Formula>
      </div>
    </div>
    <footer className='foot'>Zak's Training Productions &copy; 2022</footer>
    </>
  );
}

export default App;
