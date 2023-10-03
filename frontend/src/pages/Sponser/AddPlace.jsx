import React from 'react'
import AddPlaceForm from '../../components/pages/Sponser/AddPlace'

const AddPlace = () => {
  return (
    <>
      <section id="AddPlace">
        <div className="container my-2 mx-auto">

            <h2 className="text-2xl my-2 font-semibold capitalize">You can add more places</h2>
            <p className="my-2 text-bold">To enhance our and yours profit can added new places , which basically can help the users to more interact with us and helping the users to enjoy the days</p>

            {/* Form of the sponser can adding new place  */}
            <AddPlaceForm />
        </div>
      </section>
    </>
  )
}

export default AddPlace
