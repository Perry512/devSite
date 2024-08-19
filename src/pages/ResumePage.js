import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TNResume from '../pictures/TNResume.png';

import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';


const ResumePage = () => {
  return (
    <View>
        <View>
            <Header />
        </View>
        <Text className={styles.container}>
            <img src={TNResume} alt="MyResume" width='100%' height='100%'/>
        </Text>
        <View>
            <Footer />
      </View>
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

