import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import useFetch from '../../customHooks/useFetch';
import Comment from '../Comment/comment.component';

import useCommentsStyles from './commentlist.style';

const CommentList = ({ postId }) => {
	const [comments, areLoading, error] = useFetch(
		`https://jsonplaceholder.typicode.com/comments?postId=${postId}`
	);

	const classes = useCommentsStyles();

	if (areLoading) return <CircularProgress />;

	if (error) return <p>ERROR!</p>;

	return (
		<Grid container spacing={2} className={classes.gridContainer}>
			{comments.map(comment => (
				<Grid item key={comment.id}>
					<Comment author={comment.email} body={comment.body} />
				</Grid>
			))}
		</Grid>
	);
};

export default CommentList;
