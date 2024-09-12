"use client";
import { db } from "@/configs/db";
import { Chapters, CourseList } from "@/configs/Schema";
import { and, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import ChapterListCard from "./_components/ChapterListCard";
import ChapterContent from "./_components/ChapterContent";

const CourseStart = ({ params }) => {
  const [course, setCourse] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState();
  const[ chapterContent, setChapterContent] = useState([]);

  useEffect(() => {
    params && GetCourse();
  }, [params]);
  const GetCourse = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .where(eq(CourseList?.courseId, params?.courseId));
    // console.log(result);
    setCourse(result[0]);
    GetSelectedChapterContent(0)
  };
  const GetSelectedChapterContent = async (chapterId) => {
    const result = await db
      .select()
      .from(Chapters)
      .where(
        and(
          eq(Chapters?.chapterId, chapterId),
          eq(Chapters?.courseId, course?.courseId)
        )
      );
    //   console.log(result);
    setChapterContent(result[0])
      
  };
  return (
    <div>
      {/* chapters list sidebar */}
      <div className="fixed md:w-64 md:block hidden h-screen border-r shadow-sm">
        <h2 className="font-medium text-lg bg-primary p-3 text-white">
          {course?.courseOutput?.course?.name}
        </h2>
        <div>
          {course?.courseOutput?.course?.chapters.map((chapter, index) => (
            <div
              className={`cursor-pointer hover:bg-purple-50 ${
                selectedChapter?.name == chapter?.name && "bg-purple-100"
              }`}
              onClick={() => {
                setSelectedChapter(chapter);
                GetSelectedChapterContent(index);
              }}
            >
              <ChapterListCard chapter={chapter} index={index} key={index} />
            </div>
          ))}
        </div>
      </div>
      {/* content of each chapters  */}
      <div className="md:ml-64">
        <ChapterContent
          chapter={selectedChapter}
          content={chapterContent}
        />
      </div>
    </div>
  );
};

export default CourseStart;
