import { UserButton } from '@clerk/nextjs'
import React from 'react'

import { CourseList } from '@/configs/Schema'
import UserCourseList from './_components/UserCourseList'
import Addcourse from './_components/AddCourse'


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