import { UserProps } from 'app/page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelopeOpen,
  faAt,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons'
import { styled } from '@mui/material'
import { device } from 'styles/breakpoints'

const Summary = ({
  user,
  className,
}: {
  user: UserProps
  className?: string
}) => {
  if (!user) return null

  const { name, login, email, phone } = user

  return (
    <div className={className}>
      <div>
        {`${name.title}.`} <strong>{user?.name.last}</strong>
      </div>
      <h2>{name.first}</h2>
      <ul>
        <li>
          <StyledFontAwesomeIcon icon={faAt} />
          {login.username}
        </li>
        <li>
          <StyledFontAwesomeIcon icon={faEnvelopeOpen} />
          {email}
        </li>
        <li>
          <StyledFontAwesomeIcon icon={faMobileAlt} />
          {phone}
        </li>
      </ul>
    </div>
  )
}

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  color: #687987;
  width: 12px;
  height: 12px;
`

export const StyledSummary = styled(Summary)`
  margin: 26px 0;
  position: relative;
  &::before {
    content: '';
    height: 1px;
    width: 100%;
    left: 0;
    right: 0;
    bottom: -10px;
    background-color: #687987;
    position: absolute;
  }
  @media ${device.sm} {
    margin: 0;
    &::before {
      height: 100%;
      width: 3px;
      left: -24px;
    }
  }

  ul {
    color: #96a0a8;
    li {
      line-height: 1.6;
    }
  }
`

export default StyledSummary
