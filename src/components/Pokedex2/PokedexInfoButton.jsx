import React, { useState } from 'react';
import { Box, Typography, Button, Modal } from '@mui/material';
import styles from './styles.module.css'

export const PokemonInfoButton = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <Box display="flex" justifyContent="center" marginLeft="5px">
          <button onClick={handleOpen} className={styles.infoButton}>Features</button>
          <Modal open={open} onClose={handleClose}>
            <Box className={styles.modalBox} >
              <Typography variant='h5' style={{display: 'flex', justifyContent: 'center'}}>
                Features
              </Typography>
              <Typography variant="h6">
                This site documents all Pokémon available in Luminescent Platinum 2.0F, including their locations, types, abilities, stats, evolutions with methods, forms, 
                wild held items, and movesets. It currently does not include a per route Pokémon location chart, but you may use our <a href="https://docs.google.com/spreadsheets/d/1a-NSfEgtt8kAr1cXwKkmY2SylYMs2tUG5tMSIhK0-OY/edit">Pokémon 
                Locations by Route documentation</a> to access that information in the meanwhile.
                <br/><br/>
                Mobile users will need to swap from portrait to landscape mode if they wish to see full move descriptions in the appropriate drop downs.
                <br/><br/>
                For your convenience:
                <ul>
                  <li>Clicking on an Ability will list its effects on the same page.</li>
                  <li>
                    Clicking on item rates will also show you what they change to when a Pokémon with Frisk, Super Luck or Compound Eyes are at the front of the party.
                  </li>
                </ul>
                Planned Changes:
                <ul>
                  <li>A comparison toggle to view vanilla BDSP stats against any changes we have made.</li>
                </ul>
                Please keep an eye on this features section to see what other features may become available.
              </Typography>
            </Box>
          </Modal>
        </Box>
    )
}
