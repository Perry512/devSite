import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TNResume from '../pictures/TNResume.png';


const ResumePage = () => {
  return (
    <View>
        <Text className={styles.container}>
            <img src={TNResume} alt="MyResume" width='100%' height='100%'/>
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
      flex:1,
  },

  foot:{
    bottom:0,
  },
})

export default ResumePage;

