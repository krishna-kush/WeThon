import React from 'react'

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

function FeaturedPost({post}) {
  return (
    <CardActionArea component="a" href="#">
    <Card sx={{ display: 'flex' }}>
        <CardContent sx={{ flex: 1 }}>
        <Typography component="h2" variant="h5">
            {post.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
            {post.date}
        </Typography>
        <Typography variant="subtitle1" paragraph>
            {post.description}
        </Typography>
        <Box>
            Team Mem
        </Box>
        </CardContent>
    </Card>
    </CardActionArea>
  );
}

const index = () => {
    const info = {
        title: "HackName",
        date: "TeamName",
        description: "This is a description of the hackathon"
    }

  return (
    <FeaturedPost post={info}/>
  )
}

export default index