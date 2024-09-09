import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import {Card, FAB} from 'react-native-paper';

const Home = props => {
  const [loading, setloading] = useState(false);
  const data = [
    {
      id: '1',
      name: 'Ahmed1',
      email: 'aa@qq.ff',
      salary: 500,
      phone: '1234567',
      position: 'Full-Stack Developer1',
      picture:
        'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg',
    },
    {
      id: '2',
      name: 'Ahmed2',
      email: 'aa@qq.ff2',
      salary: 600,
      phone: '123456700',
      position: 'Full-Stack Developer2',
      picture:
        'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg',
    },
    {
      id: '3',
      name: 'Ahmed3',
      email: 'aa@qq.ff3',
      salary: 800,
      phone: '123456744',
      position: 'Full-Stack Developer3',
      picture:
        'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg',
    },
    {
      id: '4',
      name: 'Ahmed4',
      email: 'aa@qq.ff4',
      salary: 2200,
      phone: '1234455567',
      position: 'Full-Stack Developer4',
      picture:
        'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg',
    },
    {
      id: '5',
      name: 'Ahmed5',
      email: 'aa@qq.ff5',
      salary: 5600,
      phone: '123456457',
      position: 'Full-Stack Developer5',
      picture:
        'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg',
    },
  ];

  const renderList = item => {
    return (
      <Card
        style={styles.myCard}
        onPress={() => props.navigation.navigate('Profile', {item})}>
        <View style={styles.cardView}>
          <Image
            style={{width: 60, height: 60, borderRadius: 30}}
            source={{
              uri: 'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg',
            }}
          />
          <View style={{marginLeft: 10}}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.position}</Text>
          </View>
        </View>
      </Card>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return renderList(item);
        }}
        keyExtractor={item => `${item.id}`}
        //onRefresh={}
        refreshing={loading}
      />
      <FAB
        icon="plus"
        style={styles.fab}
        theme={{colors: {accent: 'blue'}}}
        onPress={() => props.navigation.navigate('Create')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  myCard: {
    margin: 5,
  },
  cardView: {
    flexDirection: 'row',
    padding: 6,
  },
  text: {
    fontSize: 20,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
