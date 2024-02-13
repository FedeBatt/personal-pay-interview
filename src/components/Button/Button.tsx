// Button.tsx

import Text from 'components/Text';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, StyleProp, ViewStyle } from 'react-native';

import styles from './Button.styles';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'disabled';
  children: React.ReactNode;
  customStyles?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children, onPress,
  disabled,
  customStyles,
  ...props }) => {

  const getButtonVariantResolver = (): StyleProp<ViewStyle> => {
    switch (variant) {
      case 'primary':
        return styles.primaryButton;
      case 'secondary':
        return styles.secondaryButton;
      case 'outline':
        return [styles.outlineButton, disabled && styles.disabledOutlineButton];
      case 'ghost':
        return styles.ghostButton;
      case 'disabled':
        return styles.disabledButton;
      default:
        return styles.primaryButton;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.button, getButtonVariantResolver(), disabled && styles.disabledButton, customStyles]}
      onPress={onPress}
      disabled={disabled}
      {...props}
    >
      <Text
        customStyle={[styles.label, disabled && styles.disabledLabel]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
