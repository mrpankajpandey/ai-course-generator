"use client";
import { db } from "@/configs/db";
import { Chapters, CourseList } from "@/configs/Schema";
import { and, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import ChapterListCard from "./_components/ChapterListCard";
import ChapterContent from "./_components/ChapterContent";

import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

const CourseStart = ({ params }) => {
  const [course, setCourse] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState();
  const[ chapterContent, setChapterContent] = useState([]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    params && GetCourse();
  }, [params]);
  const GetCourse = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .where(eq(CourseList?.courseId, params?.courseId));
    console.log(result);
    setCourse(result[0]);

    // setSelectedChapter(result[0]?.courseOutput?.course?.chapters[0]); 
    // GetSelectedChapterContent(0)
    const firstChapter = result[0]?.courseOutput?.course?.chapters[0];
    if (firstChapter) {
      setSelectedChapter(firstChapter); // Set first chapter
      GetSelectedChapterContent(firstChapter?.chapterId); // Fetch full content of the first chapter
    }
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
       {/* Toggle button for sidebar on mobile */}
       <div className="md:hidden p-4">
        <button
          className="bg-primary text-white p-2 rounded-md"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? (<Cross1Icon className="w-6 h-6" />) : (<HamburgerMenuIcon className="w-6 h-6" />)}
        </button>
      </div>
      {/* chapters list sidebar */}
      <div className={`fixed md:w-64 w-64 h-screen bg-white border-r shadow-sm z-20 transform transition-transform md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:block`}>
        <h2 className="font-medium text-lg bg-primary p-3 text-white">
          {course?.courseOutput?.course?.name}
        </h2>
        
        <div className="h-[calc(100%-3rem)] overflow-y-auto">
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
      {/* Overlay to close the sidebar when clicking outside on mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default CourseStart;
