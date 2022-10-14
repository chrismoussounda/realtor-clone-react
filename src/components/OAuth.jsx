import React from 'react';
import { FcGoogle } from 'react-icons/fc';

export const OAuth = () => {
  return (
    <button className="w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg  active:border-t transition duration-150 before:flex-1 before:border-gray-300 rounded">
      <span className="flex items-center justify-center">
        <FcGoogle className=" text-2xl bg-white rounded-full mr-2" />{' '}
        Continue with Google
      </span>
    </button>
  );
};
