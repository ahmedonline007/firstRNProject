import {
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput, Button} from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const CreateEmplyee = ({navigation, route}) => {
  const getDetails = type => {
    console.log(route.params);
    if (route.params) {
      switch (type) {
        case 'name':
          return route.params.name;
        case 'phone':
          return route.params.phone;
        case 'email':
          return route.params.email;
        case 'salary':
          return route.params.salary;
        case 'position':
          return route.params.position;
      }
    }
  };

  const [Name, setName] = useState(getDetails('name'));
  const [Phone, setPhone] = useState(getDetails('phone'));
  const [Email, setEmail] = useState(getDetails('email'));
  const [Salary, setSalary] = useState(getDetails('salary'));
  const [Picture, setPicture] = useState('');
  const [position, setposition] = useState(getDetails('position'));
  const [Model, setModel] = useState(false);
  const [enableShift, setenableShift] = useState(false);

  const saveData = () => {
    Alert.alert('Save Button pressed');
  };

  const editData = () => {
    Alert.alert('Edit Button pressed');
  };

  return (
    <KeyboardAvoidingView
      behavior="position"
      style={styles.root}
      enabled={enableShift}>
      <View>
        <TextInput
          style={styles.inputStyle}
          label="Name"
          value={Name}
          theme={theme}
          mode="outlined"
          enableShift={() => setenableShift(false)}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.inputStyle}
          label="Email"
          value={Email}
          theme={theme}
          mode="outlined"
          enableShift={() => setenableShift(false)}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.inputStyle}
          label="Phone"
          value={Phone}
          theme={theme}
          mode="outlined"
          enableShift={() => setenableShift(true)}
          keyboardType="number-pad"
          onChangeText={text => setPhone(text)}
        />
        <TextInput
          style={styles.inputStyle}
          label="Salary"
          value={Salary}
          theme={theme}
          mode="outlined"
          enableShift={() => setenableShift(true)}
          //keyboardType="number-pad"
          onChangeText={text => setSalary(text)}
        />
        <TextInput
          style={styles.inputStyle}
          label="Position"
          value={position}
          theme={theme}
          mode="outlined"
          enableShift={() => setenableShift(true)}
          onChangeText={text => setposition(text)}
        />
        <Button
          icon="upload"
          style={styles.inputStyle}
          mode="contained"
          onPress={() => setModel(true)}>
          Upload Image
        </Button>
        {route.params ? (
          <Button
            icon="content-save"
            style={styles.inputStyle}
            mode="contained"
            onPress={() => editData()}>
            Edit Data
          </Button>
        ) : (
          <Button
            icon="content-save"
            style={styles.inputStyle}
            mode="contained"
            onPress={() => saveData()}>
            Save Data
          </Button>
        )}
        <Modal
          animationType="slide"
          transparent={false}
          visible={Model}
          onRequestClose={() => {
            setModel(false);
          }}>
          <View style={styles.modalView}>
            <View style={styles.modalButtonView}>
              <Button
                icon="camera"
                mode="contained"
                onPress={() => setModel(false)}>
                Camera
              </Button>
              <Button
                icon="image-area"
                mode="contained"
                onPress={() => setModel(false)}>
                Gallery
              </Button>
            </View>
            <Button onPress={() => setModel(false)}>Cancel</Button>
          </View>
        </Modal>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreateEmplyee;
const theme = {
  colors: {
    primary: 'blue',
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  inputStyle: {
    margin: 15,
  },
  modalView: {
    position: 'absolute',
    bottom: 2,
    width: '100%',
    backgroundColor: '#b8e6ff',
  },
  modalButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});
