import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import styles from './styles';
import HomeService from './services';
import {Card} from './components';

export default function Home({navigation}) {
  const [items, setItems] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await HomeService.getItems(1).then(item => setItems(item));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.viewText}>
        <Text>Welcome to</Text>
        <Text style={styles.title}>LeanTech Test</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollContentContainer}>
        {items.length > 0 && items.map(item => <Card title={item.title} />)}
      </ScrollView>
    </SafeAreaView>
  );
}
