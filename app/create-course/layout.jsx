"use client"

import React, { useState } from 'react'
import Header from '../dashboard/_components/Header'
import { UserInputContext } from '../_context/UserInputContext'

const CreateCourseLayout = ({children}) => {
    const [userCourseInput, setUserCourseInput] =  useState([]);
  return (
    <div>
<UserInputContext.Provider value={{userCourseInput, setUserCourseInput}}>

    <>

    <Header/>
    <div>{children}</div>
    </>
</UserInputContext.Provider>
    </div>
  )
}

export default CreateCourseLayout