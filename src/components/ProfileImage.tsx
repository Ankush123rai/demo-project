import React from 'react';
import { IoCameraOutline } from "react-icons/io5";


const ProfileImage = () => {
  return (
    <div className='relative w-[220px] h-[220px] p-1'>
      <div className='border-[14px] border-gray-300 rounded-full p-1 w-full h-full overflow-hidden relative'>
        <img
          className='w-full h-full object-cover rounded-full'
          src="https://th.bing.com/th/id/OIP.0HpEdaipI5PSkrOyqNj4LgAAAA?rs=1&pid=ImgDetMain"
          alt=""
        />
        <div
          className='absolute bottom-0 right-0 bg-white rounded-full p-1 cursor-pointer'
          style={{ zIndex: 999 }}
        >
          <IoCameraOutline className='text-4xl  rounded-full p-1' />
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
