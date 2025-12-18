import React from 'react'
import FeatureNav from './FeatureNav'
import TrainSmarter from './TrainSmarter'
import Banner from './Banner'
import Footer from './Footer'
import Logos from './Logos'
import Goals from './Goals'
import Classes from './Classes'
import Table from './Table'




export default function Features() {
  return (
    <div>
      <FeatureNav />
      {/* <ArtEquipment /> */}
      {/* <TrainSmarter /> */}
      {/* <Banner /> */}
      <Goals />
      <Classes />
      <Table />
      <Footer />
    </div>
  )
}
