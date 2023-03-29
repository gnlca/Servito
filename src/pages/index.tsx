import styled from 'styled-components'
import Apps from '../components/Apps'
import Home from '../components/Home'
import Widgets from '../components/Widgets'
import { gridCenter } from '../styles/common'

const Dashboard = () => {
  return (
    <DashboardWrapper className="Servito__dashboard">
      <Container className="Servito__dashboard-container">
        <Home />
        <Apps />
        <Widgets />
      </Container>
    </DashboardWrapper>
  )
}

export default Dashboard

const DashboardWrapper = styled.div`
  ${gridCenter}
  min-height: 100vh;
`
const Container = styled.div`
  ${gridCenter}
  row-gap: 2rem;
`
