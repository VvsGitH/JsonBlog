import { useState, useEffect } from 'react';
import useFetch from './useFetch';

export default function usePosts() {
	const [isError, setError] = useState(false);
	const [isLoading, setLoading] = useState(false);

	const [posts, arePostsLoading, postsError] = useFetch(
		'https://jsonplaceholder.typicode.com/posts'
	);
	const [users, areUsersLoading, usersError] = useFetch(
		'https://jsonplaceholder.typicode.com/users'
	);

	useEffect(() => {
		setLoading(arePostsLoading || areUsersLoading);
	}, [arePostsLoading, areUsersLoading]);

	useEffect(() => {
		let error = false;
		if (postsError) {
			error = true;
			console.error(postsError);
		}
		if (usersError) {
			error = true;
			console.error(usersError);
		}
		setError(error);
	}, [postsError, usersError]);

	return { posts, users, isLoading, isError };
}
