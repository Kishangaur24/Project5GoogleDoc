import React from 'react'
import style from "./Title.module.css"

export default function Title() {
  return (
    <div className={style.main}>
       <img className={style.img} src="https://cdn-icons-png.flaticon.com/512/5968/5968517.png" alt="img" />
       <span>Google Doc</span>
    </div>
  )
}
