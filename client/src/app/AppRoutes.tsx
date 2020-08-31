import PropTypes from 'prop-types';
import React from 'react';
import {Route, Switch} from 'react-router-dom';

import NotFoundView from '../view/NotFoundView';
import Overview from '../view/Overview';
import GridTestView from '../view/GridTestView';

interface AppRoutes {}

const AppRoutes: React.FC<AppRoutes> = () => {
  return (
    <>
      <Switch>
        <Route path='/' exact component={Overview} />

        <Route path='/grid' exact component={GridTestView} />

        <Route path='*' component={NotFoundView} />
      </Switch>
    </>
  );
};

AppRoutes.propTypes = {};

AppRoutes.defaultProps = {};

export default AppRoutes;
