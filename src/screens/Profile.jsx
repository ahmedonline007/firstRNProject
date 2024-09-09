import {StyleSheet, Text, View, Image, Linking, Platform} from 'react-native';
import React from 'react';
import {Title, Card, Button} from 'react-native-paper';

const Profile = props => {
  const {id, name, email, phone, picture, salary, position} =
    props.route.params.item;
  const openDialPhone = () => {
    if (Platform.OS == 'android') {
      Linking.openURL('tel:12345');
    } else {
      Linking.openURL('telprompt:12345');
    }
  };

  const deleteEmployee = () => {};

  return (
    <View style={styles.root}>
      <View style={{alignItems: 'center'}}>
        <Image
          style={{
            width: 140,
            height: 140,
            borderRadius: 140 / 2,
            marginTop: 100,
          }}
          source={{
            uri: picture,
          }}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Title>{name}</Title>
        <Text style={{fontSize: 20}}>{position}</Text>
      </View>
      <Card
        style={styles.myCard}
        onPress={() => Linking.openURL('mailto:aa@aa.a')}>
        <View style={styles.cardContent}>
          <Text style={styles.mytext}>{email}</Text>
        </View>
      </Card>
      <Card style={styles.myCard} onPress={openDialPhone}>
        <View style={styles.cardContent}>
          <Text style={styles.mytext}>{phone}</Text>
        </View>
      </Card>
      <Card style={styles.myCard}>
        <View style={styles.cardContent}>
          <Text style={styles.mytext}>{salary}$</Text>
        </View>
      </Card>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 10,
        }}>
        <Button
          mode="contained"
          icon="account-edit"
          onPress={() =>
            props.navigation.navigate('Create', {
              id,
              name,
              email,
              phone,
              picture,
              salary,
              position,
            })
          }>
          Edit
        </Button>
        <Button mode="contained" icon="delete" onPress={() => deleteEmployee()}>
          Delete
        </Button>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  myCard: {
    margin: 3,
  },
  cardContent: {
    flexDirection: 'row',
  },
});
