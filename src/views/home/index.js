import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux' 
import axios from 'axios'

//import de COMPENENTS
import MovieContainer from '../../components/movieContainer'

import './style.css'


export default function Home() {
    const list = useSelector(state => state.movies)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=3b40bd9a2697f19d6fd5cadbe981d69a&language=en-US&page=1')
        .then(response => dispatch({type: 'LOAD-MOVIES', payload: response.data.results}))
    }, [])



    return (
        <main className='main-home'>
            {list.length > 0 ? list.map(item => <MovieContainer key={item.id} data={item} />) : <p>Nenhum filme encontrado</p>}
        </main>
    )
}