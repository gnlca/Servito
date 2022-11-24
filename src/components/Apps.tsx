import Image from 'next/image';
import { any } from 'zod';

import userConfig from '../../UserConfig.json';

function Apps() {
	const config = userConfig as any;
	const apps = [];
	for (const key in config.apps) {
		apps.push(
			<li className="app grid center rowGap05" key={key}>
				<a className="grid center noLink " href={config.apps[key][1]}>
					{/* <Icon name={config.apps[key][0]} width={24} /> */}
					<i className="material-icons-outlined ">{config.apps[key][0]} </i>
				</a>
				<span>{key}</span>
			</li>,
		);
	}

	return (
		<div className="Apps grid center rowGap07">
			<span className="categoryTitle extendedFont">apps</span>
			<ul
				className={`grid center ${
					Object.keys(config.apps).length > 6 ? 'col4' : 'col3'
				} rowGap12 colGap15 noList`}
			>
				{apps}
			</ul>
		</div>
	);
}

export default Apps;
