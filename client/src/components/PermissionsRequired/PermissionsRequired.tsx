import React from 'react';
import PropTypes from 'prop-types';
import useUser from '../../hooks/useUser';

interface PermissionsRequired {
  children: React.ReactNode;
  requiredPermissions: string[];
}

const hasAccess = (userPermissions: string[], requiredPermissions: string[]): boolean => {
  requiredPermissions.forEach((requiredPermission) => {
    if (userPermissions.includes(requiredPermission)) {
      return true;
    }
  });
  return false;
};

const PermissionsRequired: React.FC<PermissionsRequired> = ({
  children,
  requiredPermissions
}) => {
  const {permissions} = useUser();
  if (!hasAccess(permissions, requiredPermissions)) {
    return null;
  }
  return (
    <>
      {children}
    </>
  );
};

PermissionsRequired.propTypes = {};

PermissionsRequired.defaultProps = {};

export default PermissionsRequired;
