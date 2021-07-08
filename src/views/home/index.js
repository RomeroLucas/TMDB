
import MovieContainer from '../../components/movieContainer'

import './style.css'

const exemplo = {
    name: 'Nome do filme',
    rating: 7,
    gender: 'Gênero',
    price: '79,99'
}

export default function Home() {
    return (
        <main className='main-home'>
            <MovieContainer data={exemplo} />
            <MovieContainer data={exemplo} />
            <MovieContainer data={exemplo} />
            <MovieContainer data={exemplo} />
            <MovieContainer data={exemplo} />
            <MovieContainer data={exemplo} />
            <MovieContainer data={exemplo} />
            <MovieContainer data={exemplo} />
        </main>
    )
}