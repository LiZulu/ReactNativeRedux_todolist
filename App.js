import React, { useState } from 'react';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import { View, Text, StyleSheet, TextInput, Button }  from 'react-native';
import todo from './src/styles/Todo'
import rootReducer from './src/reducer/rootReducer';
import toDoStyles from './src/styles/TodoStyles'; // Import the styles
import { TouchableOpacity } from 'react-native';

const store = createStore(rootReducer, applyMiddleware(logger));

/* const App = () => (
  <Provider store={store}>
    <Todo />
  </Provider>
); */

function App() {

  const [isCompleteScreen, setIsCompleteScreen] = useState(false);

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
              <TouchableOpacity 
                style={toDoStyles.primaryBtn} 
                onPress={() => {}}>
                <Text 
                style={{ 
                  color: "#FFF", 
                  textAlign: "center" 
                }}> Add Task</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={toDoStyles.btnArea}> 
            <Button title="To Do"> Todo </Button>
            <TouchableOpacity style={toDoStyles.secondaryBtn} onPress={() => {}}>
              <Text style={{ color: "#FFF", textAlign: "center" }}> Todo </Text>
            </TouchableOpacity>

            <Button title="Completed"> Completed </Button>
            <TouchableOpacity style={toDoStyles.secondaryBtn} onPress={() => {}}>
              <Text style={{ color: "#FFF", textAlign: "center" }}> Completed </Text>
            </TouchableOpacity>
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