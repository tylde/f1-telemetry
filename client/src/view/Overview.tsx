import PropTypes from 'prop-types';
import React from 'react';

import View from '../components/View/View';
import Card from '../components/Card/Card';
import Row from '../components/Grid/Row';
import Column from '../components/Grid/Column';
import LeaguesOverview from '../widgets/Overview/Overview';

const Overview = () => {
  return (
    <View>
      <Row>
        <Column>
          <LeaguesOverview />
        </Column>
      </Row>
    </View>
  );
};

Overview.propTypes = {};

Overview.defaultProps = {};

export default Overview;
