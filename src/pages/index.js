import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpeg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-pencil"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">What is racial slavery?</h2>
            <p>
              <b>Racial slavery</b> had such an impact on our society because it was different from the traditional model of slavery commonly used by Europeans at the time.{' '}
              Slavery before <b>racial slavery</b> is often referred to as ancient slavery, resulted from religion, class status, being captured from a war, or in the form of debt peonage.{' '}
              <b>Racial slavery</b> did not have any of the poltical or economical foundation of ancient slavery, it was simply based on the color of ones skin.
            </p>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">This is a memorial</h2>
            <p>
              
            </p>
            <blockquote>
              noun <br />
              1. something designed to preserve the memory of a person, event, etc., as a monument or a holiday.<br />
              2. a written statement of facts presented to a sovereign, a legislative body, etc., as the ground of, or expressed in the form of, a petition or remonstrance.<br />
              - Definition of "Memorial"
            </blockquote>
            <p>
              This website is a memorial to share the history of racial slavery and its lasting effects on society today with modern audiences. It is important that we do not forget our past so that we are equipped to understand the root of racism and social injustice.
            </p>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">The message</h2>
            <p>
              To fight racism and other issues of our modern world, we must look back to when the seeds of those issues were planted. Only through understanding the context of those eras, we may allow ourselves to be more confident in the understanding of modern issues. It is true that we cannot change our past, but we have the choice to not forget it and use its knowledge to make our society better today.
            </p>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Who are being remembered through this memorial?</h2>
          <p>
            Racial slavery affected many parts of the world and severely impacted the lives of many indigenous people under colonial Europe. When colonizers invaded these spaces, they often disrupted Indigenous worldviews that included geographic knowledge as well as spiritual and cultural beliefs that explained the world around them.
          </p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">The Enslaved People of Haiti</h3>
              <p>
                Many people were enslaved during European colonialism in the Americas. This includes millions of Africans and many of the natives in North and South America.
              </p>
              <a href="/TheEnslavedPeople" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Indigenous Culture</h3>
              <p>
                Many indigenous people that lived in the Americas during European colonialism experienced cultural violence. Often times the European settlers attempted to suppress their religion, food, family formation, and their right to land.
              </p>
            </article>
          </section>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
