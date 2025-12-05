interface BerlinOclock {
    second: number;
    minute: number;
    minuteMultipleCinq: number;
    heure: number;
    heureMultipleCinq: number;
}


const BerlinClock = new Date();
const clock: BerlinOclock = {
    second: 0,
    minute: 0,
    minuteMultipleCinq: 0,
    heure: 0,
    heureMultipleCinq: 0
};

function simpleMinute(horloge : Date){
    const minutes = horloge.getMinutes();
    if(minutes === 1){
        return 1;
    }

    if(minutes === 2){
        return 2;
    }

    if(minutes === 3){
        return 3;
    }

    if(minutes === 4){
        return 4;
    }

    if(minutes % 5 == 0){
        simpleMultipleOf5Minute();
    }

}

export type {BerlinOclock};
export default {simpleMinute};



