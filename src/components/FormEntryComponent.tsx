import React, { useRef, useState } from "react";
import ListBoxComponent from "./ListBoxComponent";
import Beer from "./assets/beer.png";
import Wine from "./assets/wine.png";
import Shot from "./assets/shot.png";

const FormEntryComponent = () => {
  const [weight, setWeight] = useState(140);
  const [gender, setGender] = useState("female");
  const [beer, setBeer] = useState(0);
  const [wine, setWine] = useState(0);
  const [shot, setShot] = useState(0);
  const [currentTime, setCurrentTime] = useState<object[]>([]);

  console.log(weight, gender, beer, wine, shot, currentTime);

  const handleBeer = () => {
    setBeer(beer + 1);
  };

  const handleWine = () => {
    setWine(wine + 1);
  };

  const handleShot = () => {
    setShot(shot + 1);
  };

  let newTime;

  const pushCurrentTime = () => {
    const date = new Date();
    newTime = date.getHours() + ":" + date.getMinutes();

    const newHours = date.getHours();
    const newMinutes = date.getMinutes();
    currentTime.push({
      hours: newHours,
      minutes: newMinutes,
    });
  };

  return (
    <form className="w-full max-w-lg container mx-auto">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Weight
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="weight"
            id="weight"
            type="number"
            placeholder="140"
            onChange={(e) => setWeight(e.target.valueAsNumber)}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Gender
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="unspecified">Prefer not to Disclose</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/3 px-3">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={handleBeer}
          >
            <img src={Beer} alt="Beer" />
          </button>
        </div>
        <div className="w-full md:w-1/3 px-3">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={handleWine}
          >
            {" "}
            <img src={Wine} alt="Wine" />
          </button>
        </div>
        <div className="w-full md:w-1/3 px-3">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={handleShot}
          >
            {" "}
            <img src={Shot} alt="Shot" />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full px-3">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={pushCurrentTime}
          >
            Get Current Time
          </button>
          <p>{newTime}</p>
        </div>
      </div>
    </form>
  );
};

export default FormEntryComponent;
