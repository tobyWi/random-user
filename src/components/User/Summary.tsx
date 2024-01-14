import { UserProps } from 'app/page'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelopeOpen,
  faAt,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons'

const Summary = ({
  user,
  className,
}: {
  user: UserProps
  className?: string
}) => {
  if (!user) return null

  return (
    <div className={className}>
      <div>
        {`${user?.title}.`} <strong>{user?.lastName}</strong>
      </div>
      <h2>{user?.firstName}</h2>
      <ul>
        <li>
          <StyledFontAwesomeIcon icon={faAt} />
          {user?.userName}
        </li>
        <li>
          <StyledFontAwesomeIcon icon={faEnvelopeOpen} />
          {user?.email}
        </li>
        <li>
          <StyledFontAwesomeIcon icon={faMobileAlt} />
          {user?.phone}
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
