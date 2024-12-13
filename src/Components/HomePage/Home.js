import React from 'react';
import './Home.css';
import Nav from '../NavBar/Nav';
import Hero from '../../Images/hero.jpg';
import About from '../../Images/about.jpg';
import dish1 from '../../Images/dish1.jpg';
import dish2 from '../../Images/dish2.jpg';
import dish3 from '../../Images/dish3.jpg';

function Home() {
  return (
    <div className="home">
      <Nav/>
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to Delicious Bites</h1>
          <p>Your destination for mouth-watering meals and an unforgettable dining experience.</p>
          <button>Explore Menu</button>
        </div>
        <div className="hero-image">
          <img src={Hero} alt="Delicious food" />
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="about-content">
        <h2>Our Promise</h2>
    <p>
      At Delicious Bites, we believe that food is more than just sustenance—it's an experience. Our restaurant is dedicated to providing you with not only exceptional dishes made from the finest ingredients but also an atmosphere where you can feel at home. From our talented chefs to our friendly staff, we are here to ensure that every dining experience is memorable.
    </p>
    <p>
      Our menu combines traditional favorites with modern twists, offering a variety of options for every palate. Whether you're in the mood for a hearty meal, a light snack, or a delicious dessert, we have something that will satisfy your cravings. We take great pride in sourcing local and fresh ingredients to craft every dish, ensuring that each bite is bursting with flavor.
    </p>
    <p>
      At Delicious Bites, we focus on quality, creativity, and customer satisfaction. Our team is passionate about delivering the best dining experience, whether you're celebrating a special occasion, having a casual meal with friends, or simply enjoying a quiet dinner. Every time you visit, we aim to make you feel like part of our family.
    </p>
    <p>
      Join us today, and let us take you on a culinary journey that will excite your senses and leave you craving more. We look forward to serving you!
    </p></div>
        <img src={About} alt="About us" className="about-image" />
      </div>

      {/* Featured Dishes Section */}
      <div className="featured-dishes">
        <h2>Our Featured Dishes</h2>
        <div className="dishes-container">
          <div className="dish">
            <img src={dish1} alt="Dish 1" />
            <h3>Signature Pasta</h3>
          </div>
          <div className="dish">
            <img src={dish2} alt="Dish 2" />
            <h3>Gourmet Pizza</h3>
          </div>
          <div className="dish">
            <img src={dish3} alt="Dish 3" />
            <h3>Exotic Desserts</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
