import React from 'react';

import Layout from '../components/Layout';

import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import pic9 from '../assets/images/pic09.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Toussaint L’Ouverture</h2>
          <p>The most noted leader of the rebellion and one of the key founders of the nation of Haiti</p>
        </div>
      </header>
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic7} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Early Life</h2>
            <p>
              Toussaint Louverture, also known as Toussaint L'Ouverture, was born into slavery Plantation Bréda in present-day Haiti. He did not grow up without anything either. His master recognized his intelligence and sympathized with him, so he taught Louveture French and allowed him to read and study extensively. After the great slave revolt broke out when Louverture was near 15, he returned his master's favor by saving him from the massacre of slave owners. He quickly gained a reputation in the military after joining the resistant efforts.
            </p>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic6} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Height of Power</h2>
            <blockquote>
              By 1796 Toussaint was the dominant figure in the colony. Hero to his victorious soldiers and to all former slaves, he was respected as well by the resident French authorities. Toussaint now showed that his political instincts were on a par with his military abilities. Even at this date was evident the black-mulatto rift which is one of the chief characteristics of Haitian history. Though the mulattoes, led by Gen. Rigaud, had cooperated with the blacks against the British, many of the mulattoes really wished to reimpose slavery.
            </blockquote>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic9} alt="" />
          </a>
          <div className="content">
            <h2 className="major">The Fall and Legacy</h2>
            <p>
              Louverture also used his power to rebuild the economy that was based on plantations. The Haiti under Louverture returned to prosperity despite theor economy used to rely so heavily on slavery. However, Toussaint's end was fast approaching when Napoleon took over Europe. After fighting ceaselessly against Leclerc, Napoleons brother, Louverture was captured and died in a French prison soon after. Although Haiti fell once again in all out war defending against the French after Louverture's death, France was not able to retake its colony. A year after Louverture passed away of starvation and coldness in his prison, his dream finally came true: Haiti was able to proclaim independence and be free of France.
            </p>
          </div>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;