import React, { useRef, useState } from 'react';

import { LuUser, LuUpload, LuTrash } from 'react-icons/lu';

const ProfilePicture = ({ image, setImage }) => {

const inputRef = useRef(null);
const [previewUrl, setPreviewUrl] = useState(null);

const changePicture = (e) => {
    const file = e.target.files[0];
    if (file) {
        setImage(file);

        const preview = URL.createObjectURL(file);
        setPreviewUrl(preview);
    }
};

const removePicture = () => {
    setImage(null);
    setPreviewUrl(null);
};

const choosePicture = () => {
    inputRef.current.click();
};

  return (
    <div className='flex justify-center mb-5'>
        <input type='file' accept='image/*' ref={inputRef} onChange={changePicture} />
        {image ? (
            <div className='flex items-center justify-center relative'>
                <LuUser className='absolute text-3xl text-gray-500' />
                <button type='button' className='flex items-center justify-center relative' onClick={choosePicture}>
                    <LuUpload />
                </button>
            </div>
        ) : (
            <div className='relative'>
                <img src={previewUrl} alt='Profile Picture' className='rounded-full object-cover' />
                <button type='button' className='flex items-center justify-center relative' onClick={removePicture}>
                    <LuTrash />
                </button>
            </div>
        )}
    </div>
  );
};

export default ProfilePicture;