import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import styles from '../assets/style/login';
import LinearGradient from "react-native-linear-gradient";
export default class HelloWorldApp extends Component {
  render() {
    return (
    <View style={styles.container}>
    <LinearGradient colors={['#d63031','#dfe6e9']} style={styles.main}>
      <View style={styles.loginbox}>
          <Text style={styles.logintitle}>ورود</Text>
          <View style={styles.groupInput}>
              <Text style={styles.labeltext}>ایمیل :</Text>
              <TextInput
                style={styles.InputText}
                placeholder="لطفا ایمیل وارد کنید"
              />


          </View>
          <View style={styles.groupInput}>
              <Text style={styles.labeltext}>پسورد :</Text>
              <TextInput
                style={styles.InputText}
                secureTextEntry={true}
                placeholder="لطفا پسورد وارد کنید "

              />


          </View>

        <TouchableOpacity activeOpacity={0.6}>
            <Text style={styles.loginbutton}>ورود به داخل</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.passwordforgot}>فراموشی رمز عبور</Text>
        </TouchableOpacity>
      </View>
      </LinearGradient>
    </View>
    );
  }
}
