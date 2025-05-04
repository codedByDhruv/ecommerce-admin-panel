import { Box, Toolbar } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useState } from 'react';

const Layout = ({ children, toggleTheme, mode }) => {
  const [open, setOpen] = useState(true); // state lifted up

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar open={open} />
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Navbar toggleTheme={toggleTheme} mode={mode} open={open} setOpen={setOpen} />
        <Box component="main" sx={{ flex: 1, overflow: 'auto', p: 2 }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
