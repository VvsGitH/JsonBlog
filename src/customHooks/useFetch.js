import { useState, useEffect } from 'react';

export default function useFetch(url) {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setData([]);
		setError(null);

		const fetchData = async () => {
			try {
				const res = await fetch(url);
				const data = await res.json();
				setData(data);
				setLoading(false);
			} catch (error) {
				setError(error);
				setLoading(false);
			}
		};

		fetchData();
	}, [url]);

	return [data, isLoading, error];
}
