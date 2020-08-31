import PropTypes from 'prop-types';
import React from 'react';

import View from '../components/View/View';
import Card from '../components/Card/Card';
import Mock from '../components/Mock/Mock';
import Row from '../components/Grid/Row';
import Column from '../components/Grid/Column';

const GridTestView = () => {
  return (
    <View>
      <Row>
        <Column md={2}>
          <Card>
            <Mock width='100%' height='100px' label='2' />
          </Card>
        </Column>
        <Column md={2}>
          <Card>
            <Mock width='100%' height='100px' label='2' />
          </Card>
        </Column>
        <Column md={2}>
          <Card>
            <Mock width='100%' height='100px' label='2' />
          </Card>
        </Column>
        <Column md={2}>
          <Card>
            <Mock width='100%' height='100px' label='2' />
          </Card>
        </Column>
        <Column md={2}>
          <Card>
            <Mock width='100%' height='100px' label='2' />
          </Card>
        </Column>
        <Column md={2}>
          <Card>
            <Mock width='100%' height='100px' label='2' />
          </Card>
        </Column>
      </Row>
      <Row>
        <Column md={4}>
          <Card>
            <Mock width='100%' height='100px' label='4' />
          </Card>
        </Column>
        <Column md={4}>
          <Card>
            <Mock width='100%' height='100px' label='4' />
          </Card>
        </Column>
        <Column md={4}>
          <Card>
            <Mock width='100%' height='100px' label='4' />
          </Card>
        </Column>
      </Row>
      <Row>
        <Column>
          <Card>
            <Mock width='100%' height='100px' label='12' />
          </Card>
        </Column>
      </Row>
      <Row>
        <Column md={6}>
          <Card>
            <Row>
              <Column md={4}>
                <Row>
                  <Column>
                    <Mock width='100%' height='100px' label='XA' />
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <Mock width='100%' height='100px' label='XA' />
                  </Column>
                </Row>
              </Column>
              <Column md={6}>
                <Mock width='100%' height='100px' label='XB' />
              </Column>
            </Row>
          </Card>
        </Column>
        <Column md={6}>
          <Card>
            <Row>
              <Column md={3}>
                <Row>
                  <Column>
                    <Mock width='100%' height='100px' label='XA' />
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <Mock width='100%' height='100px' label='XA' />
                  </Column>
                </Row>
              </Column>
              <Column md={3}>
                <Mock width='100%' height='100px' label='XB' />
              </Column>
            </Row>
          </Card>
        </Column>
      </Row>
      <Row>
        <Column md={6}>
          <Card>
            <Mock width='100%' height='100px' label='6' />
          </Card>
        </Column>
        <Column md={6}>
          <Card>
            <Mock width='100%' height='100px' label='6' />
          </Card>
        </Column>
      </Row>
      <Row>
        <Column md={4}>
          <Row>
            <Column>
              <Card>
                <Mock width='100%' height='100px' label='A4' />
              </Card>
            </Column>
          </Row>
          <Row>
            <Column>
              <Card>
                <Mock width='100%' height='100px' label='A4' />
              </Card>
            </Column>
          </Row>
        </Column>
        <Column md={4}>
          <Card>
            <Mock width='100%' height='100px' label='B4' />
          </Card>
        </Column>
      </Row>
      <Row>
        <Column>
          <Card>
            <Mock width='100%' height='100px' label='12' />
          </Card>
        </Column>
      </Row>
    </View>
  );
};

GridTestView.propTypes = {};

GridTestView.defaultProps = {};

export default GridTestView;
