import React from 'react'
import DemoVideo  from '../../source/demo.mp4'

const Video = () => {
  return (
      <div className='items-left pt-3'>
        <video width="400" controls>
            <source src={DemoVideo} type="video/mp4" />
        </video>
      </div>
  );
}

export { Video };