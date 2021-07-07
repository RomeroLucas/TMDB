import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <main className='main-home'>
            Olá Home <Link to='/checkout'>go to checkout</Link>
        </main>
    )
}