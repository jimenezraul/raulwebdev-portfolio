import connectMe from '../img/connectme.png';
import bookMe from '../img/bookme.png';
import proPet from '../img/pet-store.png';
import inventory from '../img/IMS.png';
import coinhiz from '../img/coinhiz.png';
import techBlog from '../img/blog.png';

export const projectsList = [
  {
    title: 'ConnectME | Social Media App',
    description:
      'ConnectME is a social media application that allows users to create an account, make posts, and interact with other users. It is built using the MERN stack (MongoDB, Express, React, Node.js) and is deployed on Heroku.',
    image: connectMe,
    tech: [
      'React',
      'Redux',
      'TailwindCSS',
      'JavaScript',
      'TypeScript',
      'NodeJS',
      'Express',
      'MongoDB',
      'GraphQL',
      'Webpack',
      'OAuth2',
      'FontAwesome',
      'Heroku',
    ],
    demoAccount: {
      email: 'demo@example.com',
      password: 'Demo1234$',
    },
    liveDemo: 'https://morning-tundra-02449.herokuapp.com/',
    sourceCode: 'https://github.com/jimenezraul/social-media',
  },
  {
    title: 'BookMe | Scheduling App',
    description:
      'BookMe is a web application that give Salon|Barbershop owner the platform they need to bring their business to the next level. The application is designed to give customers the ability to book appointments online and manage their appointments.',
    image: bookMe,
    tech: [
      'React',
      'TailwindCSS',
      'DaisyUI',
      'Squareup API',
      'JavaScript',
      'NodeJS',
      'Express',
      'Redux',
      'Auth0',
      'Heroku',
    ],
    liveDemo: 'https://desolate-chamber-34231.herokuapp.com/',
    sourceCode: 'https://github.com/jimenezraul/BookMe',
  },
  {
    title: 'ProPet | E-Commerce',
    description:
      'ProPet is an online store that allows buyers to log in, browse through multiple categories of pets, pick out products, select favorite products, and them to cart and complete the purchase.',
    image: proPet,
    tech: [
      'MERN Stack',
      'Redux',
      'GraphQL',
      'TailwindCSS',
      'Stripe API',
      'Heroku',
    ],
    liveDemo: 'https://afternoon-spire-43659.herokuapp.com/',
    sourceCode: 'https://github.com/jimenezraul/pet-supplies-store',
  },
  {
    title: 'Inventory Management System',
    description:
      'This Inventory Management System application will allow a company with large amount of products to manage their inventory.',
    image: inventory,
    tech: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Handlebars',
      'NodeJS',
      'ExpressJS',
      'Bootstrap',
      'MySQL',
      'Sequelize',
      'MVC',
      'RESTful API',
      'Heroku',
    ],
    demoAccount: {
      email: 'demo@example.com',
      password: 'demo1234',
    },
    liveDemo: 'https://ims-inventory-s.herokuapp.com/',
    sourceCode: 'https://github.com/jimenezraul/IMS',
  },
  {
    title: 'CoinHiz',
    description:
      'Coinhiz is a Crypto currency application the gives users information, current price, and a chart with historical price of the coin. Give you the ability to save your favorite coins and also get the locations of any Bitcoin atm around you or in any city.',
    image: coinhiz,
    tech: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TailwindCSS',
      'Web API',
      'Mapbox API',
      'jQuery',
    ],
    liveDemo: 'https://jimenezraul.github.io/coinhiz/',
    sourceCode: 'https://github.com/jimenezraul/coinhiz',
  },
  {
    title: 'Tech Blog',
    description:
      'This is a tech blog created using MVC architecture. It is a simple blog that allows users to create, edit, and delete posts. It also allows users to comment on posts.',
    image: techBlog,
    tech: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Bootstrap',
      'MVC',
      'NodeJS',
      'Express',
      'MySQL',
      'Handlebars',
    ],
    liveDemo: 'https://peaceful-hollows-93155.herokuapp.com/',
    sourceCode: 'https://github.com/jimenezraul/mvc-tech-blog',
  },
];
