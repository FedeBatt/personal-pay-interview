import React from 'react'
import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native'
import styles from './AutocompleteInput.styles'
import Icon from 'components/Icon'
import icons from 'constants/icons'

interface AutocompleteInputProps extends TextInputProps {
  onPress: () => void;
  disabled: boolean;
}

export const AutocompleteInput: React.FC<AutocompleteInputProps> = ({onPress, disabled, ...props}) => {
  return (
    <View>
      <TextInput
        {...props}
        style={styles.input}
        placeholderTextColor="gray"
        placeholder='Type some location'
      />
      <TouchableOpacity disabled={disabled} onPress={() => onPress()} style={styles.searchButton}>
        <Icon color={disabled ? 'gray' : 'blue'} size={24} icon={icons.search} />
      </TouchableOpacity>
    </View>
  )
}

export default AutocompleteInput;