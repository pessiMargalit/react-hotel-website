const initialState = { arr: [] };

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDTOCART": {
            const room = { name: action.payload.name, id: action.payload.id, qty: action.payload.qty, numOfooms: action.payload.numOfooms, img: action.payload.img, price: action.payload.price, description: action.payload.description, finallPrice: action.payload.price }
            const find = state.arr.find(r => r.id === action.payload.id)
            if (find == null) {

                state.arr.push(room);
                const find2 = state.arr.find(r => r.id === action.payload.id);
                find2.qty = 1;
                console.log("addToCart");
                console.log(find2);
            }
            else {
                find.qty += 1;
                find.finallPrice = (find.finallPrice += find.price);
                console.log("addToCart");
                console.log(find);
            }
            return { ...state };
        }
        case "DROP": {
            state.arr = state.arr.filter(r => r.id !== action.payload.id)
            console.log("DROP");
            console.log(state);
            return { ...state };
        }
        case "DELETEFROMCART": {
            const find = state.arr.find(r => r.id === action.payload.id)
            find.qty -= 1;
            return { ...state };
        }
        case ("RESETRESEVATION"): {
            state.arr.splice(0);
            return { ...state };
        }
    }
    return state;
};