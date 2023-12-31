// import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card'
import styled from 'styled-components'
import { Loader } from '../../utils/Atoms'
// import { useEffect, useState } from 'react'
import { useFetch } from '../../utils/hooks'

const CardsContainer = styled.div`
  display: grid;
  gap: 40px;
  grid-template-rows: 200px 200px;
  grid-template-columns: repeat(4, 1fr);
`

const StyledFreelances = styled.div`
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledParagraph = styled.p`
  font-size: 0.75rem;
  color: #8186a0;
  margin-bottom: 2rem;
`

const StyleTitle = styled.h1`
  font-size: 1.5rem;
`
function Freelances() {
  const { data, isLoading, error } = useFetch(
    'https://itchy-tan-dalmatian.cyclic.app/freelances',
  )
  const { freelancersList } = data

  if (error) {
    return <div>Something went wrong...</div>
  }

  return (
    <StyledFreelances>
      <StyleTitle>Find your provider </StyleTitle>
      <StyledParagraph>
        At Shiny we bring together the best profiles for you.
      </StyledParagraph>
      {isLoading && !freelancersList ? (
        <Loader />
      ) : (
        <CardsContainer>
          {freelancersList &&
            freelancersList.map((profile, index) => (
              <Card
                key={`${profile.name}-${index}`}
                label={profile.jobTitle}
                picture={profile.picture}
                title={profile.name}
              />
            ))}
        </CardsContainer>
      )}
    </StyledFreelances>
  )
}

export default Freelances
