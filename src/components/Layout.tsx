import { Paper, styled } from '@mui/material'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <Paper elevation={4}>{children}</Paper>
}

export const StyledLayout = styled(Paper)`
  position: relative;
  width: 500px;
  max-width: 100%;
  min-height: 300px;
  padding: 20px;
  background-color: #cce6f4;
  color: #4ba3c3;
`
