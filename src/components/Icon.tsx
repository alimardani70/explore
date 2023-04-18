import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


type propsType = {
    name: string,
    type: 'solid' | 'regular' | 'brands'
}

const Icon: React.FC<propsType>  = ({
                                        name,
                                        type
                                    }) => {
 return (
  <>
      <FontAwesomeIcon icon={icon({name: 'user-secret'})} /> // Defaults to the Classic family, Solid style
      <FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} /> // A brand icon
      <FontAwesomeIcon icon={icon({name: 'folder', style: 'regular'})} /> // A brand icon
      <FontAwesomeIcon icon={icon({name: 'folder-open', style: 'regular'})} /> // A brand icon
      <FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} /> // A brand icon
      <FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} /> // A brand icon
      <FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} /> // A brand icon
      <FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} /> // A brand icon
  </>
 );
};

export default Icon;