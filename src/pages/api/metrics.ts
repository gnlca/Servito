// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from 'fs';
import { type NextApiRequest, type NextApiResponse } from 'next';

const metrics = async (req: NextApiRequest, res: NextApiResponse) => {
	const paths = {
		// temperature: "/sys/class/thermal/thermal_zone0/temp",
		temperature: '/sys/class/thermal/thermal_zone0/temp',
		meminfo: '/proc/meminfo',
		hostname: '/etc/hostname',
		version: '/proc/version',
	};

	function fetchFile(path: string) {
		if (fs.existsSync(path)) {
			const data = fs.readFileSync(path, 'utf8');

			return data;
		} else {
			// res.status(500).json({ error: "FILE NON ESISTE" });
			return null;
		}
	}

	function fetchData(percorsi: typeof paths) {
		const Risposta = {} as any; // TODO FIX

		for (const [key, value] of Object.entries(percorsi)) {
			Risposta[key] = fetchFile(value);
		}

		res.status(200).json(Risposta);
	}

	fetchData(paths);
};

export default metrics;
