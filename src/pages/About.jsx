import React from 'react';
import './About.css';
import Header from '../components/Header';
import HeaderImage from '../images/header_bg_1.jpg';
import StoryImage from '../images/about1.jpg';
import VisionImage from '../images/about2.jpg';
import MissionImage from '../images/about3.jpg';

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, dolores numquam consequatur voluptatem iste, vel beatae,
        maxime magnam voluptate velit dicta adipisci. Adipisci veniam amet ipsum.
      </Header>
      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={StoryImage} alt="our story" />
          </div>
          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa commodi, cum illo nemo sequi nostrum incidunt voluptas placeat vitae exercitationem ducimus delectus totam quos! Recusandae, ut repellat esse minima explicabo commodi nostrum, omnis hic debitis alias eveniet dolorem maiores nulla dolore id soluta neque beatae suscipit incidunt corporis.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam animi dolores vel amet, facilis ex quaerat numquam accusamus ipsum voluptatem rem temporibus distinctio repellendus optio facilis laudantium ut repellat esse minima explicabo commodi nostrum</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam animi dolores vel amet, facilis ex quaerat numquam accusamus ipsum voluptatem?</p>
          </div>
        </div>
      </section>
      <section className="about_vision">
        <div className="container about_vision-container">
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt assumenda in velit consequuntur sit maxime eius quidem, vero deserunt adipisci illo quaerat temporibus id. Facere voluptatum eos repellat quod perspiciatis asperiores explicabo iusto dolor unde itaque temporibus porro numquam alias ipsum, ipsa, sed quis labore harum placeat iure tempora dignissimos?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium excepturi soluta, a voluptate, odio, laudantium vel quae unde repellat culpa fugiat? Unde architecto tenetur odit voluptatem quas rem a tempora perspiciatis asperiores explicabo iusto dolor.</p>
          </div>
          <div className="about_section-image">
            <img src={VisionImage} alt="our story" />
          </div>
        </div>
      </section>
      <section className="about_mission">
        <div className="container about_mission-container">
          <div className="about_section-image">
            <img src={MissionImage} alt="our story" />
          </div>
          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa commodi, cum illo nemo sequi nostrum incidunt voluptas placeat vitae exercitationem ducimus delectus totam quos! Recusandae, ut repellat esse minima explicabo commodi nostrum, omnis hic debitis alias eveniet dolorem maiores nulla dolore id soluta neque beatae suscipit incidunt corporis.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam animi dolores vel amet, facilis ex quaerat numquam accusamus ipsum voluptatem rem temporibus distinctio repellendus optio facilis laudantium ut repellat esse minima explicabo commodi nostrum</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam animi dolores vel amet, facilis ex quaerat numquam accusamus ipsum voluptatem?</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
