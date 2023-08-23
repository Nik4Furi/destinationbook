import React from 'react'
import Table from '../../components/Sponser/Table'

const Users = () => {
  return (
    <>
       {/* Section of the tables to showing all the stuffs of Admin  */}
       <Table heading={"Changing the availability of users"} para={"You have a power to change the role of users, that was help adding users as work as sponser, and can edit any time, also can delete the users details, or can block the user to not admit other time"} col1={"Name"} col2={"Emails"} col3={"Block User"} />
    </>
  )
}

export default Users
