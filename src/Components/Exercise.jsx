import React from 'react'
import ExerciseNav from './ExerciseNav'
import TrainSmarter from './TrainSmarter'
import Discover from './Discover'
import Banner from './Banner'
import Stories from './Stories'
import Footer from './Footer'


export default function Exercise() {
  return (
    <div>
      <ExerciseNav />
      <TrainSmarter />
      {/* <Goals /> */}
      <Discover />
      <Banner />
      <Stories />
      <Footer />
    </div>
  )
}
