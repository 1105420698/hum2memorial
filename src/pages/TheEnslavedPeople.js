import React from 'react';

import Layout from '../components/Layout';

import pic6 from '../assets/images/pic06.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>The Enslaved People of Haiti</h2>
          <p>Many people suffered as slaves under colonial Europe.</p>
        </div>
      </header>
      <section className="wrapper">
        <section className="wrapper">
          <div className="inner">
            <h3 className="major">Slavery in Haiti</h3>
            <blockquote>The slave system in the colonies was regulated by a series of royal edicts, the most important of which was promulgated by Louis XIV in 1685. Taken together, the edicts constituted the <i>Code noir</i>, or slave code. This code prescribed a harsh regime of penalties for slaves who resisted their captivity, especially if they tried to harm their masters in any way. Saint Domingue provided extraordinary sources of wealth to the French. To protect their investments, French slaveholders had to learn at least a minimal amount about their slaves.</blockquote>
            <p>
              The <i>Code noir</i> limited the religious freedom of enslaved people who lived on French colonized islands. The proclamation claimed that all slaves must convert to Catholic Christianity and forbade all other forms of religious faiths. The <i>Code noir</i> mainly focused on defining the condition of slavery and made sure that slaves had virtually no rights at all. Even though the <i>Code noir</i> explicitly mentions that the torture or killing of slaves was to be illegal, usually slave owners were not charged or punished for doing so.
            </p> 
            <h3 className="major">Haitian Revolution</h3>
              <blockquote>
                As the agitation in favor of granting rights to free blacks and abolishing the slave trade gathered steam, the colonies became filled with uncertainty and expectations began rising, especially among the free blacks and mulattos. In response, the white planters mounted their own counterattack and even contemplated demanding independence from France. Less is known about the views of the slaves because hardly any of them could read or write, but the royal governor of Saint Domingue expressed concern about the effects of the Revolution on the colony's slaves. In October 1789 he reported that the slaves considered the new revolutionary cockade (a decoration made up of red, white, and blue ribbons worn by supporters of the Revolution) a "signal of the manumission of the whites . . . the blacks all share an idea that struck them spontaneously: that the white slaves kill their masters and now free they govern themselves and regain possession of the land." In other words, the black slaves hoped to follow in the footsteps of their white predecessors, freeing themselves, killing their masters, and taking over the land.
              </blockquote>
              <p>
                The French Revolution inspired many of the enslaved people on Saint-Domingue to start a revolution of their own. It resulted in the Haitian Revolution, a successful insurrection spearheaded by slaves to free themselves from nearly a hundred and fifty years of European oppression.
              </p>
          </div>
        </section>
      </section>
    </section>
    <section id="four" className="wrapper alt style2">
        <div className="inner">
          <h2 className="major">Important People of the Haitian Revolution</h2>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Toussaint L’Ouverture</h3>
              <p>
                Many people were enslaved during European colonialism in the Americas. This includes millions of Africans and many of the natives in North and South America.
              </p>
              <a href="/Toussaint" className="special">
                Learn more
              </a>
            </article>
          </section>
        </div>
      </section>
  </Layout>
);

export default IndexPage;