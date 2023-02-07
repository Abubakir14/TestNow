import React from 'react';
// import {useDispatch} from 'react-redux';
import {SwipeListView} from 'react-native-swipe-list-view';
import {StyleSheet, TouchableHighlight, Text, View} from 'react-native';

export default function ListItem({todos}) {
  // const dispatch = useDispatch();
  return (
    <TouchableHighlight>
      <SwipeListView
        style={styles.swipe}
        data={todos}
        renderItem={(data, rowMap) => (
          <View style={styles.textInput}>
            <Text>{data.item.userText}</Text>
          </View>
        )}
        renderHiddenItem={(data, rowMap) => (
          <View style={styles.delete}>
            <Text>Delete</Text>
          </View>
        )}
        leftOpenValue={70}
      />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  checkBox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#222F3E',
    marginRight: 16,
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
    backgroundColor: 'white',
  },
  delete: {
    width: 70,
    height: 45,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 10,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'white',
    backgroundColor: '#FF003C',
  },
  deleteText: {
    color: 'white',
    fontSize: 15,
  },
  swipe: {},
});
