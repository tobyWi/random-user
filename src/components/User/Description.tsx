import { styled } from '@mui/system'
import { UserProps } from 'app/page'

const Description = ({
  user,
  className,
}: {
  user: UserProps | null
  className?: string
}) => {
  if (!user) return null

  const { name, dob, gender, location, registered } = user

  return (
    <div className={className}>
      <p>{`${name.first} is a ${dob.age} year old ${
        gender === 'male' ? 'male' : 'female'
      } that lives in ${location.city}, ${location.country}.`}</p>
      <p>{`${name.first} has been a registreted user for ${registered.age} years`}</p>
    </div>
  )
}

export const StyledDescription = styled(Description)`
  margin-top: 50px;

  p {
    color: #384955;
    font-size: 0.9rem;
    margin: 0;
    margin-bottom: 8px;
  }
`
