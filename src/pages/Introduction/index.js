import React from 'react'
import './styles.css'

import me from 'media/me.jpg'

const Introduction = () => (
  <section className="Introduction">
    <img className="Introduction-avatar" src={me} alt="Wouter Raateland" />
    <h1>Wouter Raateland</h1>
    <a className="Contact-social email" href="mailto:wouterraateland@gmail.com">wouterraateland@gmail.com</a>
    <a className="Contact-social telephone" href="tel:+31648271371">+31 6 48 27 13 71</a>
    <a className="Contact-social website" href="http://wouterraateland.nl">wouterraateland.nl</a>
  </section>
)

export default Introduction
