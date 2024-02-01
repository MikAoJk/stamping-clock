'use client';


import {useState} from "react";

const StampClock = () => {

    const [inn, setInn] = useState(false);

    const setInnTrueHandler = () => {
        setInn(true);
    }

    const setInnFalseHandler = () => {
        setInn(false);
    }


    return (

        <div className="flex flex-col items-center justify-center">
            {!inn &&
                <button className="bg-green-500 hover:bg-green-700 text-white text-xl font-bold py-3 px-12  rounded"
                        onClick={setInnTrueHandler}>
                    In
                </button>
            }
            {inn && <button className="bg-red-500 hover:bg-red-700 text-white text-xl font-bold py-3 px-12  rounded"
                            onClick={setInnFalseHandler}>
                Out
            </button>
            }

        </div>
    )
        ;
};

export default StampClock;
