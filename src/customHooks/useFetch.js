import { useState, useEffect } from 'react';

const useFetch = url => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(url);
				const data = await res.json();
				setData(data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, [url]);

	return [data, setData];
};

export default useFetch;
