import { UserProps } from 'app/page'
import { Grid } from '@mui/material'

import { StyledImage } from './Image'
import { StyledDescription } from './Description'
import StyledSummary from './Summary'
import { StyledLayout } from '../Layout'

const User = ({
  loading,
  user,
  error,
}: {
  loading: boolean
  user: UserProps | null
  error: string | null
}) => {
  return (
    <StyledLayout>
      <Grid container flexDirection="row">
        <Grid item xs={5} flexDirection="column">
          <StyledImage loading={loading} user={user} />
        </Grid>
        <Grid item xs={7} flexDirection="column">
          {user ? (
            <StyledSummary user={user} />
          ) : (
            <>
              <h2>No user</h2>
              <div>Please click on Get random user below</div>
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
