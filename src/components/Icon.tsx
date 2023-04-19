import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

import {
    IconStyle
} from '@fortawesome/fontawesome-common-types';

type propsType = {
    name: IconName ,
    type: IconStyle
}
// library.add(fab, far, fas);

const Icon: React.FC<propsType>  = ({
                                        name,
                                        type
                                    }) => {

 return (
  <>
      <FontAwesomeIcon icon={[type as IconPrefix, name as IconName]}  />
  </>
 );
};

export default Icon;