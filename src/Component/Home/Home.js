import React from 'react'
import style from './Home.module.css'
import Header from '../Header/Header'

const Home = () => {
  function handleBold() {
    document.execCommand("bold")
  }
  function handleUnderline() {
    document.execCommand("underline")
  }
  function handleItalic() {
    document.execCommand("italic")
  }
  return (
    <div>
      <Header handleBold={handleBold} handleItalic={handleItalic} handleUnderline={handleUnderline}/>
      <div className={style.writtingPad}>
        <p className={style.para}  contentEditable={true}>
          write somthing here
        </p>
      </div>
    </div>
  )
}

export default Home
