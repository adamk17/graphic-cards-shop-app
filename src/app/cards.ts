export interface Cards {
    id: number;
    name: string;
    price: number;
    cardLength: number;
    ram: number;
    coreClock: number;
    coreClockInBoost: number;
    resolution: number;
    led: boolean;
    description: string;
    amount: number;
    image: string;

}

export const cards = [
    {
        id: 1,
        name: 'Rtx 3070',
        price: 2500,
        cardLength: 267,
        ram: 8,
        coreClock: 1500,
        coreClockInBoost: 1846,
        resolution: 4320,
        led: true,
        description: 'this is good card, you can play new games on it, but sometimes not on max resolution',
        amount: 0,
        image: 'assets/card pictures/rtx 3070.jpg'
    },
    {
        id: 2,
        name: 'Rtx 3080 ti',
        price: 6000,
        cardLength: 300,
        ram: 16,
        coreClock: 1700,
        coreClockInBoost: 2350,
        resolution: 4320,
        led: true,
        description: 'this is really good card, you can play all new games, mostly on max resolution',
        amount: 0,
        image: 'assets/card pictures/rtx 3080 ti.jpg'
    },
    {
        id: 3,
        name: 'Rtx 4090',
        price: 8000,
        cardLength: 340,
        ram: 24,
        coreClock: 1900,
        coreClockInBoost: 2550,
        resolution: 4320,
        led: true,
        description: 'on this beast you can play almost everything',
        amount: 0,
        image: 'assets/card pictures/rtx 4090.jpg'
    },
    {
        id: 4,
        name: 'Rtx 3060',
        price: 3000,
        cardLength: 240,
        ram: 8,
        coreClock: 1300,
        coreClockInBoost: 1700,
        resolution: 2160,
        led: false,
        description: 'you can buy it and play some simple games',
        amount: 0,
        image: 'assets/card pictures/rtx 3060.jpg'
    },
    {
        id: 5,
        name: 'Rtx 2080 ti',
        price: 2000,
        cardLength: 250,
        ram: 10,
        coreClock: 1600,
        coreClockInBoost: 1900,
        resolution: 4320,
        led: true,
        description: 'you can buy it and play some litle old games',
        amount: 0,
        image: 'assets/card pictures/rtx 3060.jpg'
    },
    {
        id: 6,
        name: 'Gtx 1600',
        price: 999,
        cardLength: 280,
        ram: 6,
        coreClock: 1500,
        coreClockInBoost: 1860,
        resolution: 2160,
        led: true,
        description: 'you can play some old games on it',
        amount: 0,
        image: 'assets/card pictures/rtx 3060.jpg'
    },
]