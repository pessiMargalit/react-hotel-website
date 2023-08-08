//#region images import
import img1 from '../../images/5.jpg';
import img2 from '../../images/1.jpg';
import img3 from '../../images/room1.JPG';
import img4 from '../../images/room3.JPG';
import img5 from '../../images/room4.JPG';
import img6 from '../../images/room5.JPG';
import img11 from '../../images/room6.JPG';
import img12 from '../../images/room7.JPG';
import img13 from '../../images/room8.JPG';

//#endregion
const initialState = {
    arr: [{
        name: "King Superior Room With Balocny",
        id: 1,
        qty: 8,
        numOfooms: 8,
        img: img1,
        price: 525,
        description: "Luxuriate in the spacious, elegant room with inimitable views across the sea and pool.",
        category: "guest room"
    }, {
        name: "King Deluxe Room",
        id: 2,
        qty: 10,
        numOfooms: 10,
        img: img2,
        price: 740,
        description: "Luxuriate in the spacious, elegant room with inimitable views across the Caribbean Sea.",
        category: "guest room"
    },
    {
        name: "King Deluxe Room With Balocny",
        id: 3,
        qty: 8,
        numOfooms: 8,
        img: img3,
        price: 690,
        description: "Enjoy the elegant club room with views across the Caribbean Sea and access to the club lounge.",
        category: "guest room"
    },
    {
        name: "King Terrace Room",
        id: 4,
        qty: 15,
        numOfooms: 15,
        img: img4,
        price: 788,
        description: "The Kempinski FIT room is equipped with a Technogym Bike for your personal workout.",
        category: "guest room"
    },
    {
        name: "King Grand Deluxe Room",
        id: 5,
        qty: 12,
        numOfooms: 12,
        img: img5,
        price: 589,
        description: "Quiet and light-flooded with a luxurious design, overlooking the inner courtyard.",
        category: "guest room"
    },
    {
        name: "Grand Family Interconnecting Rooms",
        id: 6,
        qty: 6,
        numOfooms: 6,
        img: img6,
        price: 617,
        description: "Quiet and light-flooded with a luxurious design, overlooking the side street.",
        category: "guest room"
    },
    {
        name: "David Tower Suite ",
        id: 7,
        qty: 5,
        numOfooms: 5,
        img: img11,
        price: 1630,
        description: "Spacious and tranquil room with a warm and luxurious design, overlooking the inner courtyard.",
        category: "Suites"
    },
    {
        name: "King Junior Suite ",
        id: 8,
        qty: 5,
        numOfooms: 5,
        img: img12,
        price: 1250,
        description: "Unwind in contemporary luxury and enjoy an ideal option for couples or families alike.",
        category: "Suites"
    },
    {
        name: "Palace Suite ",
        id: 9,
        qty: 5,
        numOfooms: 5,
        img: img13,
        price: 1386,
        description: "Inspiring elegance and modern design to unwind in a luxurious business room.",
        category: "Suites"
    }
    ]
};

export const roomsReducer = (state = initialState, action) => {

    switch (action.type) {
        case "DECREASEQTY": {
            const findRoom = state.arr.filter(r => r.id === action.payload.id);
            findRoom[0].qty -= 1;
            return { ...state };
        }
        case "ADDQTY": {
            const findRoom = state.arr.filter(r => r.id === action.payload.id);
            findRoom[0].qty += 1;
            return { ...state };
        }
        case "RESETQTY": {
            const findRoom = state.arr.find(r => r.id === action.payload.id);
            findRoom.qty = findRoom.numOfooms;
            return { ...state };
        }
    }
    return state;
};