"use client";
import React, { useContext, useEffect, useState } from "react";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { HiLightBulb } from "react-icons/hi";
import { HiClipboardDocumentCheck } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import SelectCategory from "./_components/SelectCategory";
import TopicDesc from "./_components/TopicDescription";
import TopicDescription from "./_components/TopicDescription";
import SelectOption from "./_components/SelectOption";
import { UserInputContext } from "../_context/UserInputContext";
import { GenerateCourseLayoutAI } from "@/configs/AiModel";
import Loading from "./_components/Loading";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/Schema";
import uuid4 from "uuid4";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { adminConfig } from "@/configs/AdminConfig";

const CreateCourse = () => {
  const StepperOptions = [
    {
      id: 1,
      name: "Category",
      icon: <HiMiniSquares2X2 />,
    },
    {
      id: 2,
      name: "Topics & Desc",
      icon: <HiLightBulb />,
    },
    {
      id: 3,
      name: "Options",
      icon: <HiClipboardDocumentCheck />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const { user } = useUser();
  const router = useRouter();
  useEffect(() => {
    //  console.log(userCourseInput);
  }, [userCourseInput]);

  // Used to check next Button Enable or Disable status
  const checkStaus = () => {
    if (userCourseInput?.length == 0) {
      return true;
    }
    if (
      activeIndex == 0 &&
      (userCourseInput?.category?.length == 0 ||
        userCourseInput?.category == undefined)
    ) {
      return true;
    }
    if (
      activeIndex == 1 &&
      (userCourseInput?.topic?.length == 0 ||
        userCourseInput?.topic == undefined)
    ) {
      return true;
    }
    if (
      activeIndex == 2 &&
      (userCourseInput?.level == undefined ||
        userCourseInput?.duration == undefined ||
        userCourseInput?.displayVideo == undefined ||
        userCourseInput?.noOfChapter == undefined)
    ) {
      return true;
    }
    return false;
  };

  const isAdmin = adminConfig.emails.includes(user?.primaryEmailAddress?.emailAddress);
  const GenerateCourseLayout = async () => {
    if(!isAdmin){
      const numberOfChapter = userCourseInput?.noOfChapter; 
      if(numberOfChapter>10){
        alert("You cannot select more than 10 chapters.");
        return;
      }
    }

    setLoading(true);
    const BASIC_PROMPT =
      'Generate a Course Tutorial with the following details: Course Name, Description, Chapter Name, About, Duration, and structure it in JSON format as an object with a "course" field containing these attributes: ';
    const USER_INPUT_PROMPT =
      "Category: " +
      userCourseInput?.category +
      ", Topic: " +
      userCourseInput?.topic +
      ", Level: " +
      userCourseInput?.level +
      ", Duration: " +
      userCourseInput?.duration +
      ", NoOfChapters: " +
      userCourseInput?.noOfChapter;
    const FINAL_PROMPT =
      BASIC_PROMPT +
      USER_INPUT_PROMPT +
      '. The JSON should include "course" with "name", "description", and an array of "chapters" objects.';

    console.log(FINAL_PROMPT);

    // Fetch response
    const result = await GenerateCourseLayoutAI.sendMessage(FINAL_PROMPT);
    console.log(result.response?.text());

    const parsedResult = JSON.parse(result.response?.text());
    console.log(parsedResult);

    setLoading(false);
    saveCourseLayoutDb(JSON.parse(result.response?.text()));
  };

  const saveCourseLayoutDb = async (courseLayout) => {
    var id = uuid4(); // course Id
    setLoading(true);

    const result = await db.insert(CourseList).values({
      courseId: id,
      name: userCourseInput?.topic,
      level: userCourseInput?.level,
      category: userCourseInput?.category,
      courseOutput: courseLayout,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      userProfileImage: user?.imageUrl,
    });

    console.log("Finshed");

    setLoading(false);
    router.replace("/create-course/" + id);
  };
  return (
    <div>
      {/* steper */}
      <div className="flex flex-col justify-center items-center mt-10">
        <h2 className="text-4xl text-primary font-medium">Create Course</h2>
        <div className="flex  mt-10">
          {StepperOptions.map((item, index) => (
            <div className="flex items-center">
              <div className="flex flex-col items-center w-[50px] md:w-[100px]">
                <div
                  className={`bg-gray-300 p-3 rounded-full text-white ${
                    activeIndex >= index && "bg-purple-500"
                  }`}
                >
                  {item.icon}
                </div>
                <h2 className="hidden md:block md:text-sm">{item.name}</h2>
              </div>
              {index != StepperOptions.length - 1 && (
                <div
                  className={`h-1 w-[50px] md:w-[100px] rounded-full bg-gray-300 lg:w-[170px] ${
                    activeIndex - 1 >= index && "bg-purple-500"
                  } `}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="px-10 md:px-20 lg:px-44 mt-10">
        {/* components */}
        {activeIndex == 0 ? (
          <SelectCategory />
        ) : activeIndex == 1 ? (
          <TopicDescription />
        ) : (
          <SelectOption />
        )}

        {/* next previous button  */}
        <div className="flex justify-between mt-10">
          <Button
            disabled={activeIndex == 0}
            onClick={() => setActiveIndex(activeIndex - 1)}
            variant="outline"
          >
            Previous
          </Button>
          {activeIndex < 2 && (
            <Button
              disabled={checkStaus()}
              onClick={() => setActiveIndex(activeIndex + 1)}
            >
              Next
            </Button>
          )}
          {activeIndex == 2 && (
            <Button
              disabled={checkStaus()}
              onClick={() => GenerateCourseLayout()}
            >
              Gerate Course Layout
            </Button>
          )}
        </div>
      </div>
      <Loading loading={loading} />
    </div>
  );
};

export default CreateCourse;
