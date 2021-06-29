import TextField from '@material-ui/core/TextField';

const SearchBar = ({ value, handleChange }) => {
	return (
		<TextField
			id='search-bar'
			name='search'
			type='text'
			value={value ? value : ''}
			label='Search User'
			variant='outlined'
			onChange={e => handleChange(e.target.value)}
		/>
	);
};

export default SearchBar;
