import { useEffect, useState } from 'react'
import cookies from "js-cookie"

import kuru1 from './assets/audio/kuru1.mp3'
import kuru2 from './assets/audio/kuru2.mp3'
import herta from './assets/img/herta.gif'
import './css/App.css'

const KururinList = [kuru1, kuru2]

const App = () => {
  const [count, setCount] = useState(0)
  const randomList = Math.floor(Math.random() * KururinList.length)

  useEffect(() => {
    const getCookie = cookies.get('count')
    // const getLocalStorage = localStorage.getItem('count')
    if (getCookie) {
      setCount(parseInt(getCookie))
    }
  }, [])

  const handleClick = () => {
    const audio = new Audio(KururinList[randomList])
    const newValue = count + 1

    cookies.set('count', newValue.toString())
    // localStorage.setItem('count', newValue.toString())

    setCount(newValue)
    audio.play()
  }

  return (
    <>
      <div onClick={handleClick} className='container'>
        <h1>Kuru Kuru~</h1>
        <h3>{count}</h3>
        <img src={herta} alt="herta" className="herta" />
      </div>
    </>
  )
}

export default App
