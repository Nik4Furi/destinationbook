import React from 'react'
import StatsCard from '../../components/pages/Admin/StatsCard'

const Dashboard = () => {
  return (
    <>
      <div className="container my-2 mx-auto">
        <h2 className="text-xl font-bold">Stats of our app use to analyze</h2>
        <p className='my-2'>Can check the stats of our app, to analyze that our app is growing or not , also help of this can start to producing the product quantity or marketing</p>

        {/* Stats card to analyzing  */}
        <div className="grid grid-cols-3 gap-2">
            <StatsCard Stats={"Users"} color={"blue"} userCount={34} isProfitable={true} />
            <StatsCard Stats={"Sponsers"} color={"red"} userCount={24} isProfitable={true} />
        </div>
      </div>
    </>
  )
}

export default Dashboard
