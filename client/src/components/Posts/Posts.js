import React, { useEffect } from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { getPosts } from '../../action/posts';
 
export default function Posts({setCurrentId}) {
  const posts = useSelector((state) => state.posts)
  const classes = useStyles();

  // console.log(posts)
    return (
        
        !posts.length ? <>
        <CircularProgress /> <Typography>No post yet</Typography>
        </>: (
          <Grid className = {classes.container} container alignItems="stretch" spacing={3}>
            {posts.map((post) => {
              return <> 
              <Grid key={post._id} item xs={12} sm={6}>
                <Post post={post} setCurrentId={setCurrentId}/>
              </Grid>
              </>
            })}
          </Grid>
        )
        
    )
}
