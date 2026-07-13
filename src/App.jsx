import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Color from './components/color/Color'
import FavoriteColor from './components/color/favorite-color/FavoriteColor'

function App() {
  const [color, setColor] = useState("red")

  const changeToBlue = () => {
    setColor('blue')
  }

  const changeToRed = () => {
    setColor('red')
  }

  const changeToGreen = () => {
    setColor('green')
  }

  const changeToColor = (color) => {
    setColor(color);
  }

  return (
    <>
      <section className="container my-2">
        <button className="btn btn-primary me-2" onClick={() => changeToColor('blue')}>
          Change to Blue
        </button>
        <button className="btn btn-danger me-2" onClick={() => {changeToColor('red')}}>
          Change to Red
        </button>
        <button className="btn btn-success" onClick={() => {changeToColor('green')}}>
          Change to Green
        </button>
        <hr/>
        <Color color={color}/>
        <hr/>
        <FavoriteColor color={color}/>
      </section>
    </>
  )
}

export default App
