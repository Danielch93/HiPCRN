import React from 'react';
import {NativeModules, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HiPCRN = () => {
  console.log("holi")
  console.log(NativeModules.DummyMessage);
  return (
    <View style={styles.center}>
      <Text>Helloo, React-Native Component!</Text>
      <Text>new text</Text>
    </View>
  );
};
export default HiPCRN;
