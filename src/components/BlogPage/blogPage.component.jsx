import usePosts from '../../customHooks/usePosts';
import Post from '../Post/post.component';

const BlogPage = () => {
	const { posts, users, comments, isLoading, isError } = usePosts();

	if (isLoading) return <p>Loading...</p>;

	if (isError) return <p>Something went wrong, reload the page</p>;

	return (
		<div>
			{posts.map(post => (
				<Post
					key={post.id}
					author={users.find(user => user.id === post.userId)}
					title={post.title}
					content={post.body}
					comments={comments}
				/>
			))}
		</div>
	);
};

export default BlogPage;
