import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const SettingsPage = () => {
  return (
    <View style={styles.flex}>
      <SafeAreaView>
        <Text>Settings Page</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default SettingsPage;
