import tutcode from "../images/tutcode.png";
import enjeck from "../images/enjeck.png";
import ll from "../images/libre-logos.svg";
import gfolio from "../images/gfolio.png";
import jpg2svg from "../images/jpg2svg.png";
import gg from "../images/geo-guess.png";
import aws_website from "../images/aws_website.png";
import Crypto_Hunter from "../images/Crypto_Hunter.png"
import brick_breaker from "../images/brick_breaker.png"
import Python_logo from "../images/Python_logo.png"
import CICD_pipeline from "../images/CICD_pipeline.png"
import blobby from "../images/blobby.png";
import cav from "../images/CryptographyVisualizer.png"
import placeholder from "../images/bg1.png";
export const ProjectsContent = [
  {
    link: "http://kiran-register-login.s3-website-us-east-1.amazonaws.com",
    img: aws_website,
    name: "Deploying end to end website on AWS",
    excerpt: `Created the Register-Login website which uses the backend as a NodeJs serverless API with a DynamoDB for user information storage. AWS LAMBDA is used to run the logic,it uses bcrypt to encrypt passwords and uses JSON WEB TOKEN to generate tokens. The frontend is built with React JS and is hosted on an AWS S3 Bucket. The API gateway intercepts all incoming requests and sends them through the API management system, which handles a variety of necessary functions which are authentication, routing, rate limiting, billing, analytics, monitoring, policies, alerts, and security.`,
    tools: "JavaScript · HTML · CSS · ReactJs · NodeJs"
  },
  {
    link: `${window.location.origin}`,
    img: CICD_pipeline ,
    name: "Implementing CI/CD Pipeline and Deploying in Test Server using Docker",
    excerpt: `Managing nodes with Jenkins master. Continuous Integration with Jenkins node and deploying in test server. Setting up infrastructure with Ansible, Puppet.`,
    tools: "Maven · Jenkins · Puppet · Ansible · Docker · Git"
  },
  {
    link: "https://charming-kashata-58eae9.netlify.app",
    img: Crypto_Hunter,
    name: "Cryto Hunter app in Web Application Development",
    excerpt: `Developed an app which allows you to use one platform to track all the prices of  Cryptocurrencies and their market capacity.This app uses React JS, Material UI and Chart JS with full responsive fuctionality. And uses Context API to manage the state of our app and Coin Gecko API for backend.`,
    tools: "JavaScript · HTML · CSS · ReactJs"
  },
  {
    link: `${window.location.origin}`,
    img: Python_logo,
    name: "A Simplified Client-Server solution for File Management",
    excerpt: `Created a Python based client-server application where the server receives and handles requests from
    the client.The server awaits requests done by the client and begins working on a request as soon as it is received.The concepts like AsyncIo, TCP/IP protocols and Exception handling were used.`,
    tools: "Python"
  },
  {
    link: "https://github.com/kiranlucky3/Brick_Breaker",
    img: brick_breaker,
    name: "Brick Breaker Game",
    excerpt: `Implemented Java code for playing the Brick Breaker game using different graphics. This game is developed using JFrame
   and JPanel for drawing different graphics to  make this game work perfectly. The player uses the platform to keep the ball running. The goal is to break the bricks without missing the ball with your platform. The project makes use of Java swing, object-oriented programming system concepts.`,
    tools: "Java · JFrame · JPanel"
  },
  {
    link: "https://github.com/kiranlucky3/Ship_of_Fools",
    img: Python_logo,
    name: "Ship of fools game",
    excerpt: `{Implemented  Python code for playing the ship of fools game using different class relationships. The game stops only when a player reaches the winning score. This code shows complete understanding of object oriented programming.`,
    tools: "Python"
  },
  {
    link: `${window.location.origin}`,
    img: gfolio,
    name: "Google Search Portfolio (this website)",
    excerpt: `A personal website simulating the Google Search platform. Developed with
    HTML, CSSS and React`,
    tools: "React · CSS"
  },
];
