import React from 'react'
import Header from './header.js'
import Summary from './summary.js'
import ContactInfo from './cntctinfo.js'

class PortafolioContent extends React.Component {
  render () {
    return (
      <div class="portfolio-content">
        <Header />
        <Summary />
        <ContactInfo />
  </div>
    );
  }
};
 export default PortafolioContent
