"use client"
import { db } from '@/configs/db';
import { CourseList } from '@/configs/Schema';
import { useUser } from '@clerk/nextjs';
import { and, eq } from 'drizzle-orm';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import CourseBasicInfo from '../_components/CourseBasicInfo';
import { HiOutlineClipboardDocumentCheck } from 'react-icons/hi2';

const FinishScreen = ({params}) => {
    const { user } = useUser();
    const [course, setCourse] = useState([]);
    const [loading, setLoading] = useState(false);
    const router =  useRouter();
  
    useEffect(() => {
      params && GetCourse();
    }, [params, user]);
    const GetCourse = async () => {
      const result = await db
        .select()
        .from(CourseList)
        .where(
          and(
            eq(CourseList.courseId, params?.courseId),
            eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)
          )
        );
      console.log(result);
      setCourse(result[0]);
    };
  return (
    <div className='px-10 md:px-20 lg:px-44 my-7'>
        <h2 className='text-center font-bold text-2xl my-3 text-primary'>Congrats! your course is now Ready..</h2>
        <CourseBasicInfo course={course} refreshData={()=>console.log()
        } />
        <h3 className='mt-3  mb-2'>Course Url:</h3>
        <h2 className='flex items-center justify-between text-center text-gray-400 border p-2 rounded-md'>{process.env.NEXT_PUBLIC_HOST_NAME}/course/view/{course?.courseId}<HiOutlineClipboardDocumentCheck onClick={async()=>await navigator.clipboard.writeText(process.env.NEXT_PUBLIC_HOST_NAME+'/course/'+course?.courseId)} className='text-2xl cursor-pointer text-primary'/>
            </h2> 
     

    </div>
  )
}

export default FinishScreen