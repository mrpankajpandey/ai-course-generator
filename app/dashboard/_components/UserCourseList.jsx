"use client"
import { db } from '@/configs/db'
import { CourseList } from '@/configs/Schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import React, { useContext, useEffect, useState } from 'react'
import CourseCard from './CourseCard'
import { UserCourseListContext } from '@/app/_context/UserCourseListContext'

const UserCourseList = () => {
  const [courseList,setCourseList] =  useState([]);
  const{userCourseList, setUserCourseList} = useContext(UserCourseListContext)
  const [showSkeleton, setShowSkeleton] = useState(true);
  const[pageIndex,setPageIndex]=useState(0);

  const {user} =  useUser();

  useEffect(()=>{
     user&&getUserCourses();
     const timer = setTimeout(() => {
      setShowSkeleton(false); // Hide skeleton after 10 seconds
    }, 3000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  },[user, pageIndex])
  const getUserCourses = async()=>{
    const result = await db.select().from(CourseList).where(eq(CourseList?.createdBy,user?.primaryEmailAddress?.emailAddress)).limit(7).offset(pageIndex*6);

    // console.log(result);
    setCourseList(result.slice(0,6))
    setUserCourseList(result)
    
  }
  return (
    <div className='mt-5'>
      <h2 className='font-medium text-xl'>My Ai Courses..</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-col-4 gap-5 mt-3'>
        {/* {
          courseList?.length>0?courseList.map((course, index)=>(
            <CourseCard course={course} key={index} refreshData={()=>getUserCourses()}/>
          ))
          :[1,2,3,4,5].map((item,index)=>(
            <div key={index} className='w-full mt-5 bg-slate-200 animate-pulse rounded-lg h-[250px]'>
               </div>
          ))
        } */}
           {showSkeleton ? (
          // Show skeletons while loading (for the first 10 seconds)
          [1, 2, 3, 4, 5,6].map((item, index) => (
            <div
              key={index}
              className="w-full mt-5 bg-slate-200 animate-pulse rounded-lg h-[250px]"
            />
          ))
        ) : courseList?.length > 0 ? (
          // Display courses if available
          courseList.map((course, index) => (
            <CourseCard course={course} key={index} refreshData={()=>getUserCourses()}/>
          ))
        ) : (
          // Show "No courses available" after skeleton and if no courses found
          <div className="flex items-center justify-center">
            <h2>No course Availble </h2>
          </div>
        )}
      </div>
      <div className="flex justify-between mt-4 items-center">
        {pageIndex !== 0 && (
          <Button onClick={() => setPageIndex(pageIndex - 1)}>
            Previous Page
          </Button>
        )}
        {/* Only show the "Next" button if there are courses to navigate through */}
        {courseList?.length === 6 && (
          <Button onClick={() => setPageIndex(pageIndex + 1)}>Next Page</Button>
        )}
      </div>
    </div>
  )
}

export default UserCourseList