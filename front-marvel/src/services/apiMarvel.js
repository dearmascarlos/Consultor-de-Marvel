import axios from 'axios'

const apiMarvel = axios.create({
    baseURL: 'https://gateway.marvel.com:443/v1/public/'
}) 

/*
ejemplo API DOCUMENTACION 
http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150 (the hash value is the md5 digest of 1abcd1234)

Para obtener el hash ==> md5(ts+private+public) md5(17402aa9838fbe2e1054d4538a20af5a1b9c76f6bfd71abf028139e0e458665e2abb9230c)
Para obtener md5 (https://www.md5.cz/)

public: fd71abf028139e0e458665e2abb9230c
private: 7402aa9838fbe2e1054d4538a20af5a1b9c76f6b
ts: 1
hash: 0dc768ea8be5c530ad6abffc6cfe2ce6

*/

const getMarvel = async (q) => {  // donde (q) podrá ser characters - comics - series
    const response = await apiMarvel.get(`${q}?ts=1&apikey=fd71abf028139e0e458665e2abb9230c&hash=0dc768ea8be5c530ad6abffc6cfe2ce6`)
    return response.data.data.results
}


export { apiMarvel, getMarvel } 