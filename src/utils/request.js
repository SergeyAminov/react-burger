import checkResponse from "./checkResponse";

export default async function request(url, options){
    return fetch(url, options).then(checkResponse);
}
