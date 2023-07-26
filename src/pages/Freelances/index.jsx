import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card'
import styled from 'styled-components'

const CardsContainer = styled.div`
  display: grid;
  gap: 40px;
  grid-template-rows: 200px 200px;
  grid-template-columns: repeat(2, 1fr);
`

const StyledFreelances = styled.div`
  margin: 0 3rem 3rem;
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

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeur Fullstack',
    picture: DefaultPicture,
  },
  {},
]
function Freelances() {
  return (
    <StyledFreelances>
      <StyleTitle>Trouvez votre prestataire </StyleTitle>
      <StyledParagraph>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </StyledParagraph>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            picture={profile.picture}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </StyledFreelances>
  )
}

export default Freelances
