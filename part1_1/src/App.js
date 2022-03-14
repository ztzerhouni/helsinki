import React, {useState} from 'react'

const Display = ({counter}) => <>{counter}</>

const Button = ({onClick, text}) => {
  return (
    <div>
      <button onClick={onClick}>
        {text}
      </button>
    </div>
    
  )
}

const History = (props) => {
  if(props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [ left, setLeft ] = useState(0)
  const [ right, setRight ] = useState(0)
  const [ allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <Display counter = {left} />
      <Button 
        onClick={handleLeftClick} 
        text={'Left'} />
      <Button 
        onClick={handleRightClick} 
        text={'Right'} />
      <Display counter = {right} />
      <History allClicks = {allClicks} />
    </div>
  )
}

export default App