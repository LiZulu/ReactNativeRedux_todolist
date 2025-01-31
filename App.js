import React from 'react';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import { View, Text, StyleSheet, TextInput, Button }  from 'react-native';
import todo from './src/styles/Todo'
import rootReducer from './src/reducer/rootReducer';
import toDoStyles from './src/styles/TodoStylesv1'; // Import the styles

const store = createStore(rootReducer, applyMiddleware(logger));

/* const App = () => (
  <Provider store={store}>
    <Todo />
  </Provider>
); */

function App() {
  return (
    <Provider store={store}>
      <View style={toDoStyles.container}> 
        <Text style={toDoStyles.title}> My Todo </Text> 
         
        <View style={toDoStyles.todoWrapper}> 
          <View style={toDoStyles.todoInput}>
            <View style={toDoStyles.todoInputItem}>
              <Text style={toDoStyles.label}>Title</Text>
              <TextInput style={toDoStyles.input} placeholder="What is the task title?" />
            </View>
            
            <View style={toDoStyles.todoInputItem}>
              <Text style={toDoStyles.label}>Description</Text>
              <TextInput style={toDoStyles.input} placeholder="Describe the task..." />
            </View>

            <View style={toDoStyles.todoInputItem}>
              <Button title="Add Task" onPress={() => {}} />
            </View>
          </View>

          <View style={toDoStyles.btnArea}> 
            <Button title="To Do"> Todo </Button>
            <Button title="Completed"> Completed </Button>
          </View>

          <View style={toDoStyles.todoList}> 

            <View style={toDoStyles.toDoListItem}>
              <Text> Task 1 </Text>
              <Text> Description </Text>
            </View>

          </View>
        </View>  
      </View>
    </Provider>
  )
}

export default App;