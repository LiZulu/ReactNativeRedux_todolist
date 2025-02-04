import React, { useState } from 'react';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import { View, Text, StyleSheet, TextInput, Button }  from 'react-native';
import todo from './src/styles/Todo'
import rootReducer from './src/reducer/rootReducer';
import toDoStyles from './src/styles/TodoStyles'; // Import the styles
import { TouchableOpacity } from 'react-native';

// Import React Native-compatible icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckIcon from 'react-native-vector-icons/FontAwesome';

const store = createStore(rootReducer, applyMiddleware(logger));

/* const App = () => (
  <Provider store={store}>
    <Todo />
  </Provider>
); */

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [isHovered, setIsHovered] = useState({ todo: false, completed: false });

  return (
    <Provider store={store}>
<View style={toDoStyles.container}>
    <Text style={toDoStyles.title}> My Todo </Text>

    <View style={toDoStyles.todoWrapper}>
        {/* Task Input */}
        <View style={toDoStyles.todoInput}>
            <View style={toDoStyles.todoInputItem}>
                <Text style={toDoStyles.label}>Title</Text>
                <TextInput style={toDoStyles.input} placeholder="What is the task title?" placeholderTextColor="#999" />
            </View>

            <View style={toDoStyles.todoInputItem}>
                <Text style={toDoStyles.label}>Description</Text>
                <TextInput style={toDoStyles.input} placeholder="Describe the task..." placeholderTextColor="#999" />
            </View>

            <TouchableOpacity style={toDoStyles.primaryBtn}>
                <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "600" }}> Add Task</Text>
            </TouchableOpacity>
        </View>

        {/* Task List */}
        <View style={toDoStyles.toDoListItem}>
            <View style={toDoStyles.textContainer}>
                <Text style={toDoStyles.toDoListText}> Task 1 </Text>
                <Text style={toDoStyles.toDoListText}> Description </Text>
            </View>

            <View style={toDoStyles.iconWrapper}>
                <MaterialIcons name="delete" size={24} color="red" />
                <FontAwesome name="check" size={24} color="green" />
            </View>
        </View>
    </View>
</View>
    </Provider>
  );
}

export default App;