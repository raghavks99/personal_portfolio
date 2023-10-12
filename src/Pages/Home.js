import React from 'react'
import '../Styles/Home.css'
function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi ! My name is Karthikeyan Raghav</h2>
        <div className='prompt'>
          <p>A React js developer with a passion for learning new skills</p>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>HTML</h2>
            <span></span>
          </li>
          <li className='item'>
            <h2>CSS</h2>
            <span></span>
          </li>
          <li className='item'>
            <h2>Javascript</h2>
            <span></span>
          </li>
          <li className='item'>
            <h2>React js</h2>
            <span></span>
          </li>
          <li className='item'>
            <h2>Redux</h2>
            <span></span>
          </li>
          <li className='item'>
            <h2>Bootstrap</h2>
            <span></span>
          </li>
          <li className='item'>
            <h2>Material UI</h2>
            <span></span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
