import CpuTemp from './Widgets/CpuTemp';
import SysVersion from './Widgets/SysVersion';
import Hostname from './Widgets/Hostname';
import MemFree from './Widgets/MemFree';
import { useEffect, useState } from 'react';

const Metrics_URL = `/api/metrics`;

const Widgets = () => {
	const [metrics, setMetrics] = useState<any>({});

	async function fetchAPI(api_url: string) {
		const res = await fetch(api_url);
		const data = await res.json();
		// console.log(data);
		setMetrics(data);
		return data;
	}

	useEffect(() => {
		fetchAPI(Metrics_URL);
		setInterval(() => fetchAPI(Metrics_URL), 1000);
	}, []);

	return (
		<div className="Widgets grid center rowGap1 maxWidthMinContent ">
			<span className="categoryTitle extendedFont">widgets</span>
			<div className="grid rowGap07">
				<div className="grid center col3 colGap07  ">
					<CpuTemp temperature={metrics.temperature} />
					<MemFree meminfo={metrics.meminfo} />
					<Hostname hostname={metrics.hostname} />
				</div>

				<SysVersion version={metrics.version} />
			</div>
		</div>
	);
};

export default Widgets;
