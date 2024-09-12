import { pgTable, serial, varchar, json, boolean } from "drizzle-orm/pg-core";

export const CourseList=pgTable('courseList', {
    id:serial('id').primaryKey(),
    courseId:varchar('courseId').notNull(),
    name:varchar('name').notNull(),
    category:varchar('category').notNull(),
    level:varchar('level').notNull(),
    includeVideo:varchar('includeVideo').notNull().default('Yes'),
    courseOutput:json('courseOutput').notNull(),
    createdBy:varchar('createdBy').notNull(),
    userName:varchar('username'),
    userProfileImage:varchar('userProfileImage'),
    courseBanner:varchar('courseBanner').default('/course-cover.svg'),
    publish:boolean('publish').default(false)
})

export const Chapters=pgTable('chapters',{
    id:serial('id').primaryKey(),
    courseId:varchar('courseid').notNull(),
    chapterId:varchar('chapterId').notNull(),
    content:json('content').notNull(),
    videoId:varchar('videoId').notNull()
})