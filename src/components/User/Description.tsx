import { UserProps } from 'app/page'
import styled from 'styled-components'

const Description = ({
  user,
  className,
}: {
  user: UserProps | null
  className?: string
}) => {
  console.log({ className })
  if (!user) return null

  return (
    <div className={className}>
      <p>{`${user?.firstName} is a ${user?.age} year old ${
        user?.gender === 'male' ? 'male' : 'female'
      } that lives in ${user?.city}, ${user?.country}.`}</p>
      <p>{`${user?.firstName} has been a registreted user for ${user?.yearsRegistered} years`}</p>
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
