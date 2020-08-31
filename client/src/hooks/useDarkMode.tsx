import {useContext} from 'react';

import DarkModeContext, {DarkModeContextInterface} from '../context/darkmode/DarkModeContext';

const useDarkMode = () => useContext<DarkModeContextInterface>(DarkModeContext);

export default useDarkMode;
