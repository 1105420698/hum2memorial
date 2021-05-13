import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Bibliography</h2>
          <p>This page contains a list of sources.</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Citations</h3>
          <h4>Primary Sources</h4>
		  <ul className="alt">
		  <li>“The Code Noir (The Black Code),” LIBERTY, EQUALITY, FRATERNITY: EXPLORING THE FRENCH REVOUTION, accessed May 13, 2021, https://revolution.chnm.org/d/335.</li>
		  <li></li>
		  <li></li>
		  </ul>
          <h4>Secondary Sources</h4>
		  <ul className="alt">
		  <li>"Slavery and the Haitian Revolution." LIBERTY, EQUALITY, FRATERNITY: EXPLORING THE FRENCH REVOUTION. Accessed May 13, 2021. https://revolution.chnm.org/exhibits/show/liberty--equality--fraternity/slavery-and-the-haitian-revolu.</li>
		  <li></li>
		  <li></li>
		  </ul>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
