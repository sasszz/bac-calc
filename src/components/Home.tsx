import React, { useRef, useState } from "react";
import ListBoxComponent from "./ListBoxComponent";
import Beer from "./assets/beer.png";
import Wine from "./assets/wine.png";
import Shot from "./assets/shot.png";
import { ObjectType } from "typescript";

const FormEntryComponent = () => {
  const [drinksArray, setDrinksArray] = useState<string[]>([]);
  const [weight, setWeight] = useState(140);
  const [gender, setGender] = useState("female");
  const [drinks, setDrinks] = useState(0);
  // const [currentTimeArray, setCurrentTimeArray] = useState<object[]>([]);
  const [currentTimeArray, setCurrentTimeArray] = useState<string[]>([]);
  const [currentTime, setCurrentTime] = useState({});
  const [arr, setArr] = useState<object[]>([]);

  let newTime: string;
  let latestDrink: string;
  interface myObj {
    time?: string;
    drink: string;
  }
  // let obj: { time: string; drink: string };

  const handleDrink = () => {
    setDrinks(drinks + 1);
  };

  const getCurrentTime = () => {
    const date = new Date();
    const newHours = date.getHours();
    const newMinutes = date.getMinutes();
    let currentTime = `${newHours} : ${newMinutes}`;
    return currentTime;
  };

  const handleBeer = () => {
    setDrinks(drinks + 1);
    latestDrink = "Beer";
    const date = new Date();
    const newHours = date.getHours();
    const newMinutes = date.getMinutes();
    let currentTime = `${newHours} : ${newMinutes}`;
    const myObjInstance: myObj = { time: currentTime, drink: latestDrink };
    arr.push(myObjInstance);
    console.log(arr);
  };

  const pushCurrentTime = () => {
    let newTime = getCurrentTime();
    currentTimeArray.push(newTime);
  };

  const drinkTrackerTable = [
    { time: { hours: 17, minutes: 14 }, drink: "Beer" },
    { time: { hours: 17, minutes: 15 }, drink: "Wine" },
    { time: { hours: 17, minutes: 17 }, drink: "Shot" },
  ];

  let arr1;

  return (
    <div>
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
              onClick={handleDrink}
            >
              {" "}
              <img src={Wine} alt="Wine" />
            </button>
          </div>
          <div className="w-full md:w-1/3 px-3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={handleDrink}
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
          </div>
        </div>
      </form>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Time
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Drink
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {arr.map((entry, idx) => {
                    return (
                      <tr
                        className="border-b dark:border-neutral-500"
                        key={idx}
                      >
                        <td className="whitespace-nowrap px-6 py-4">{idx}</td>
                        <td className="whitespace-nowrap px-6 py-4"></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEntryComponent;
