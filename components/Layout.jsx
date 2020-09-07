import Head from 'next/head'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <header>
            <Head>
                <title>Nextjs | GraphQL | Resume</title>
                <meta name="description" content="Full Stack Next.js, GraphQL, Apollo Resume" />
                <meta name="keywords" content="Next.js, GraphQL, Apollo, Nexus Schema, Materialize" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            </Head>
            <Navbar />
            { children}
        </header>
    )
}

export default Layout
