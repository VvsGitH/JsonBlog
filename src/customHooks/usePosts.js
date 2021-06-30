import { useState, useEffect } from 'react';
import useFetch from './useFetch';

export default function usePosts() {
	const [signedPosts, setSignedPosts] = useState([]);
	const [error, setError] = useState(false);

	const [areFetching, setFetching] = useState(true);
	const [isLoading, setLoading] = useState(true);

	// * areFetching is true as long as the two data fetches aren't complete
	// * isLoading is true as long as areFetching is true and as long as
	// 	 signedPosts isn't generated or an error arises

	const [posts, arePostsLoading, postsError] = useFetch(
		'https://jsonplaceholder.typicode.com/posts'
	);
	const [users, areUsersLoading, usersError] = useFetch(
		'https://jsonplaceholder.typicode.com/users'
	);

	// Set areFetching to false when both post and users are ready
	useEffect(() => {
		setFetching(arePostsLoading || areUsersLoading);
	}, [arePostsLoading, areUsersLoading]);

	// Check for errors and insert them into an array
	useEffect(() => {
		let newError = [];
		if (postsError) newError.push(postsError);

		if (usersError) newError.push(usersError);

		setError(newError);
	}, [postsError, usersError]);

	// Inserting corresponding users into posts
	useEffect(() => {
		if (!areFetching && error.length === 0) {
			const signed = posts.map(post => ({
				...post,
				author: users.find(user => user.id === post.userId),
			}));
			setSignedPosts(signed);
		}
	}, [areFetching, posts, users, error]);

	// Set loading to false if the signedPosts array has been generated or
	//  if there was an error.
	useEffect(() => {
		if (!areFetching && (signedPosts.length > 0 || error.length > 0))
			setLoading(false);
	}, [areFetching, signedPosts, error]);

	return { signedPosts, isLoading, isError: error.length > 0, error };
}
