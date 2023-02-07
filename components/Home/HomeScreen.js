import React from 'react';
import {useSelector} from 'react-redux';
import Logo from '../../UI/Logo/Logo';
import AddNewTaskLogo from '../../UI/AddNewTask/AddNewTask';
import ListItem from '../ListItem/ListItem';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableHighlight,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

export default function HomeScreen({navigation}) {
  const todos = useSelector(state => state.todos);

  return (
    <SafeAreaView style={styles.sectionContainers}>
      <View style={styles.sectionContainer}>
        <Logo />
        <ScrollView nestedScrollEnabled={true}>
          <View>
            <ScrollView style={styles.scrollView}>
              <TouchableHighlight>
                <ListItem todos={todos} />
              </TouchableHighlight>
            </ScrollView>
          </View>
        </ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('AddTask')}>
          <View>
            <AddNewTaskLogo />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 90,
    width: '90%',
    height: '85%',
  },
  textInput: {
    width: 334,
    height: 44,
    paddingLeft: 16,
    paddingTop: 10,
    borderColor: 'gray',
    marginBottom: 16,
    borderWidth: 2,
    borderRadius: 8,
  },
  scrollView: {
    width: '100%',
  },
  sectionContainers: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
