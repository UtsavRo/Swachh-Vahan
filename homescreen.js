import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView, Image} from 'react-native';
import tw from 'twrnc';
import NavOption from '../components/navOption';
const homescreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
    <View style={ tw`p-5`}>
        <Image
        style={{
            width: 100,
            height: 100,
            resizeMode: "contain",

        }}
        source={require('../assets/MyIcon.png')} />
      <NavOption />
    </View>
    </SafeAreaView>
  );
};

export default homescreen;

const styles = StyleSheet.create({});
