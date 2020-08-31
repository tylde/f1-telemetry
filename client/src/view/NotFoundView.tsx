import PropTypes from 'prop-types';
import React from 'react';

import Error from '../components/Error/Error';
import Card from '../components/Card/Card';
import View from '../components/View/View';
import Column from '../components/Grid/Column';
import Row from '../components/Grid/Row';

interface NotFoundView {}

const NotFoundView: React.FC<NotFoundView> = () => {
  return (
    <View>
      <Row>
        <Column>
          <Card>
            <Error message='Not found' status={404} />
          </Card>
        </Column>
      </Row>
    </View>
  );
};

NotFoundView.propTypes = {};

NotFoundView.defaultProps = {};

export default NotFoundView;
