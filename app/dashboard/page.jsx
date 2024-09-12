import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Addcourse from './_components/Addcourse'
import { CourseList } from '@/configs/Schema'
import UserCourseList from './_components/UserCourseList'

const Dashboard = () => {
  return (
    <div>
      {/* <UserButton/> */}
      <Addcourse/>
      {/* display list of course  */}
      <UserCourseList />
      
    </div>
  )
}

export default Dashboard