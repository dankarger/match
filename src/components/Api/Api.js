import axios from "axios";

export const axiosApi = axios.create({ baseURL: 'https://61c2f2dc9cfb8f0017a3e7c8.mockapi.io/shoes', });
// const API='https://61c2f2dc9cfb8f0017a3e7c8.mockapi.io/shoes/'

export const getDataBase= async ()=>{
    const DATA = await axiosApi.get('');
    console.log('ds',DATA)
    return DATA.data
}


export const findShoe=(id)=>{
    const DATA= getDataBase();
    return DATA.find(shoe=>shoe.id===id);
}