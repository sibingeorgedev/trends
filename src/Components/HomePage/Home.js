// Page Created - Alister Tom Jose/Student No - 8911723

import React from 'react';
import './Home.css';//Imported Css from externam CSS page
import Nav from '../NavBar/Nav';

function Home() {
  return (
    <div className="home">
      <Nav/>{/*Used The Navigation bar in the Home page*/}
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to Delicious Bites</h1>{/*Header Content Of the page*/}
          <p>Your destination for mouth-watering meals and an unforgettable dining experience.</p>
          <button>Explore Menu</button>
        </div>
        <div className="hero-image">
          <img src="/Images/hero.jpg" alt="Delicious food" />{/*Header Image Of the page*/}
        </div>
      </div>

      <div className="about-section">
        <div className="about-content">
        <h2>Our Promise</h2>{/*Major Content Of the page*/}
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
        <img src="/Images/about-img.jpg" alt="About us" className="about-image" />
      </div>

      {/* Featured Dishes Section */}
      <div className="featured-dishes">
        <h2>Our Featured Dishes</h2>
        <div className="dishes-container">
          <div className="dish">
            <img src="/Images/dishh1.jpg" alt="Dish 1" />
            <h3>Signature Pasta</h3>
          </div>
          <div className="dish">
            <img src="/Images/dishh2.jpg" alt="Dish 2" />
            <h3>Gourmet Pizza</h3>
          </div>
          <div className="dish">
            <img src="/Images/dishh3.jpg" alt="Dish 3" />
            <h3>Exotic Desserts</h3>
          </div>
        </div>
      </div>
      {/*Footer Part Of the Page */}
      <footer className="footer">
          <div className="container">
            <p>© 2024 Delicious Bites. All rights reserved.</p>
          </div>
        </footer>
    </div>
  );
}

export default Home;
