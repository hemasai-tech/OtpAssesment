import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
} from 'react-native';

export default function OTPVerifyScreen({navigation, route}) {
  const [otp, setOTP] = useState(['', '', '', '']);

  const handleVerifyOTP = () => {
    showAlert('Success', 'Your details have been submitted.');
  };

  const showAlert = (title, message) => {
    Alert.alert(
      title,
      message,
      [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
          style: 'default',
        },
      ],
      {cancelable: false},
    );
  };

  const handleChangeOTP = (value, index) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    // Move focus to the next input
    if (index < 3 && value !== '') {
      otpInputsRef[index + 1].focus();
    }
  };

  const otpInputsRef = [];

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/6797836/pexels-photo-6797836.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
          }}
          style={styles.image}
        />
      </View>
      <Text style={styles.otpSentText}>OTP Sent to</Text>
      <Text style={styles.mobileNumber}>{route.params.mobileNumber}</Text>
      <View style={styles.otpInputContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={value}
            onChangeText={text => handleChangeOTP(text, index)}
            keyboardType="numeric"
            maxLength={1}
            ref={ref => (otpInputsRef[index] = ref)}
          />
        ))}
      </View>
      <TouchableOpacity onPress={handleVerifyOTP} style={styles.verifyButton}>
        <Text style={styles.verifyButtonText}>Verify OTP</Text>
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
    backgroundColor: 'white',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  otpSentText: {
    color: 'grey',
    marginTop: 20,
    fontFamily: 'Roboto-Medium',
  },
  mobileNumber: {
    fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
  },
  otpInputContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  otpInput: {
    width: 60,
    height: 40,
    borderWidth: 1,
    borderColor: 'grey',
    fontSize: 20,
    textAlign: 'center',
    marginRight: 10,
    borderRadius: 5,
    fontFamily: 'Roboto-Medium',
  },
  verifyButton: {
    width: '85%',
    height: 50,
    backgroundColor: '#E55807',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  verifyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Medium',
  },
  termsText: {
    marginTop: 20,
    fontSize: 12,
    color: 'grey',
    textAlign: 'center',
    paddingHorizontal: 20,
    fontFamily: 'Comfortaa-Medium',
  },
});
