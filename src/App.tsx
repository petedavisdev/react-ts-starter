import { Properties } from './Properties';
import data from './sample2';
// import sampleData from './sampleData.json';

export function App() {
	return (
		<>
			<Properties object={data} />

			{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
		</>
	);
}
