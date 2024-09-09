import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

const LoginScreen = () => {
  return (
    // <View style={styles.container}>
    //   <View style={styles.topImageContainer}>
    //     <Image
    //       source={require('../assets/topVector.png')}
    //       style={styles.topImage}
    //     />
    //   </View>
    //   <View style={styles.helloContainer}>
    //     <Text style={styles.helloText}>Hello</Text>
    //   </View>
    //   <View>
    //     <Text style={styles.signInText}>Sign in to your account</Text>
    //   </View>
    //   <View style={styles.inputContainer}>
    //     <FontAwesome
    //       name={'user'}
    //       size={24}
    //       color={'#9A9A9A'}
    //       style={styles.inputIcon}
    //     />
    //     <TextInput style={styles.textInput} placeholder="Email" />
    //   </View>
    //   <View style={styles.inputContainer}>
    //     <Fontisto
    //       name={'locked'}
    //       size={24}
    //       color={'#9A9A9A'}
    //       style={styles.inputIcon}
    //     />
    //     <TextInput
    //       style={styles.textInput}
    //       placeholder="Password"
    //       secureTextEntry
    //     />
    //   </View>
    //   <Text style={styles.forgetPasswordText}>Forgot your password?</Text>
    //   <View style={styles.signInButtonContainer}>
    //     <Text style={styles.signIn}>Sign In</Text>
    //     <AntDesign
    //       name={'arrowright'}
    //       size={24}
    //       color={'white'}
    //       style={styles.inputIcon}
    //     />
    //   </View>
    //   <Text style={styles.footerText}>Don’t have an account? Create</Text>
    // </View>
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#F5F5F5',
//     flex: 1,
//   },
//   topImageContainer: {},
//   topImage: {
//     width: '100%',
//     height: 130,
//   },
//   helloContainer: {},
//   helloText: {
//     textAlign: 'center',
//     fontSize: 70,
//     fontWeight: '500',
//     color: '#262626',
//   },
//   signInText: {
//     textAlign: 'center',
//     fontSize: 18,
//     color: '#262626',
//     marginBottom: 30,
//   },
//   inputContainer: {
//     backgroundColor: '#F5F5F5',
//     flexDirection: 'row',
//     borderRadius: 20,
//     marginHorizontal: 40,
//     elevation: 10,
//     marginVertical: 20,
//     alignItems: 'center',
//     height: 50,
//   },
//   inputIcon: {
//     marginLeft: 15,
//     marginRight: 5,
//   },
//   textInput: {
//     flex: 1,
//   },
//   forgetPasswordText: {
//     color: '#BEBEBE',
//     textAlign: 'right',
//     width: '90%',
//     fontSize: 15,
//   },
//   signInButtonContainer: {
//     flexDirection: 'row',
//     marginTop: 100,
//     width: '90%',
//     justifyContent: 'flex-end',
//   },
//   signIn: {
//     color: '#262626',
//     fontSize: 25,
//     fontWeight: 'bold',
//   },
//   linearGradient: {
//     height: 34,
//     width: 56,
//     borderRadius: 17,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginHorizontal: 10,
//   },
//   footerText: {
//     color: '#262626',
//     textAlign: 'center',
//     fontSize: 15,
//     marginTop: 90,
//   },
// });
