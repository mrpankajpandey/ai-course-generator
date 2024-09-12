import React from "react";
import { HiOutlineCheckCircle, HiOutlineClock } from "react-icons/hi";
import EditChapter from "./EditChapter";

const ChapterList = ({ course, refreshData, edit = true }) => {
  return (
    <div className="mt-3 ">
      <h2 className="font-medium text-xl "> Chapter's</h2>
      <div className="mt-2">
        {course?.courseOutput?.course?.chapters.map((chapter, index) => (
          <div className="p-5 border rounded-lg mt-2 flex items-center justify-between cursor-pointer">
            <div className="flex gap-5 items-center">
              <h2 className="bg-primary flex-none h-10 w-10 rounded-full text-center p-2">
                {index + 1}
              </h2>
              <div>
                <h2 className="font-medium text-lg">
                  {chapter?.name}{" "}
                {edit&& <EditChapter
                    index={index}
                    course={course}
                    refreshData={() => refreshData(true)}
                  />}
                </h2>
                <p className="text-sm text-gray-500">{chapter?.about}</p>
                <p className="flex gap-2 text-primary items-center">
                  {" "}
                  <HiOutlineClock /> {chapter?.duration}
                </p>
              </div>
            </div>
            <HiOutlineCheckCircle className="text-4xl flex-none text-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterList;
