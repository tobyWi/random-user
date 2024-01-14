import { UserProps } from 'app/page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelopeOpen,
  faAt,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons'
import { styled } from '@mui/material'

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

const StyledSummary = styled(Summary)`
  position: relative;
  &::before {
    content: '';
    height: 100%;
    width: 3px;
    background-color: #687987;
    position: absolute;
    left: -24px;
  }
  ul {
    color: #96a0a8;
    li {
      line-height: 1.6;
    }
  }
`

export default StyledSummary
