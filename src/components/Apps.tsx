import Image from 'next/image'

import userConfig from '../../UserConfig.json'
import { DynamicIcon } from './DynamicIcon'

export const Apps = () => {
  const config = userConfig

  return (
    <div className="Apps grid center rowGap07">
      <span className="categoryTitle extendedFont">apps</span>
      <ul
        className={`grid center ${
          config.apps.length > 6 ? 'col4' : 'col3'
        } rowGap12 colGap15 noList`}
      >
        {config.apps.map(({ appName, endpoint, iconName }, idx) => (
          <li className="app grid center rowGap05" key={idx}>
            <a className="grid center noLink " href={endpoint}>
              {/* <DynamicIcon iconName={`${iconName}.svg`} width={24} /> */}
              {/* <i className="material-icons-outlined ">{iconName} </i> */}
            </a>
            <span>{appName}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Apps
