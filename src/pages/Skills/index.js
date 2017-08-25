import React from 'react'
import './styles.css'

const Skills = () => (
  <div className="Skills">
    <div className="wrapper">
      <div className="row">
        <div className="col-12">
          <h2>Technical Skills</h2>
          <h3>Front-end development</h3>
          <ul>
            <li><strong>Favourite tools:</strong> React + Redux</li>
            <li>I've done both projects using vanilla JavaScript, html and css and using preprocessors such as Webpack, browserify, Gulp, etc.</li>
          </ul>
          <h3>Back-end development</h3>
          <ul>
            <li><strong>Favourite tool:</strong> Node.js</li>
            <li>I've done projects using web such frameworks Express, socket.io, Laravel and Java Spark</li>
            <li>I have worked with SQL, and Mongo databases.</li>
          </ul>
          <h3>Platforms</h3>
          <ul>
            <li>I am familiar with CMS's wordpress, cosmicjs and opencart</li>
            <li>I have experience using various API's such as ExactOnline and Twitter</li>
            <li>I have used Docker and Heroku</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default Skills
