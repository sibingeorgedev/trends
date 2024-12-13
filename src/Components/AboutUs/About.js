// Page Created by Akshay Kumar/8919537


import React from "react";
import Nav from "../NavBar/Nav.js"; 
import "./About.css"; // Custom CSS for the About page

const About = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Nav />

     
      <div className="about-page">
        {/* Header Section */}
        <header className="header">
          <div className="container">
            <h1 className="title">About Us</h1>
            <p className="subtitle">
              Discover the story, vision, and people behind our restaurant.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="container content">
          {/* Our Mission */}
          <section className="card">
            <h2 className="card-title">Our Mission</h2>
            <p>
              At our restaurant, we aim to create unforgettable dining
              experiences by offering exceptional food, warm service, and a cozy
              atmosphere. We believe in using fresh, locally-sourced ingredients
              to craft dishes that delight your taste buds while supporting our
              local community.
            </p>
          </section>

          {/* Our Vision */}
          <section className="card">
            <h2 className="card-title">Our Vision</h2>
            <p>
              Our vision is to become a beacon of culinary excellence by
              embracing innovation and sustainability. We aspire to build a
              space where people come together to share laughter, make memories,
              and enjoy extraordinary meals prepared with love and care.
            </p>
          </section>

          {/* Services Section */}
          <section className="card">
            <h2 className="card-title">What We Offer</h2>
            <ul className="services-list">
              <li>Fine dining with a wide range of cuisines</li>
              <li>Customizable catering services for all occasions</li>
              <li>Special events like live music nights and wine tastings</li>
              <li>A cozy private dining area for intimate gatherings</li>
            </ul>
          </section>

          {/* Meet the Team */}
          <section>
            <h2 className="team-title">Meet Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="team-image-container">
                  <img
                    src="/Images/chef-john.jpg"
                    alt="Chef John"
                    className="team-img"
                  />
                </div>
                <h3>Chef John</h3>
                <p>Head Chef with 20 years of experience in global cuisines.</p>
              </div>
              <div className="team-member">
                <div className="team-image-container">
                  <img
                    src="/Images/chef-ana.jpg"
                    alt="Chef Anna"
                    className="team-img"
                  />
                </div>
                <h3>Chef Anna</h3>
                <p>Pastry Expert with a passion for desserts and pastries.</p>
              </div>
              <div className="team-member">
                <div className="team-image-container">
                  <img
                    src="/Images/manager-michelle.jpg"
                    alt="Manager Michelle"
                    className="team-img"
                  />
                </div>
                <h3>Manager Michelle</h3>
                <p>
                  Operations Manager ensuring a seamless dining experience.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <p>© 2024 Our Restaurant. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default About;
