import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Statement</h2>
          <p>My experience designing and constructing this memorial.</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Artist Statement</h3>
          <p style={{textIndent: "40px", lineHeight: "2"}}>
            When I heard about the project being a memorial, I immediately thought about creating a website. I have been to a few memorials in the United States. One of the most common similarities between all the memorials I visited was that they had monuments: Massive stone structures or metal statues that can last for a long time. A website can last a long time on the internet, so I think it is a suitable format for a memorial. The point of a monument, after all, is to remember. I thought about how in the past year, people in the United States had advocated against and toppled several statues that memorized confederate generals. For my memorial, similarly to those toppled statues, I want it to remember Toussaint Louverture, a Haitian general and a Haitian Revolution leader, and all the Haitians who stood for their freedom with him.
          </p>
          <p style={{textIndent: "40px", lineHeight: "2"}}>
            The message of my memorial is clear: we cannot responsibly forget the past. Louverture and many others that existed in history dedicated their life to make their change in the world. Their stories taught us invaluable lessons, and it would be their undoing if we forget their accomplishments. I did not build my website from scratch, but I did most of the coding so I could freely change the elements and design. Overall I used a dark and grayish-blue color. It seemed reasonable since the people and stories the website remembers were serious and sometimes somber. The task of presenting the history of racial slavery and the emotions surrounding it was not easy. I tried to avoid unnecessary elements in the website as much as possible while maintaining simple and aesthetically pleasing typography for the visitors of this memorial. While the specific choice of using a website in itself is a part of the message, there is much more in the actual content.<br />
          </p>
          <p style={{textIndent: "40px", lineHeight: "2"}}>
            On the front page, I briefly explained to the visitors the definition of racial slavery and the meaning of a memorial. I also summarized the message so that people understand the importance of this piece of history while allowing them to be flexible with their interpretation of the website. Toussaint Louverture was never the most charismatic person, nor was he ever the most popular among the Haitians. The story of Toussaint Louverture is being remembered because he symbolized the rise of a revolution. Born as a slave, Louverture became the leading force of a revolution that freed Haiti from its century-long oppressor and gave hope to other enslaved people worldwide. Understanding history had always meant to teach a lesson for the future, so preserving history is preserving human knowledge. Suppose the story of Toussaint Louverture goes forgotten. How would people of the future ever learn that one could start with absolutely nothing? Through studying and resisting, one can eventually lead the changing tide that can shake society. This memorial touched upon the enslaved people and their culture worldwide, but its main focus rests on Louverture. The website takes on the perspective of the enslaved Haitians under colonial France and traces the life of Toussaint Louverture.<br />
          </p>
          <p style={{textIndent: "40px", lineHeight: "2"}}>
            I want to focus on the Haitian Revolution because it was commonly recognized as one of the most radical and triumphant Atlantic Revolutions in the 18th to 19th century. The Haitians were able to liberate themselves and abolish slavery, maintain a radically different government, and most importantly kept their freedom from the reluctant French afterward. Their success symbolizes an integral part of the history of slavery and resistance. That is why it is also essential to remember their contributions to our world now and future and make sure people today understand their struggle.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;