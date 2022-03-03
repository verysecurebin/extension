import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import CustomizedMenus from '../routes/DropDownButton'

export default function CustomizedInputBase() {
  return (
      <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 440, height: 300, overflow: 'auto' }}
      >
        <InputBase
            sx={{ ml: 1, flex: 1 }}
            multiline
            placeholder="Enter a PasteBin link or ciphertext to decrypt, plaintext to encrypt"
            inputProps={{ 'aria-label': 'search google maps', 'rows': '5'  }}
        />
        {/*<IconButton type="submit" sx={{ p: '10px' }} aria-label="search">*/}
        {/*  <SearchIcon />*/}
        {/*</IconButton>*/}
        {/*<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />*/}
        {/*<IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">*/}
        {/*  <DirectionsIcon />*/}

        {/*</IconButton>*/}
        {/*  <Divider sx={{ height: 28, m: 0.5 }} orientation="horizontal" />*/}
          {/*<CustomizedMenus/>*/}


      </Paper>
  );
}
