import React from 'react';
import { Typography, Box, Avatar } from '@mui/material';

export default function Chat(props) {
    const {fromVarshik, message,} = props
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'flex-end', 
                flexDirection: fromVarshik?'row-reverse':'row', 
                gap: '1rem',
                padding: '0.5rem',
                borderRadius: '10px',
                maxWidth: '100%',
                alignSelf:fromVarshik?'end':'flex-start',
            }}
        >
            <Avatar
                src={fromVarshik?`https://fwrqd2wnfbppmvdo.public.blob.vercel-storage.com/varshik.jpg`:''}
                alt="User Avatar"
                sx={{
                    width: '32px',
                    height: '32px',
                }}
            />
           
            <Typography
                sx={{
                    backgroundColor: fromVarshik?'#5E21E0':'#007AFF', 
                    color: 'white',
                    padding: '1rem',
                    borderRadius: '15px', 
                    borderTopLeftRadius: '5px', 
                    maxWidth: '70%',
                    borderBottomRightRadius: '5px', 
                }}
            >
               {message}
            </Typography>
        </Box>
    );
}
