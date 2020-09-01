import PropTypes from 'prop-types';
import React from 'react';

import withWidget from '../../hocs/withWidget';
import Mock from '../../components/Mock/Mock';

interface Overview {}

const LeaguesOverview: React.FC<Overview> = () => {
  return (
    <div>
      <Mock width='100%' height='300px' label='Overview' />
    </div>
  );
};

LeaguesOverview.propTypes = {};

LeaguesOverview.defaultProps = {};

export default withWidget(LeaguesOverview);
