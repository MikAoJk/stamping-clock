import React from 'react';
import {Stamp} from "@/components/StampClock";

interface StampListProps {
    stamp: Stamp;
}

export const StampList: React.FC<StampListProps> = ({stamp}) => {
    return (
        <li>
            {stamp.action} {stamp.time.toISOString()}
        </li>
    );
};