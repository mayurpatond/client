import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <Link to="/" className='logo'>Mayur's Blog</Link>
            <nav>
                <Link to='/login' className='login'>Login</Link>
                <Link to='/register'> Register</Link>
            </nav>
        </header>
    )
}
