import { Box, Typography, Paper } from '@mui/material';
import { useEffect } from 'react';

const Settings = () => {

  useEffect(() => {
    document.title = 'Admin Panel - Settings';
  }, []);  

  return (
    <Box p={2}>
      <Typography variant="h4" mb={2}>Settings</Typography>
      <Paper sx={{ p: 2 }}>
        <Typography>This is the settings page (static data).</Typography>
      </Paper>
    </Box>
  );
};

export default Settings;
