import axios from "axios";

export const axiosApi = axios.create({ baseURL: 'https://61c2f2dc9cfb8f0017a3e7c8.mockapi.io/shoes', });
// const API='https://61c2f2dc9cfb8f0017a3e7c8.mockapi.io/shoes/'

export const getDataBase= async ()=>{
    try {
        const data =   axiosApi.get('')
        const shoes= await data
        return shoes


    }catch (err){
        console.log(err)
    }
}


export const findShoe= async (id)=>{
    // const DATA= getDataBase();
    // return DATA.find(shoe=>shoe.id===id);
    let selectedShoe ;
    await axiosApi.get(`/${id}`)
        .then(res=>{selectedShoe=res})
    return selectedShoe

}

export const deleteShoe=(id)=>{

}