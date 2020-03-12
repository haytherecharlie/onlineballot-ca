import React from 'react'
import ReactHelmet from 'react-helmet'
import config from 'config/service-account.json'

const Helmet = () => {
  return (
    <ReactHelmet defer={false}>
      <script type="text/javascript" src={`https://maps.googleapis.com/maps/api/js?key=${config.places}&libraries=places`}></script>
    </ReactHelmet>
  )
}

export default Helmet
