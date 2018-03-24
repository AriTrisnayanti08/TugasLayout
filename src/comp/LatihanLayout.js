import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class LatihanLayout extends React.Component {
  render() {
    return (
    <View style={styles.containerMain}>

      <View style={styles.box1}>
          <Text style={{ textAlign: 'center', padding: 35, fontSize: 22, color: 'white' }}>
          PEMROGRAMAN MOBILE</Text>
      </View>
      <View style={styles.box2}>
          <Text style={{ textAlign: 'center', padding: 40, fontSize: 30 }}>
          Slider</Text>
      </View>
      <View style={styles.box3}>
        <View style={styles.button}><Text>1</Text></View>
        <View style={styles.button}><Text>2</Text></View>
        <View style={styles.button}><Text>3</Text></View>
        <View style={styles.button}><Text>4</Text></View>
      </View>
      <View style={styles.box4}>
        <View style={styles.button}><Text>5</Text></View>
        <View style={styles.button}><Text>6</Text></View>
        <View style={styles.button}><Text>7</Text></View>
        <View style={styles.button}><Text>8</Text></View>
      </View>
      <View style={styles.box5}>
        <Text style={{ textAlign: 'center', padding: 10, fontSize: 20, color: 'white' }}>
        PTI-Undiksha</Text>
      </View>
</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#FF80AB',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 0.5,
    backgroundColor: '#880E4F'
  },
  box2: {
    flex: 1,
    backgroundColor: '#039BE5',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  box3: {
    flex: 0.5,
    backgroundColor: '#64FFDA',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center'
  },
  box4: {
    flex: 0.5,
    backgroundColor: '#64FFDA',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EA80FC'
  },
  box5: {
    flex: 0.4,
    backgroundColor: '#311B92',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-around'
  }
});
