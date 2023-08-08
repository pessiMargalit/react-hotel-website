export const drop=(id)=>{
    return{
        type: "DROP",
        payload: {id},
    };
};