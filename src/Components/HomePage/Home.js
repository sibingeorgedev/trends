import React from 'react';
import './Home.css';
import Nav from '../NavBar/Nav.js';
import Hero from '../../Images/hero.jpg';

function Home() {
  return (
    <div className="home-container">
        <Nav />
      <main>
        <section className="hero">
          <h1>Welcome to Delicious Bites</h1>
          <p>Experience the best dining in town!</p>
          <button onClick={() => alert('Reservation page coming soon!')}>Reserve a Table</button>
        </section>

        <section id="about" className="about">
          <h2>About Us</h2>
          <p>Delicious Bites offers a fine dining experience with a wide variety of cuisines to satisfy your cravings.</p>
        </section>

        <section id="menu" className="menu">
          <h2>Our Menu</h2>
          <ul>
            <li>Pasta Primavera</li>
            <li>Grilled Salmon</li>
            <li>Classic Cheeseburger</li>
            <li>Vegan Buddha Bowl</li>
          </ul>
        </section>

        <section id="contact" className="contact">
          <h2>Contact Us</h2>
          <p>Email: contact@deliciousbites.com</p>
          <p>Phone: (123) 456-7890</p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Delicious Bites. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
