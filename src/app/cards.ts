export interface Cards {
    id: number;
    name: string;
    price: number;
    cardLength: number;
    ram: number;
    coreClock: number;
    description: string;
    amount: number;
    image: string;

}

export const cards = [
    {
        id: 1,
        name: 'Rtx 3070',
        price: 3000,
        cardLength: 230,
        ram: 16,
        coreClock: 1800,
        description: 'this is good card',
        amount: 0,
        image: 'assets/card pictures/rtx 3070.jpg'
    },
    {
        id: 2,
        name: 'Rtx 3080 ti',
        price: 6000,
        cardLength: 250,
        ram: 24,
        coreClock: 2000,
        description: 'this is realy good card',
        amount: 0,
        image: 'assets/card pictures/rtx 3080 ti.jpg'
    },
    {
        id: 3,
        name: 'Rtx 4090',
        price: 8000,
        cardLength: 220,
        ram: 32,
        coreClock: 2100,
        description: 'you can play almost everything',
        amount: 0,
        image: 'assets/card pictures/rtx 4090.jpg'
    },
    {
        id: 4,
        name: 'Rtx 3060',
        price: 3000,
        cardLength: 240,
        ram: 8,
        coreClock: 1500,
        description: '',
        amount: 0,
        image: 'assets/card pictures/rtx 3060.jpg'
    },
]