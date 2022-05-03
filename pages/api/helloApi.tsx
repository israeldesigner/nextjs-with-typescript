import axios from "axios";
import { BASE_URL } from '../../config/url-config'
import crypto from "crypto-js";

let timestamp = new Date().getTime();
let pubKey = process.env.NEXT_PUBLIC_API_KEY;
let secretKey = process.env.SECRET_API_KEY;


// console.log(pubKey);
// console.log(secretKey);


// export default async (req:any, res:any) => {
//     const URL = `${BASE_URL}ts=${timestamp}&apikey=${process.env.PUB_KEY}&hash=${process.env.SECRET_KEY}`;
//     const response = await axios.get(URL);
//     res.status(200).json({ data: response.data })
// }

export default async function handler(req:any, res:any) {
    const data = await fetch(
      `https://gateway.marvel.com/v1/public?ts=${timestamp}&apikey=${pubKey}&hash=${secretKey}`,
    ).then(response => response.json());
  
    res.json(data); // Send the response
}