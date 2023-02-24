import { apiMarvel } from "./apiMarvel"

const getComicsById = async(id)  => {
    const response = await apiMarvel.get(`comics/${id}?ts=1&apikey=fd71abf028139e0e458665e2abb9230c&hash=0dc768ea8be5c530ad6abffc6cfe2ce6`)
    return response.data.data.results
}

export { getComicsById }