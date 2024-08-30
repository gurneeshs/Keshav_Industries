import React from 'react'
import Layout from '../../components/layout/Layout'
import History from './History'
import AboutUs from './AboutUs'
import Director from './Director'
import MissionVisionValue from './Mission'

const Company = () => {
  return (
    <div>
      <Layout>
        <div className='bg-customNewBack'>
          <AboutUs />
          <History />
          <Director />
          <MissionVisionValue />

        </div>
      </Layout>
    </div>
  )
}

export default Company
