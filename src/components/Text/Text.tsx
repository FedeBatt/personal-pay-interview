import { Text as RNText, TextProps } from 'react-native';

import styles from './Text.styles';

interface CustomTextProps extends TextProps {
  customStyle?: object;
  variant?: 'xl' | 'lg' | 'md' | 'sm';
}

const Text: React.FC<CustomTextProps> = ({
  children,
  customStyle,
  variant = 'md',
  ...props }) => {
  return (
    <RNText style={[styles[variant], customStyle]} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
