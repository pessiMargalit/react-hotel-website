export const addToCart=(name,id,price,img,qty,numOfooms,description)=>{
    // const room = { name:name, id:id, qty:qty,numOfooms:numOfooms, img:img, price:price, description:description, finallyPrice:price}

    return{
        type: "ADDTOCART",
        payload: {name,id,price,img,qty,numOfooms,description}
        // payload: {room}
    };
};
