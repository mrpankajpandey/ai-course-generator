"use client"
import { db } from '@/configs/db'
import { CourseList } from '@/configs/Schema'
import React, { useEffect, useState } from 'react'
import CourseCard from '../_components/CourseCard'
import { Button } from '@/components/ui/button'
import { index } from 'drizzle-orm/mysql-core'

const Explore = () => {
  const [courseList, setCourseList] =  useState()
  const[pageIndex,setPageIndex]=useState(0);

  useEffect(()=>{
       GetAllCourse();
  },[pageIndex])

  const GetAllCourse = async()=>{
    const result =  await db.select().from(CourseList).limit(9).offset(pageIndex*9);

    // console.log(result);
    setCourseList(result);
    
  }
  return (
    <div>
      <h2 className='font-bold text-3xl'>Explore More Projects</h2>
      <p>Explore more project build with AI by other users</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-5 mt-3'>
        {
          courseList?.length>0?courseList.map((course, index)=>(
            <CourseCard course={course} key={index} displayUser={true}/>
          ))
          :[1,2,3,4,5].map((item,index)=>(
            <div key={index} className='w-full mt-5 bg-slate-200 animate-pulse rounded-lg h-[250px]'>
               </div>
          ))
        }
      </div>
      <div className='flex justify-between mt-4 items-center'>
       {pageIndex !=0&& <Button onClick={()=>setPageIndex(pageIndex-1)}>Previous Page</Button>}
        <Button onClick={()=>setPageIndex(pageIndex+1)}>Next Page</Button>
      </div>
    </div>
  )
}

export default Explore