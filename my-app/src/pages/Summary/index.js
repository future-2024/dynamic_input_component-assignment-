import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHighlighter } from '@fortawesome/free-solid-svg-icons'
import AudioFile from '../../source/demo.mp3'
const Summary = () => {
  return (
      <div className='items-left pt-3 w-75 text-gray-500'>
        <p className='text-primary'><FontAwesomeIcon icon={faHighlighter}/>Hello, thanks for your reviewing!</p>
        <p>My name is <b>Dimitry Cinca</b> from Italy. <br />I am very excited about this position. I have created this demo application by using React(tailwind css + javascript) for demo.</p>
        <p>Of course, in the beginning, I could select any options which means it is javascript or typescript. But it is not matter because in google document there isn't requirement for programming language, and in my opinion the most important thing is to create <b>user friendly</b> and <b>detail oriented</b> application.</p>
        <p>This demo-Auto complete application is a good test application for checking development skills.</p>
        <p>As I mentioned, I have focused on user friendly and detail oriented.</p>
        <p>Of course, during review of my application, some small issues can be occured but the main logic of Auto complete application has been implemented in this application.</p>
        <p>My strong advantage in frontend development, I have a <b>good sense of color, layout design, user-friendly oriented and so on.</b></p>
        <p>I am looking forward your feedback for my application.</p>
        <p>Please feel free to contact me by mail or linkedin.</p>
        <p>Let's create <b>our own great world</b> with strong skills and collaborating with each other.</p>
        <p>Thanks so much</p>
        <p>Best Regards</p>
        <br />
        <p className='font-bold inline-block'>Dimitry C.</p>
        <audio className='inline-block ml-4' controls>
          <source src={AudioFile} type="audio/mpeg" />
        </audio>
      </div>
  );
}

export { Summary };