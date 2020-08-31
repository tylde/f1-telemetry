import React, {useMemo} from 'react';

import './Mock.scss';

interface Mock {
  children?: React.ReactNode;
  label?: string;
  height?: string;
  width?: string;
}

const Mock: React.FC<Mock> = ({
  children = null,
  label = '',
  height = '100%',
  width = '100%'
}) => {
  const styles = useMemo(() => ({height, width}), [height, width]);
  return (
    <div className='mock-component' style={styles}>
      {children}
      {label}
    </div>
  );
};

Mock.propTypes = {};

Mock.defaultProps = {};

export default Mock;
