import axios from 'axios'

const Pokemon_api = axios.create({baseURL: 'https://pokeapi.co/api/v2'})

export default Pokemon_api