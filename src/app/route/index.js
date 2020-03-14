import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RepositoryInfo from '../components/repository-info';
import HomePage from '../components/organization-info';
import UserInfo from '../components/user-info';

const RoutesComponent = () => (
  <Switch>
    <Route path="/:userLogin" exact component={UserInfo}></Route>
    <Route path="/repository/:owner/:repoName" exact component={RepositoryInfo}></Route>
    <Route path="/:typeName/:searchName" component={HomePage}></Route>
    <Route path="/" component={HomePage}></Route>
  </Switch>
)

export default RoutesComponent;