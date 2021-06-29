import { memo } from 'react';

import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import Post from '../Post/post.component';
import usePosts from '../../customHooks/usePosts';

const PostList = ({ filter = '' }) => {
	const { posts, users, isLoading, isError } = usePosts();

	if (isLoading) return <CircularProgress />;

	if (isError) return <p>Something went wrong, reload the page</p>;

	const filteredPosts = posts
		.map(post => ({
			...post,
			author: users.find(user => user.id === post.userId),
		}))
		.filter(post =>
			post.author.username.toLowerCase().includes(filter.toLowerCase())
		);

	return (
		<Grid container spacing={5}>
			{filteredPosts.map(post => (
				<Grid item key={post.id} style={{ flexGrow: 1 }}>
					<Post
						author={post.author}
						title={post.title}
						content={post.body}
						id={post.id}
					/>
				</Grid>
			))}
		</Grid>
	);
};

export default memo(PostList);
