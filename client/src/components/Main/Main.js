import React, { useEffect, useState } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"
import memory from "../images/memories.png"
import Form from '../Form/Form'
import Posts from '../Posts/Posts'
import useStyles from './style';
import { useDispatch } from 'react-redux'
import { getPosts } from '../../action/posts'
import './main.css';

export default function Main() {
  const [currentId, setCurrentId] = useState(0)
 
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts())
  }, [currentId, dispatch])

    return (
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
          <img className={classes.image} src={memory} alt="icon" height="60" />
        </AppBar>
        <Grow in>
          <Container>
            <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts  setCurrentId={setCurrentId}/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form  currentId={currentId} setCurrentId={setCurrentId}/>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    )
}
