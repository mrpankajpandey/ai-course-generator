import React from 'react'
import Markdown from 'react-markdown'
import YouTube from 'react-youtube'

const opts = {
    height: '300',
    width: '600',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
}
const ChapterContent = ({chapter, content}) => {

  return (
    <div className='p-10'>
      <h2 className='font-medium text-2xl'>{chapter?.name}</h2>
      <p className='text-gray-500'> {chapter?.about}</p>

      {/* video  */}
      <div className='mt-3 flex justify-center'>

      <YouTube
      videoId={content?.videoId}
      opts={opts}

      />
      </div>


      {/* content  */}
      <div>
        {content?.content?.map((item,index)=>(
            <div className='p-5 bg-slate-50 mb-3 rounded-md'>
                <h2 className='font-medium text-lg'>{item?.title}</h2>
                {/* <p className='whitespace-pre-wrap mt-1 ml-2'>{item?.description}</p>
                 */}
                 <Markdown>{item?.description}</Markdown>
               {item?.codeExample && <div className='p-4 bg-black text-white rounded-md mt-3'>
                <pre>
                    <code>
                        {item?.codeExample}
                    </code>
                </pre>
                </div>}
            </div>
        ))}
      </div>
    </div>
  )
}

export default ChapterContent