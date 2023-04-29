import React from 'react'
import IndividualIntervalsExample from './Slide'
import Recommend from './Recommend'

const Home = () => {
  document.title="Welcome to TrainIn-Cloud";
  return (
    <>
      <div className="container position-relative mw-100" style={{ top: '4rem ' }}>
        <IndividualIntervalsExample />
      </div>
      <Recommend/>
    </>
  )
}

export default Home


