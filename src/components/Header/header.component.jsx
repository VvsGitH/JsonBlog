import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
	avatar: {
		color: theme.palette.getContrastText(deepOrange[500]),
		backgroundColor: deepOrange[500],
		width: theme.spacing(7),
		height: theme.spacing(6),
	},
	title: {
		textAlign: 'center',
		flexGrow: 1,
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<AppBar position='relative'>
			<Toolbar>
				<Avatar variant='square' className={classes.avatar}>
					<Typography variant='h4'>JB</Typography>
				</Avatar>
				<Typography variant='h3' className={classes.title}>
					JSON BLOG
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
