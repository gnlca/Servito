import WeatherData from './WeatherData'

import Logo from '../../public/logo.svg'
import SearchBox from './SearchBox'
import styled from 'styled-components'
import { gridCenter } from '../styles/common'

export default function Home() {
  return (
    <HomeWrapper className="Servito__home">
      {/* Logo */}
      <Logo fill="var(--Bianco)" width={100} />

      {/* Search */}
      <SearchBox />

      {/* Weather */}
      <WeatherData />
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  ${gridCenter}
  row-gap: 2rem;
`
