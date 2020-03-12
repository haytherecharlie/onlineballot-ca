import React from 'react'
import PageLayout from 'layouts/PageLayout'
import WardFinder from 'components/WardFinder'
import Helmet from 'components/Helmet'

const Index = () => {
  return (
    <PageLayout>
      <Helmet />
      <WardFinder />
    </PageLayout>
  )
}

export default Index
