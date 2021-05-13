import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Bibliography</h2>
          <p>This page contains lists of sources used to construct this memorial</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Citations</h3>
          <h4>Primary Sources</h4>
		  <ul className="alt">
		  <li>“The Code Noir (The Black Code),” LIBERTY, EQUALITY, FRATERNITY: EXPLORING THE FRENCH REVOUTION, accessed May 13, 2021, https://revolution.chnm.org/d/335.</li>
		  </ul>
          <h4>Secondary Sources</h4>
		  <ul className="alt">
		  <li>"Slavery and the Haitian Revolution." LIBERTY, EQUALITY, FRATERNITY: EXPLORING THE FRENCH REVOUTION. Accessed May 13, 2021. https://revolution.chnm.org/exhibits/show/liberty--equality--fraternity/slavery-and-the-haitian-revolu.</li>
		  <li>“Toussaint L’Ouverture in An Historical Account of the Black Empire of Hayti,” LIBERTY, EQUALITY, FRATERNITY: EXPLORING THE FRENCH REVOUTION, accessed May 13, 2021, https://revolution.chnm.org/d/347.</li>
		  <li>"François Dominique Toussaint L'Ouverture." In Encyclopedia of World Biography, 2nd ed., 278-279. Vol. 15. Detroit, MI: Gale, 2004. Gale eBooks (accessed May 13, 2021). https://link.gale.com/apps/doc/CX3404706438/GVRL?u=mlin_w_nthfield&sid=GVRL&xid=4e0c13de.</li>
		  </ul>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;