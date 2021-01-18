import React, { useEffect, useState } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"
import { Switch, Route} from "react-router-dom"
import memory from "./components/images/memories.png"
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
import useStyles from './styles';
import { useDispatch } from 'react-redux'
import { getPosts } from './action/posts'
import BaseLayout from './components/baseLayout/BaseLayout'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Main from './components/Main/Main'

export default function App() {


    return (
      <BaseLayout>
        <Switch>
          <Route component = {Login} path="/" exact />
          <Route component = {Register} path="/register" exact />
          <Route component = {Main} path="/main" exact />
          
        </Switch>
      </BaseLayout>
    )
}
