import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [mobileNumber, setMobileNumber] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/6797836/pexels-photo-6797836.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
        }}
        style={styles.image}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.countryCode}>+91</Text>
        <TextInput
          placeholder="Phone Number"
          style={styles.input}
          onChangeText={(text) => setMobileNumber(text)}
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('OTP Verify', {
            mobileNumber: mobileNumber,
          })
        }
        style={styles.button}>
        <Text style={styles.buttonText}>Get OTP</Text>
      </TouchableOpacity>
      <Text style={styles.termsText}>
        By signing up, you agree with our terms and conditions.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  image: {
    width: 200,
    height: 300,
    marginBottom: 20,
    borderRadius: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 25,
    backgroundColor: '#F3F3F3',
    paddingLeft: 20,
    paddingRight: 50,
    borderWidth: 0.8,
    borderColor: 'grey',
    fontFamily: 'Roboto-Medium',
  },
  countryCode: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Medium',
  },
  input: {
    flex: 1,
    height: 50,
    fontFamily: 'Roboto-Medium',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#E55807',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto-Medium',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Medium',
  },
  termsText: {
    marginTop: 20,
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
    fontFamily: 'Comfortaa-Medium',
  },
});
