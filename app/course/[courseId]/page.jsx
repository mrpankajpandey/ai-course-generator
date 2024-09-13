"use client";

import Header from "@/app/_components/Header";
import ChapterList from "@/app/create-course/[courseId]/_components/ChapterList";
import CourseBasicInfo from "@/app/create-course/[courseId]/_components/CourseBasicInfo";
import CourseDetail from "@/app/create-course/[courseId]/_components/CourseDetail";

import { db } from "@/configs/db";
import { CourseList } from "@/configs/Schema";
import { eq } from "drizzle-orm";
import { Corben } from "next/font/google";
import React, { useEffect, useState } from "react";
import { HiOutlineShare } from "react-icons/hi";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";

const Course = ({ params }) => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    params && GetCourse();
  }, [params]);
  const GetCourse = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .where(eq(CourseList?.courseId, params?.courseId));

    //   console.log(result);
    setCourse(result[0]);
  };

  return (
    <div>
      <Header />
      <div className="px-10 p-10 md:px-20 lg:px-44">
        <CourseBasicInfo course={course} edit={false} />
        <h3 className="mt-3  mb-2">Course Url:</h3>
        <div>
          <h2 className="flex items-center justify-between text-center text-gray-400 border p-2 rounded-md">
            {process.env.NEXT_PUBLIC_HOST_NAME}/course/{course?.courseId}
            <HiOutlineClipboardDocumentCheck
              onClick={async () =>
                await navigator.clipboard.writeText(
                  process.env.NEXT_PUBLIC_HOST_NAME +
                    "/course/" +
                    course?.courseId
                )
              }
              className="text-2xl cursor-pointer text-primary"
            />
            {/* Share URL Icon */}
            {navigator.share && (
              <HiOutlineShare
                onClick={() => {
                  navigator
                    .share({
                      title: "Check out this course!",
                      url:
                        process.env.NEXT_PUBLIC_HOST_NAME +
                        "/course/" +
                        course?.courseId,
                    })
                    .then(() => console.log("Successfully shared"))
                    .catch((error) => console.log("Error sharing", error));
                }}
                className="text-2xl cursor-pointer text-primary"
                title="Share URL"
              />
            )}
          </h2>
        </div>

        <CourseDetail course={course} />
        <ChapterList course={course} edit={false} />
      </div>
    </div>
  );
};

export default Course;
