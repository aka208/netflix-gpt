import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const appConfig = useSelector((store) => store.config);
  const { preferedLanguage } = appConfig;
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-2 m-4 col-span-9"
          type="text"
          placeholder={lang[preferedLanguage].gptSearchPlaceholder}
        />
        <button className="m-4 py-2 px-4 bg-red-600 text-white rounded-md col-span-3">
          {lang[preferedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
