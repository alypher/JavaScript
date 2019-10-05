import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import Pokemon_api from '../../_api/pokemon'

import './index.css'

export default class Main extends Component
{
        state = {
                pokemons: [],
                pokemons_info: {},
                page: 0,
                next_page: 20,
                is_first: "",
                is_last: "",
                total_pages: 0,
        }

        componentDidMount()
        {
                this.pokemon_load(this.state.page)
        }

        pokemon_load = async (page = 0) => 
        {
                const response = await Pokemon_api.get(`pokemon?offset=${page}&limit=20`) 
                
                const { results, ...pokemons_info } = response.data

                const count = response.data.count

                const next = response.data.next

                const previous = response.data.previous

                this.setState({ pokemons: results, pokemons_info, page: page, is_last: next, is_first: previous, total_pages: count})

                this.pokemon_url(this.state.pokemons)

        }

        back_page = () => 
        {
                const { page, is_first } = this.state

                if(page < 20 && is_first == null )
                {
                        return
                }
                else
                {
                        const page_number = page - 20
                        this.pokemon_load(page_number)
                }
        }

        next_page = () => 
        {
                const { page, is_last } = this.state

                if(page !== 0 && is_last == null )
                {
                        return
                }
                else
                {
                        const page_number = page + 20
                        this.pokemon_load(page_number)
                }
        }

        pokemon_url(results)
        {
                const id = []
                
                for (let i in results)
                {
                       results[i].id = id.push( this.pokemon_id(results[i].url) )
                }

                this.setState({ pokemons: results})
        }

        pokemon_id(url)
        {
                let temp = url.substring(34)
                temp = temp.replace('/',' ')
                return parseInt(temp)             
        }
        
        render()
        {
                const { pokemons, page, total_pages } = this.state    
            
                return <main id="page-main">
                        {pokemons.map(pokemon => 
                        (       
                                <article key={pokemon.name}>
                                        
                                        <h1> <Link to={`/pokemon/${pokemon.id}`} style={{ textDecoration: 'none'}}> {pokemon.name}</Link>  </h1>
                                        <p> {pokemon.url} </p>

                                </article>
                        ))}

                        <div className="pagination">

                                <button disabled={page < 20} onClick={this.back_page}>Back</button>
                                <button disabled={page > total_pages-20}onClick={this.next_page}>Next</button>

                        </div>
                </main>
        }
}
