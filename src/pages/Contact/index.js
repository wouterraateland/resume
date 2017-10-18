import React from 'react'
import './styles.css'

const Contact = () => (
  <div className="Contact">
    <div className="wrapper">
      <div className="row">
        <div className="col-12">
          <h2>Contact information</h2>
        </div>
        <div className="col-6">
          <a className="Contact-social email" href="mailto:wouterraateland@gmail.com">
            <span>wouterraateland@gmail.com</span>
          </a>
        </div>
        <div className="col-6">
          <a className="Contact-social telephone" href="tel:+31648271371">+31 6 48 27 13 71</a>
        </div>
        <div className="col-6">
          <a className="Contact-social website" href="http://wouterraateland.nl">wouterraateland.nl</a>
        </div>
        <div className="col-6">
          <a className="Contact-social linkedin" href="https://linkedin.com/in/wouterraateland">wouterraateland</a>
        </div>
        <div className="center">Wouter Raateland <em>(17-06-1996 - Present)</em></div>
      </div>
    </div>
  </div>
)

export default Contact
