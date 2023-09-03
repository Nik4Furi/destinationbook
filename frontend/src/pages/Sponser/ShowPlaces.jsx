import React from 'react'
import Table from '../../components/Sponser/Table'

const ShowPlaces = () => {
    return (
        <>
            <section id="Sponser">
                <div className="container mx-auto my-2">
                    
                    {/* Section of the tables to showing all the stuffs of sponser  */}
                    <Table heading={"Show or Update Places Details"} para={"You can update or can make changes on the places, that was help to make your profit better"} col1={'Name'} col2={"Description"} col3={"Images"} />
                </div>
            </section>
        </>
    )
}

export default ShowPlaces
