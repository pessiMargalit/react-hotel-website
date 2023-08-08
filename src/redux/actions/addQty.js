export const addQty=(id)=>{
    return{
        type: "ADDQTY",
        payload: {id}
    };
};