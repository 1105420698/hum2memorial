import React from 'react';

import Layout from '../components/Layout';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>The Enslaved People</h2>
          <p>Many people suffered as slaves under colonial Europe.</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Slavery in Haiti</h3>
          <blockquote>The slave system in the colonies was regulated by a series of royal edicts, the most important of which was promulgated by Louis XIV in 1685. Taken together, the edicts constituted the <i>Code noir</i>, or slave code. This code prescribed a harsh regime of penalties for slaves who resisted their captivity, especially if they tried to harm their masters in any way. Saint Domingue provided extraordinary sources of wealth to the French. To protect their investments, French slaveholders had to learn at least a minimal amount about their slaves.</blockquote>
          <p>
            The <i>Code noir</i> limited the religious freedom of enslaved people who lived on French colonized islands. The proclamation claimed that all slaves must convert to Catholic Christianity and forbade all other forms of religious faiths. The <i>Code noir</i> mainly focused on defining the condition of slavery and made sure that slaves had virtually no rights at all. Even though the <i>Code noir</i> explicitly mentions that the torture or killing of slaves was to be illegal, usually slave owners were not charged or punished for doing so.
          </p>  

          <h3 className="major">Vitae phasellus</h3>
          <p>
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
            Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
            egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
            in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
          </p>

          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Sed feugiat lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Nisl placerat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
