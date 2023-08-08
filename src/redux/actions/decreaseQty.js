export const decreaseQty=(id)=>{
    return{
        type: "DECREASEQTY",
        payload: {id}
    };
};