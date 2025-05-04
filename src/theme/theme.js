import { createTheme } from '@mui/material/styles';
import { lightTheme, darkTheme } from './colorVariables';

export const getTheme = (mode) => {
  return createTheme(mode === 'light' ? lightTheme : darkTheme);
};
