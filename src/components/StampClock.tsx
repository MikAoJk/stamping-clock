'use client';


import {useState} from "react";
import {StampList} from "@/components/StampList";

export interface Stamp {
    action: string;
    time: Date;
}

const StampClock = () => {

    const [inn, setInn] = useState(false);
    const [stamps, setStamps] = useState<Stamp[]>();

    const setInnTrueHandler = () => {
        const currentDate = new Date()
        const newStamp = {action: 'check-in', time: currentDate};
        if (stamps == undefined) {
            const firstStamps: Stamp[] = [
                {
                    action: 'check-in', time: currentDate
                },
            ];
            setStamps(firstStamps)
        } else {
            setStamps([...stamps, newStamp]);
        }
        setInn(true);
    }

    const setInnFalseHandler = () => {
        const currentDate = new Date()
        const newStamp = {action: 'check-out', time: currentDate};
        if (stamps == undefined) {
            const firstStamps: Stamp[] = [
                {
                    action: 'check-out', time: currentDate
                },
            ];
            setStamps(firstStamps)
        } else {
            setStamps([...stamps, newStamp]);
        }

        setInn(false);
    }


    return (

        <div className="flex flex-col items-center justify-center">
            {!inn &&
                <button className="bg-green-500 hover:bg-green-700 text-white text-xl font-bold py-3 px-12 rounded"
                        onClick={setInnTrueHandler}>
                    In
                </button>
            }
            {inn && <button className="bg-red-500 hover:bg-red-700 text-white text-xl font-bold py-3 px-12 rounded"
                            onClick={setInnFalseHandler}>
                Out
            </button>
            }
            {(stamps != undefined) &&
                <ul className="my-6">
                    {stamps.map(stamp => (
                        <StampList key={stamp.time.toISOString()} stamp={stamp}/>
                    ))}
                </ul>}

        </div>
    )
        ;
};

export default StampClock;
