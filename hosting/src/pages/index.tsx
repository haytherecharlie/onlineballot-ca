import React from 'react'
import { useSelector } from 'react-redux'
import PageLayout from 'layouts/PageLayout'
import Helmet from 'components/Helmet'
import WardFinder from 'components/WardFinder'
import GeoLookup from 'components/GeoLookup'
import Ballot from 'components/Ballot'

const Index = () => {
  const { screen } = useSelector(s => s.application)

  const Router = () => {
    switch (screen) {
      case 'GeoLookup':
        return <GeoLookup />
      case 'Ballot':
        return <Ballot />
      default:
        return <WardFinder />
    }
  }

  return (
    <PageLayout>
      <Helmet />
      <Router />
    </PageLayout>
  )
}

export default Index
