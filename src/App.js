import * as React from 'react';
import Container from '@mui/material/Container';
import './App.css'
import NavTabs from './components/navTabs/NavTabs';

export default function App() {
	return (
		<Container maxWidth="sm" >
			<div className='main_class'>
				<NavTabs/>
			</div>
		</Container>
	);
}
