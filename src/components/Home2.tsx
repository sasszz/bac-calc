import React, { useRef, useState } from "react";
import ListBoxComponent from "./ListBoxComponent";
import Beer from "./assets/beer.png";
import Wine from "./assets/wine.png";
import Shot from "./assets/shot.png";
import { ObjectType } from "typescript";

const FormEntryComponent = () => {
  const [weight, setWeight] = useState(140);
  const [gender, setGender] = useState("female");
  const [drinks, setDrinks] = useState(1);
  let [bac, setBac] = useState(0);
  let [initialHours, setInitialHours] = useState<number>(0);
  let [initialMinutes, setInitialMinutes] = useState<number>(0);
  let [timeElapsed, setTimeElapsed] = useState<number>(0);
  let [timeUntilEight, setTimeUntilEight] = useState<number>(0);
  let [fluidOunces, setFluidOunces] = useState<number>(0);
  let [totalGramsOfAlcohol, setTotalGramsOfAlcohol] = useState<number>(0);
  let [abv, setAbv] = useState<number>(0);
  const [arr, setArr] = useState<object[]>([]);

  let latestDrink: string;
  interface myObj {
    time?: string;
    drink: string;
  }

  const handleDrink = () => {
    BACCalculator();
    latestDrink = `${fluidOunces} fluid ounces at ${abv}% ABV`;
    const date = new Date();
    const newHours = date.getHours();
    const newMinutes = date.getMinutes();
    if (drinks == 1) {
      setInitialHours(newHours);
      setInitialMinutes(newMinutes);
    } else {
      let minutesElapsed = newMinutes - initialMinutes;
      let hoursElapsed = newHours - initialHours + minutesElapsed / 60;
      setTimeElapsed(hoursElapsed);
    }
    if (newMinutes < 10) {
      let currentTime = `${newHours} : 0${newMinutes}`;
      const myObjInstance: myObj = { time: currentTime, drink: latestDrink };
      arr.push(myObjInstance);
      return;
    }
    let currentTime = `${newHours} : ${newMinutes}`;
    const myObjInstance: myObj = { time: currentTime, drink: latestDrink };
    arr.push(myObjInstance);
  };

  const BACCalculator = () => {
    let genderConst: number;
    let weightConst: number;
    let bacCalculated;
    let bacFinalCalculated;
    let timeUntilEightCalculated;
    let calculatedGramsOfAlcohol;
    setDrinks(drinks + 1);
    if (gender === "female") {
      genderConst = 0.55;
    } else if (gender === "male") {
      genderConst = 0.68;
    } else {
      genderConst = 0.62;
    }
    weightConst = weight * 454;
    const gramsOfAlcohol = fluidOunces * 29.5753 * (abv / 100) * 0.789;
    console.log(gramsOfAlcohol);
    calculatedGramsOfAlcohol = gramsOfAlcohol + totalGramsOfAlcohol;
    setTotalGramsOfAlcohol(calculatedGramsOfAlcohol);
    bacCalculated =
      (calculatedGramsOfAlcohol / (weightConst * genderConst)) * 100;
    bacFinalCalculated = bacCalculated - timeElapsed * 0.015;
    if (bacFinalCalculated >= 0.08) {
      timeUntilEightCalculated = (bacFinalCalculated - 0.079) / 0.015;
      setTimeUntilEight(timeUntilEightCalculated);
    }
    setBac(bacFinalCalculated);
  };

  return (
    <div>
      <p>BAC: {bac.toFixed(3)}</p>
      <p>Num Drinks: {drinks - 1}</p>
      <p>Hours Elapsed: {timeElapsed.toFixed(2)}</p>
      <p>Time Until Under 0.08 BAC: {timeUntilEight.toFixed(1)} hours</p>
      <p>
        Total Grams of Alcohol Consumed: {totalGramsOfAlcohol.toFixed(0)} grams
      </p>
      <form className="w-full max-w-lg container mx-auto mt-6">
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
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Fluid Oz
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="FlOz"
              id="FlOz"
              type="number"
              placeholder="12"
              onChange={(e) => setFluidOunces(e.target.valueAsNumber)}
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              ABV
            </label>
            <div className="flex flex-row">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="ABV"
                id="ABV"
                type="number"
                placeholder="5"
                onChange={(e) => setAbv(e.target.valueAsNumber)}
              />
              <p> %</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3">
            <button
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded uppercase"
              onClick={handleDrink}
              type="button"
            >
              Calculate BAC
            </button>
          </div>
        </div>
      </form>
      <div className="w-full max-w-lg container mx-auto mt-6">
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
                    {arr.map((entry: any, idx) => {
                      return (
                        <tr
                          className="border-b dark:border-neutral-500"
                          key={idx}
                        >
                          <td className="whitespace-nowrap px-6 py-4">
                            {entry.time}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {entry.drink}
                          </td>
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
    </div>
  );
};

export default FormEntryComponent;
