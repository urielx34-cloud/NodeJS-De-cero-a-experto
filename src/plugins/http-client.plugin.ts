import axios from 'axios';


export const httpClientPlugin = {

  get: async(url: string ) => {
    const { data } = await axios.get( url );
    return data;
    // const resp = await fetch( url );
    // return await resp.json();     
  },

  post: async(url: string, body: any ) => {
   // throw new Error("No implementado");
  },
  put: async(url: string, body: any) => {
   // throw new Error(" implementado");
  },
  delete: async(url: string ) => {
   // throw new Error("No implementado");
  },

};

