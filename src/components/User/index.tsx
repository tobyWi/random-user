import { UserProps } from 'app/page'
import { Grid, Paper, styled } from '@mui/material'

import { StyledImage } from './Image'
import { StyledDescription } from './Description'
import { StyledSummary } from './Summary'
import { device } from 'styles/breakpoints'

const User = ({
  loading,
  user,
}: {
  loading: boolean
  user: UserProps | null
  error: string | null
}) => {
  return (
    <StyledLayout elevation={4}>
      <Grid container flexDirection="row">
        <Grid item xs={12} sm={5} flexDirection="column">
          <StyledImage loading={loading} user={user} />
        </Grid>
        <Grid item xs={12} sm={7} flexDirection="column">
          {user ? (
            <StyledSummary user={user} />
          ) : (
            <>
              <h2>No user data</h2>
              <div>Please click on button below</div>
            </>
          )}
        </Grid>
        <Grid item xs={12} flexDirection="column" style={{ marginTop: 'auto' }}>
          <StyledDescription user={user} />
        </Grid>
      </Grid>
    </StyledLayout>
  )
}

export default User

export const StyledLayout = styled(Paper)`
  text-align: center;
  @media ${device.sm} {
    text-align: left;
  }
  position: relative;
  width: 500px;
  max-width: 100%;
  min-height: 300px;
  padding: 20px;
  background-color: #cce6f4;
  color: #4ba3c3;
`
