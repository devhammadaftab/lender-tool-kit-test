import React,{useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Profile from '../Profile/Profile'
import TabPanel from '../Panel/Panel';
import AccountMenu from '../accountMenu';
import BasicTable from '../basicTabel';
import BasicForm from '../basicForm';


const NavTabs=()=> {
  const [value, setValue] = React.useState(0);
  const [openForm, setOpenForm] = React.useState(false);

  const [todos, setTodos] = useState([]);
	const handleOnClick = (page) => {
		console.log('open');
		if (!openForm) {
			setOpenForm(true)
		} else {
			setOpenForm(false)
		}
	};
	const BasicFormCallback = (obj) => {
		setTodos(prev => [...prev, obj])
	}

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Box sx={{display:'flex',justifyContent:'space-between', margin:'0 20px'}}>
    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
      <Tab icon={<PhoneIcon fontSize='small' />} label="Contacts"  fontSize='small' />
      <Tab icon={<PersonPinIcon fontSize='small' />} label="Profile" />
    </Tabs>
    <AccountMenu/>
    </Box>
    <TabPanel value={value} index={0}>
				{openForm && <BasicForm BasicFormCallback={BasicFormCallback} />}
				<Button variant="outlined" color={openForm?'warning':'info'} sx={{float:'right',margin:'5px 0'}} onClick={handleOnClick} startIcon={openForm?<CloseIcon/>:<AddIcon />}>{openForm?'Close':'Add Task'}</Button>
				<Box sx={{ my: 4 }} >
					<BasicTable todos={todos} />
				</Box>
    </TabPanel>
    <TabPanel value={value} index={1}>
      <Profile/>
    </TabPanel>

    </>
  );
}

export default NavTabs