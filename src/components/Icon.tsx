import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

import {
    IconStyle
} from '@fortawesome/fontawesome-common-types';

type propsType = {
    name: IconName ,
    type: IconStyle,
    className?: string
}
// library.add(fab, far, fas);

const Icon: React.FC<propsType>  = ({
                                        name,
                                        type,
                                        className
                                    }) => {

 return (
  <>
      <FontAwesomeIcon icon={[type as IconPrefix, name as IconName]} className={className}  />
  </>
 );
};

export default Icon;