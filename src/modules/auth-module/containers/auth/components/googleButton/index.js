import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import images from '../../../../assets/images';

import styles from './styles';
import {listItem} from '../../../../../../constants/colors';

function GoogleLoginButton(props) {
  const {fetching = false, onPress, containerStyle, textStyle} = props;

  return (
    <TouchableOpacity onPress={fetching ? null : onPress}>
      <View
        style={[
          styles.container,
          containerStyle,
          props.disabled ? styles.disabled : {},
        ]}>
        <View style={styles.iconHolder}>
          <Image
            style={[styles.googleIcon, {tintColor: listItem}]}
            source={images.google}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.text, textStyle]}>{'buttons.google_login'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default GoogleLoginButton;
