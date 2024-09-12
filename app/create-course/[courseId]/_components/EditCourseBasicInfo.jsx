import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HiPencilSquare } from "react-icons/hi2";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/Schema";
import { eq } from "drizzle-orm";

const EditCourseBasicInfo = ({course, refreshData}) => {
  const [name, setName] =  useState();
  const [description, setDescription] =  useState();

  useEffect(()=>{
         setName(course?.courseOutput?.course?.name);
         setDescription(course?.courseOutput?.course?.description);
  },[course])

  const onUpdateHandler = async()=>{
    course.courseOutput.course.name=name;
    course.courseOutput.course.description=description;
    // console.log(course);
    const result =  await db.update(CourseList).set({
      courseOutput:course?.courseOutput
    }).where(eq(CourseList?.id,course?.id))
    .returning({id:CourseList.id});

    // console.log(result);
    refreshData(true)
    
    
  }
  return (
      <Dialog>
        <DialogTrigger>
            <HiPencilSquare />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Course Title & Description</DialogTitle>
            <DialogDescription>
             <div className="mt-3">
              <label htmlFor="">Course Title</label>
              <Input defaultValue={course?.courseOutput?.course?.name} onChange={(e) =>setName(e?.target.value)} />
             </div>
             <div  className='mt-3'>
              <label  htmlFor="">Course Description</label>
              <Textarea className="h-40"  defaultValue={course?.courseOutput?.course?.description} onChange ={(e) =>setDescription(e?.target.value)}/>
             </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose>
              <Button onClick={onUpdateHandler}>
                Update
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
  );
};

export default EditCourseBasicInfo;
