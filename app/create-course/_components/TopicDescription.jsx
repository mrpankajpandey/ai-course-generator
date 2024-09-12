import { UserInputContext } from "@/app/_context/UserInputContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useContext } from "react";

const TopicDescription = () => {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const handleInputChange = (fieldname, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldname]: value,
    }));
  };

  return (
    <div className="mx-20 lg:mx-44">
      {/* Input  Topic
       */}
      <div className="mt-5">
        <label>
          💡 Write a topic for which you want to generate a course (e.g., Python
          Course, Yoga, etc.)
        </label>
        <Input
          className="h-14 text-xl"
          placeholder={"topic"}
          defaultValue = {userCourseInput?.topic}
          onChange={(e) => handleInputChange("topic", e.target.value)}
        />
      </div>
      {/* TextArea  */}
      <div className="mt-5 ">
        <label htmlFor="">
          {" "}
          🔥Tell us more About Your course , What you want to include in the
          course(Optional)
        </label>
        <Textarea
          placeholder="About your Course"
          className="h-24 text-xl"
          defaultValue = {userCourseInput?.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
        />
      </div>
    </div>
  );
};

export default TopicDescription;
