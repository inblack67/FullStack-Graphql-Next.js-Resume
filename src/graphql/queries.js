import { gql } from '@apollo/client';

export const ResumeQuery = gql`
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