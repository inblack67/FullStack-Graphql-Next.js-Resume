import { useQuery } from '@apollo/client';
import { print } from 'graphql/language/printer';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import syntaxTheme from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';
import { ResumeQuery } from '../src/graphql/queries';
import Preloader from '../components/Preloader';
import { initializeApollo } from '../src/apollo'

export default function Home() {

  const { loading, data } = useQuery(ResumeQuery);

  if (loading) {
    return <Preloader />
  }

  return (
    <div className='container'>
      <div>
        <p className="flow-text">GraphQL <span className="red-text">Query</span></p>
        <SyntaxHighlighter language="graphql" style={syntaxTheme} >
          {print(ResumeQuery)}
        </SyntaxHighlighter>
      </div>
      <div>
        <p className="flow-text">Query <span className="red-text">Data</span></p>
        <SyntaxHighlighter language="json" style={syntaxTheme}  >
          {JSON.stringify(data, null, 3)}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}


export const getStaticProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: ResumeQuery
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  }
}