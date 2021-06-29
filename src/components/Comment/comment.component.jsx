import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import FavoriteIcon from '@material-ui/icons/Favorite';

const Comment = ({ author, body }) => (
	<Card>
		<CardContent>
			<Typography variant='h6' gutterBottom>
				{author}
			</Typography>
			<Typography variant='body2'>{body}</Typography>
		</CardContent>
		<CardActions>
			<IconButton style={{ marginLeft: 'auto' }}>
				<FavoriteIcon />
			</IconButton>
		</CardActions>
	</Card>
);

export default Comment;
