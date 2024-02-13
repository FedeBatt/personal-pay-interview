import React, { useState } from 'react'
import { Modal, TouchableOpacity, View } from 'react-native'

import Icon from 'components/Icon'

import icons from 'constants/icons'
import styles from './CtaMenu.styles'
import theme from 'theme'
import Button from 'components/Button'
import { useAppDispatch } from 'store/store'
import { toggleEditMode } from 'store/locationListSlice'


const CtaMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handlePress = () => {
    dispatch(toggleEditMode());
    setIsOpen(false);
  }

  return (
    <>
      <>
        <Modal
          transparent
          visible={isOpen}
        >
          <TouchableOpacity
            style={styles.backdrop}
            onPress={() => setIsOpen(false)}
          />
          <View style={styles.modalContainer}>
            <Button customStyles={{ width: '100%' }} variant="outline" onPress={handlePress}>Edit</Button>
          </View>
        </Modal>

        <TouchableOpacity style={{ marginRight: 12 }} onPress={() => setIsOpen(!isOpen)}>
          <Icon icon={icons.elipsisVertical} size={16} color={theme.colors.black} />
        </TouchableOpacity>
      </>
    </>
  )
}

export default CtaMenu