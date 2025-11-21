import React from 'react';
import { CustomIcoButton } from '../../components/IcoButton';
import { types } from '../../shared/iconsTypes/icons';

type IconButtonType = 'success' | 'danger' | 'default';

interface Props {
  disabled?: boolean;
  handleAdd?: () => void;
  icon: types;
  type: IconButtonType;
}

export const ExampleIcoButton = (props: Props) => {
  const { icon, disabled, type } = props;

  return (
    <CustomIcoButton
      icon={icon}
      disabled={disabled}
      type={type}
      ariaLabel={'buttonActions'}
    ></CustomIcoButton>
  );
};
