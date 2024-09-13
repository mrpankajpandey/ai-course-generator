import React from 'react'
import { CiMail } from 'react-icons/ci'
import { FaXTwitter, FaGithub} from 'react-icons/fa6'
import { SiBuymeacoffee } from 'react-icons/si'

const Footer = () => {
  return (
   
    <div className='mx-auto max-w-screen-xl flex items-center gap-10 justify-center '>
             <hr />
        <footer className='shadow-sm'>
            <div className='max-w-screen-2xl   container mx-auto px-4 md:px-20 my-5'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex space-x-4'>
                        {/* <CiMail className='text-3xl'/>
                        <FaXTwitter  className='text-3xl'/>
                        <FaGithub className='text-3xl'/>
                        <SiBuymeacoffee className='text-3xl'/> */}
                        <ul className="flex space-x-3">
                    <li>
                      <a
                        target="_blank"
                        href="https://github.com/mrpankajpandey"
                      >
                        <FaGithub className="text-xl md:text-3xl hover:scale-110 duration-200" />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://twitter.com/mrpankajpandey_"
                      >
                        <FaXTwitter className="text-xl md:text-3xl hover:scale-110 duration-200" />
                      </a>
                    </li>
                    <li>
                      <a href="mailto:mr.pankajpandey0038@gmail.com">
                        <CiMail className="text-xl md:text-3xl hover:scale-110 duration-200" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://buymeacoffee.com/mrpankajpandey_">
                        <SiBuymeacoffee className="text-xl md:text-3xl hover:scale-110 duration-200" />
                      </a>
                    </li>
                  </ul>
                    </div>
                     
                    <div className='mt-3 pt-3 border-gray-700 flex flex-col items-center'>
                        <div className='w-full dark:border-white border-black border-t-2 mb-2'></div>
                       <p className='text-sm'> &copy; 2024 mrpankajpandey. All rightts reserved.</p>
                     
                    </div>
                </div> 
            </div>
        </footer>

             
    </div>
  )
}

export default Footer