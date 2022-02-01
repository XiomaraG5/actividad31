


export const endpoint ='https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/starwars.json';


export const Data = async ()=>{
     const resp = await fetch(endpoint)
    const data = await resp.json();
}