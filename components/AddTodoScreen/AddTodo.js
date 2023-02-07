import React from 'react';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import FlatButton from '../../UI/Button/FlatButton';
import RetBar from '../ReturnBar/RetBar';
import {TextInput, StyleSheet, View, SafeAreaView} from 'react-native';

const AddTodoInput = ({navigation}) => {
  const dispatch = useDispatch();
  const [addTodo, setAddTodo] = useState('');
  const [isDisabled, setDisabled] = useState(false);

  const AddChangeHandler = event => setAddTodo(event.nativeEvent.text);

  function AddClick() {
    if (addTodo === '') {
      setDisabled(false);
    } else {
      dispatch({
        type: 'add_text',
        payload: {
          userText: addTodo,
          id: Math.random() * 100,
        },
      });
      setDisabled(true);
      setAddTodo('');
    }
  }
  // const todos = useSelector(state => state.todos);

  return (
    <SafeAreaView style={styles.container}>
      <RetBar style={styles.retBar} navigation={navigation} />
      <View style={styles.textInput}>
        <TextInput
          type="text"
          value={addTodo}
          onChange={AddChangeHandler}
          style={styles.input}
          placeholder="Текст новой задачи"
        />
        <FlatButton
          text="Добавить"
          style={isDisabled ? styles.addButton : styles.addButtonDisabled}
          textStyle={styles.addButtonText}
          onPress={AddClick}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  retBar: {
    marginTop: 55,
  },
  textInput: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    width: 334,
    height: 44,
    marginBottom: 16,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 8,
    paddingLeft: 13,
  },
  addButton: {
    width: 334,
    height: 44,
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: '#222F3E',
  },
  addButtonDisabled: {
    width: 334,
    height: 44,
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: '#222F3E',
    opacity: 0.6,
  },
  addButtonText: {
    width: 111,
    height: 28,
    left: 110,
    fontSize: 24,
    color: '#FFFFFF',
  },
  select: {
    backgroundColor: 'pink',
  },
  selected: {
    textDecoration: 'line-through',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddTodoInput;
