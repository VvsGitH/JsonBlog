import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header/header.component';
import BlogPage from './components/BlogPage/blogPage.component';

function App() {
	return (
		<div className='App'>
			<CssBaseline />
			<Header />
			<BlogPage />
		</div>
	);
}

export default App;
