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

                <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" />

                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            </Head>
            <Navbar />
            { children}
        </header>
    )
}

export default Layout
