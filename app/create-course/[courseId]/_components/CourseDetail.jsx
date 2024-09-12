import React from "react";
import { HiOutlineChartBar, HiOutlineClock , HiOutlineBookOpen, HiOutlinePlay} from "react-icons/hi";

const CourseDetail = ({ course }) => {
  return (
    <div className="p-6 border rounded-xl shadow-md mt-3">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div className="flex gap-2">
          <HiOutlineChartBar className="text-4xl text-primary" />
          <div>
            <h2 className="text-xs text-gray-500">Skill Level </h2>
            <h2 className="font-medium text-lg">{course?.level}</h2>
          </div>
        </div>
        <div className="flex gap-2">
          <HiOutlineClock className="text-4xl text-primary" />
          <div>
            <h2 className="text-xs text-gray-500">Duration </h2>
            <h2 className="font-medium text-lg">{course?.courseOutput?.course?.duration}</h2>
          </div>
        </div>
        <div className="flex gap-2">
          <HiOutlineBookOpen className="text-4xl text-primary" />
          <div>
            <h2 className="text-xs text-gray-500">No of Chapter </h2>
            <h2 className="font-medium text-lg">{course?.courseOutput?.course?.noOfChapters}</h2>
          </div>
        </div>
        <div className="flex gap-2">
          <HiOutlinePlay className="text-4xl text-primary" />
          <div>
            <h2 className="text-xs text-gray-500">Include Video </h2>
            <h2 className="font-medium text-lg">{course?.includeVideo}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
