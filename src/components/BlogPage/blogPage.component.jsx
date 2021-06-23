import useFetch from '../../customHooks/useFetch';

const BlogPage = () => {
	const [posts, setPosts] = useFetch(
		'https://jsonplaceholder.typicode.com/posts'
	);
	const [users, setUsers] = useFetch(
		'https://jsonplaceholder.typicode.com/users'
	);
	const [comments, setComments] = useFetch(
		'https://jsonplaceholder.typicode.com/comments'
	);

	return (
		<div>
			{posts.map(post => (
				<div key={post.id}>
					<span>{users.find(user => user.id === post.userId).name}</span>
					<h3>{post.title}</h3>
					<p>{post.body}</p>

					<br />
				</div>
			))}
		</div>
	);
};

export default BlogPage;
