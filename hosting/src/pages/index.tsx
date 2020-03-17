import React from 'react'
import { useSelector } from 'react-redux'
import PageLayout from 'layouts/PageLayout'
import WardFinder from 'components/WardFinder'
import Helmet from 'components/Helmet'

const Index = () => {
  const address = useSelector(s => s.address)
  return (
    <PageLayout>
      <Helmet />
      {address ? <div>Loading</div> : <WardFinder />}
    </PageLayout>
  )
}

export default Index
