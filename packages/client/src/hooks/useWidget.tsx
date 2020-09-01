import {useContext} from 'react';

import WidgetContext, {WidgetContextInterface} from '../context/widget/WidgetContext';

const useWidget = () => useContext<WidgetContextInterface>(WidgetContext);

export default useWidget;
