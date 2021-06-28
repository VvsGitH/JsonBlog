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
	const [comments, areCommentsLoading, commentsError] = useFetch(
		'https://jsonplaceholder.typicode.com/comments'
	);

	useEffect(() => {
		setLoading(arePostsLoading || areUsersLoading || areCommentsLoading);
	}, [arePostsLoading, areUsersLoading, areCommentsLoading]);

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
		if (commentsError) {
			error = true;
			console.error(commentsError);
		}
		setError(error);
	}, [postsError, usersError, commentsError]);

	return { posts, users, comments, isLoading, isError };
}
