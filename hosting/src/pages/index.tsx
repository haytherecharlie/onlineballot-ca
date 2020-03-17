import React from 'react'
import { useSelector } from 'react-redux'
import PageLayout from 'layouts/PageLayout'
import Helmet from 'components/Helmet'
import WardFinder from 'components/WardFinder'
import GeoLookup from 'components/GeoLookup'

const Index = () => {
  const address = useSelector(s => s.address)
  return (
    <PageLayout>
      <Helmet />
      {/* <GeoLookup /> */}
      {address ? <GeoLookup /> : <WardFinder />}
    </PageLayout>
  )
}

export default Index
