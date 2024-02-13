import { View } from 'react-native'

import Text from 'components/Text'
import Button from 'components/Button'
import Icon from 'components/Icon'

import icons from 'constants/icons'

import theme from 'theme'
import React from 'react'

interface AddLocationProps {
  onPress: () => void
}

const AddLocation: React.FC<AddLocationProps> = ({ onPress }) => {
  return (
    <Button variant='ghost' onPress={onPress} >
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Text customStyle={{ color: theme.colors.primary, marginRight: theme.sizes[2] }}>Other locations</Text>
        <Icon icon={icons.plusCircle} size={18} color={theme.colors.primary} />
      </View>
    </Button>
  )
}

export default AddLocation