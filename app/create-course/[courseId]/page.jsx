"use client";
import { db } from "@/configs/db";
import { Chapters, CourseList } from "@/configs/Schema";
import { useUser } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import CourseBasicInfo from "./_components/CourseBasicInfo";
import CourseDetail from "./_components/CourseDetail";
import ChapterList from "./_components/ChapterList";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { GenerateChapterContent_AI } from "@/configs/AiModel";
import { Fascinate } from "next/font/google";
import Loading from "../_components/Loading";
import service from "@/configs/service";
import { useRouter } from "next/navigation";

const courseLayout = ({ params }) => {
  const { user } = useUser();
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isCourseValid, setIsCourseValid] = useState(false);
  const router =  useRouter();

  useEffect(() => {
    if (params?.courseId) {
      GetCourse();
    } else {
      setIsCourseValid(false);
    }
    
  }, [params, user]);
  const GetCourse = async () => {
    if (!params?.courseId || !user?.primaryEmailAddress?.emailAddress) {
      console.error("Course ID or User email is missing");
      setIsCourseValid(false);
      return;
    }
    try {
      
      const result = await db
        .select()
        .from(CourseList)
        .where(
          and(
            eq(CourseList.courseId, params?.courseId),
            eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)
          )
        );
        if (result.length > 0) {
          setCourse(result[0]);
          setIsCourseValid(true);
        } else {
          setIsCourseValid(false);
        }
  
    } catch (error) {
      setIsCourseValid(false);
    } 
    // console.log(result);
    // setCourse(result[0]);
  };
  const GenerateChapterContent = async () => {
    if (!course?.courseId || !course?.courseOutput?.course?.chapters) {
      // toast.error("Course or chapters are missing. Cannot generate content.");
      return;
    }
    setLoading(true);
    const chapters = course?.courseOutput?.course?.chapters;
    chapters.forEach(async (chapter, index) => {
      const PROMPT =
        "Explain the concept in Detail on Topic: " +
        course?.name +
        ", Chapter:" +
        chapter?.name +
        ", in JSON Format with list of array with field as title, description in detail, Code Example(Code filed in <precode> formt) if applicable";
      // console.log(PROMPT);
      // if (index <2) {
        try {
          let videoId = "";
          // Generate Video URL
          service.getVideos(course?.name+":"+chapter?.name).then((resp) => {
            console.log(resp);
            videoId = resp[0]?.id?.videoId
          });
          const result = await GenerateChapterContent_AI.sendMessage(PROMPT);
          // console.log(result?.response?.text());
          const content = JSON.parse(result?.response?.text());

          // save the chapter content + video URL
          await db.insert(Chapters).values({
            chapterId: index,
            courseId: course?.courseId,
            content: content,
            videoId: videoId,
          });
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
        await db.update(CourseList).set({
          publish:true
        })
        router.replace('/create-course/'+course?.courseId+'/finish')
      // }
    });
  };

  return (
    <div className="h-screen w-full mt-10 px-7 md:px-20 lg:px-44">
      <h2 className="font-bold text-center text-2xl">Course Layout</h2>

      <Loading loading={loading} />

      {/* basic info  */}
      <CourseBasicInfo course={course} refreshData={() => GetCourse()} />

      {/* course details  */}
      <CourseDetail course={course} />

      {/* list pf lession  */}
      <ChapterList course={course} refreshData={() => GetCourse()} />

      <Button disabled={!isCourseValid} onClick={GenerateChapterContent} className="my-10">
        Generate Course Content
      </Button>
      <Toaster />
    </div>
  );
};

export default courseLayout;
