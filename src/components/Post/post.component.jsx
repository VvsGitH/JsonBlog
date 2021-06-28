import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
	root: {
		maxWidth: '800px',
	},
	avatar: {
		width: theme.spacing(10),
		height: theme.spacing(10),
	},
}));

const Post = ({ author, title, content, comments }) => {
	const classes = useStyles();
	const [expanded, setExpanded] = useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar
						alt={author.username}
						src={`https://robohash.org/${author.id}?set=set2&size=180x180`}
						className={classes.avatar}
					/>
				}
				title={author.username}
				subheader={author.name}
				titleTypographyProps={{ variant: 'h5' }}
			/>
			<CardContent>
				<Typography variant='h5' gutterBottom>
					{title}
				</Typography>
				<Typography variant='body2'>{content}</Typography>
			</CardContent>
			<CardActions>
				<IconButton aria-label='like'>
					<FavoriteIcon />
				</IconButton>
				<IconButton
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label='show more'>
					<Typography variant='body2'>Comments</Typography>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout='auto' unmountOnExit>
				COMMENTS
			</Collapse>
		</Card>
	);
};

export default Post;
