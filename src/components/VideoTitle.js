import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-slate-100 bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold w-1/3">{title}</h1>
      <p className="py-6 text-lg w-1/3">{description}</p>
      <div>
        <button className="p-3 px-12 bg-slate-50 text-slate-950 text-lg font-bold rounded-md hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="p-3 px-12 bg-slate-600 text-slate-50 text-lg font-bold bg-opacity-35 mx-2 rounded-md hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
