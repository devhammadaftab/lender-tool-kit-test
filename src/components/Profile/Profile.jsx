import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';

export default function BasicCard() {
    const { user } = useSelector(state => state.user)
    console.log('userss', user);
    return (
        <Card sx={{ minWidth: '100%', textAlign:'center'}}>
            <CardContent>
                <Typography sx={{marginLeft:'12.5rem', marginBottom:'1rem'}}>
                <Avatar>M</Avatar>
                </Typography>
                <Typography variant="h6" component="div">
                    {`${user.firstName} ${user.lastName}`}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Skills
                </Typography>
                <Typography variant="body2">
                    {user.Skills.map((sks, i) => {
                        return (
                            <>
                                {` ${sks}, `}
                            </>
                        )
                    })}
                </Typography>
            </CardContent>
        </Card>
    );
}
