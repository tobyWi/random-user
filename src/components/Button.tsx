import { Button, styled } from '@mui/material'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuffle } from '@fortawesome/free-solid-svg-icons'

const FetchButton = ({
  loading,
  handleFetchUser,
  className,
}: {
  loading: boolean
  handleFetchUser: () => void
  className?: string
}) => {
  return (
    <Button
      disabled={loading}
      variant="text"
      size="large"
      onClick={handleFetchUser}
      className={className}
    >
      <StyledFontAwesomeIcon icon={faShuffle} />
      Get random user
    </Button>
  )
}

export const StyledFetchButton = styled(FetchButton)`
  align-self: center;
  color: #cce6f4;
  font-weight: bold;
  margin-top: 20px;
  border: 3px solid #7ef9c2;
  &[disabled] {
    background-color: #96a0a8;
    border: 3px solid #96a0a8;
  }
  &:hover {
    border: 3px solid #cefbe4;
  }
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  width: 12px;
  height: 12px;
`
