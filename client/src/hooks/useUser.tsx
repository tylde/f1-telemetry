import {useContext} from 'react';

import UserContext, {UserContextInterface} from '../context/user/UserContext';

const useUser = () => useContext<UserContextInterface>(UserContext);

export default useUser;
