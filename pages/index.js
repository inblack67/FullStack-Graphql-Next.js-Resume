import { useQuery, gql } from '@apollo/client'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { print } from 'graphql/language/printer'

const ResumeQuery = gql`
{
  bio{
  name
  tagline
  email
  github
  website
  linkedin
  objective
    
  },
  positions{
    id,
    title,
    company,
    startDate,
    endDate,
    employmentType,
    achievements,
    years,
    months
  }
}
`;

export default function Home() {

  const { loading, error, data } = useQuery(ResumeQuery);

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <div>
        <h1>GraphQL Query</h1>
        <SyntaxHighlighter language="graphql" >
          {print(ResumeQuery)}
        </SyntaxHighlighter>
      </div>
      <div>
        <h1>Query Data</h1>
        <SyntaxHighlighter language="json" >
          {JSON.stringify(data, null, 3)}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
