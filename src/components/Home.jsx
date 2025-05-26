import React from 'react'
import './Home.css'
import book_logo from '../assets/book_logo.png';
import gold_logo from '../assets/gold_logo.png';

const Home = () => {
  return (
    <div className='img-style'>
        <img src={book_logo} alt="" className='hover-img'/>
        <img src={gold_logo} alt="" className='hover-img'/>

    </div>
  )
}

export default Home