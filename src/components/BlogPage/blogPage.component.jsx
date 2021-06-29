import { useState } from 'react';
import Container from '@material-ui/core/Container';

import PostList from '../PostList/postlist.component';
import SearchBar from '../SearchBar/searchbar.component';

import useBlogPageStyles from './blogPage.style';

const BlogPage = () => {
	const [search, setSearch] = useState('');
	const classes = useBlogPageStyles();

	return (
		<Container maxWidth='lg' className={classes.root}>
			<SearchBar value={search} handleChange={setSearch} />
			<PostList filter={search} />
		</Container>
	);
};

export default BlogPage;
