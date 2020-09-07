import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="black">
            <div className="nav-wrapper">
                <div className="container">
                    <Link href='/'>
                        <a className="brand-logo left">
                            GraphQL | <span className="red-text">Resume</span>
                        </a>
                    </Link>
                    <ul className="right">
                        <li>
                            <Link href='/about'>
                                <a>
                                    About
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
