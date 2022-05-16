import React from 'react';
// import {Loader} from 'react-loader-spinner';
import * as Loader from "react-loader-spinner";
import {Circles} from 'react-loader-spinner';

function Spinner({ message }) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
       <div className="flex justify-center items-center ">
    <Circles color="#00BFFF"
        height={50}
        width={200}
        className="m-5" />
  </div>

      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
}

export default Spinner;
