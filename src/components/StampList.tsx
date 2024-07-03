import React from 'react';
import {Stamp} from "@/components/StampClock";

interface StampListProps {
    stamp: Stamp;
}

export const StampList: React.FC<StampListProps> = ({stamp}) => {
    const currentTime = stamp.time.getTime();
    const updatedTime = new Date(currentTime + 2 * 60 * 60 * 1000);
        
    return (
        <li>
            {stamp.action} {updatedTime.toISOString()}
        </li>
    );
};
