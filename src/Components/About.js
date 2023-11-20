import React from 'react'

const About = () => {
  return (
    <div className='about-section'>
        <div className="about-img-section">
            <img src="https://c0.wallpaperflare.com/preview/429/931/604/transportation-vehicle-automobile-car.jpg" alt="" />

        </div>
        <h1>Don't squeeze in a sedan when you could relax in van.</h1>
        <div className="about-para">
        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.</p>
        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        
        <div className="explore-vans">
            <h1>Your destination is waiting.</h1>
            <h1>Your van is waiting.</h1>
            <button className="explore-btn">Explore our vans</button>
        </div>
      
    </div>
  )
}

export default About
