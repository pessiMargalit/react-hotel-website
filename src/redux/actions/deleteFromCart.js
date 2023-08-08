export const deleteFromCart=(id)=>{
    return{
        type: "DELETEFROMCART",
        payload: {id},
    };
};