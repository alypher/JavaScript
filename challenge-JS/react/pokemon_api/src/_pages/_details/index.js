import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import Pokemon_api from '../../_api/pokemon'


import './index.css'

export default class Details extends Component
{
    state = {
        pokemon: [],
        pokemin_id: 0,
        pokemon_name: "",
        pokemon_mainSkill: "",
        pokemon_specie: "",
        pokemon_image: "",
    }

    async componentDidMount()
    {
        const { name } = this.props.match.params

        const response = await Pokemon_api.get(`/pokemon/${name}`) 

        let pokemon_name = response.data.forms[0].name
        let mainSkill = response.data.abilities[0].ability.name
        let specie = response.data.species.name
        let image_front = response.data.sprites.front_default

       this.setState({ pokemon: response.data, pokemon_id: name, pokemon_name: pokemon_name, pokemon_mainSkill: mainSkill, pokemon_specie: specie, pokemon_image: image_front})
                
    }

    render()
    {      
        const {pokemon_name, pokemon_mainSkill, pokemon_specie, pokemon_image } = this.state

        return <main id="page-datail">
                
            <div id="image">
                <img src={pokemon_image} alt="Front"/>
            </div>    

            <div id="info">
                <h2>NAME: {pokemon_name}</h2>
                <h2>MAIN SKILL: {pokemon_mainSkill}</h2>
                <h2>SPECIE: {pokemon_specie}</h2>
            </div>

            <div className="return">
                <h1> <Link to={`/`} style={{ textDecoration: 'none', color: 'white' }} > Return </Link> </h1>
            </div>

        </main>
    }
}