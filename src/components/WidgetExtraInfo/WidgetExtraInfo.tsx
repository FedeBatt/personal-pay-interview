import React from 'react'
import { View } from 'react-native'

import Icon from 'components/Icon'
import icons from 'constants/icons'

import styles from './WidgetExtraInfo.styles'
import theme from 'theme'
import Text from 'components/Text'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface IWidgetExtraInfo {
  icon: IconDefinition;
  colorIcon?: string;
  title: string;
  info: string;
}

const WidgetExtraInfo: React.FC<IWidgetExtraInfo> = ({icon, colorIcon, title, info}) => {
  return (
    <View>
      <View style={styles.container}>
        <Icon style={{ marginBottom: 12 }} icon={icon} class="far" size={36} color={colorIcon} />
        <Text customStyle={{ fontWeight: 'bold', }}>{title}</Text>
        <Text>{info}</Text>
      </View>
    </View>
  )
}

export default WidgetExtraInfo