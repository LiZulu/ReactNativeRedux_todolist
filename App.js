import React, { useState } from 'react';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import { View, Text, StyleSheet, TextInput, TouchableOpacity  }  from 'react-native';
import todo from './src/styles/Todo'
import rootReducer from './src/reducer/rootReducer';
import toDoStyles from './src/styles/TodoStyles'; // Import the styles

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
  const [ isCompleteScreen, setIsCompleteScreen ] = useState(false);
  const [ allTodos, setTodos ] = useState([]);
  const [ newTitle, setNewTitle ] = useState("");
  const [ newDescription, setNewDescription ] = useState("");
  const [ isHovered, setIsHovered ] = useState({ delete: false, check: false });
  const [ titleFocused, setTitleFocused ] = useState(false);
  const [descriptionFocused, setDescriptionFocused] = useState(false);

  const handleAddTask = () => {
    if (!newTitle || !newDescription) {
      alert("Please enter both title and description");
      return;
    }
  
    setTodos([...allTodos, { title: newTitle, description: newDescription }]);
  
    setNewTitle(""); // Clear input after adding task
    setNewDescription("");
  };
  
  return (
    <Provider store={store}>
        <View style={toDoStyles.container}>
            <Text style={toDoStyles.title}> My Todo </Text>
            
            <View style={toDoStyles.todoWrapper}>
                {/* Task Input */}
                <View style={toDoStyles.todoInput}>
                    <View style={toDoStyles.todoInputItem}>
                        <Text style={toDoStyles.label}>Title</Text>
                        <TextInput style={toDoStyles.input} value={newTitle} onChangeText={(text) => setNewTitle(text)} placeholder="What is the task title?" placeholderTextColor="#999" />
                    </View>

                    <View style={toDoStyles.todoInputItem}>
                        <Text style={toDoStyles.label}>Description</Text>
                        <TextInput style={toDoStyles.input} value={newDescription} onChangeText={(text) => setNewDescription(text)} placeholder="Describe the task..." placeholderTextColor="#999" />
                    </View>

                    <TouchableOpacity style={toDoStyles.primaryBtn} onPress={handleAddTask}>
                        <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "600" }}> Add Task</Text>
                    </TouchableOpacity>
                </View>

                {/* Task List */}
                {/* <View style={toDoStyles.toDoList}>
                    <View style={toDoStyles.textContainer}>
                        <Text style={toDoStyles.toDoListText}> Task 1 </Text>
                        <Text style={toDoStyles.toDoListText}> Description </Text>
                    </View>

                    <View style={toDoStyles.iconWrapper}>
                        <TouchableOpacity
                            onPressIn={() => setIsHovered({ ...isHovered, delete: true })}
                            onPressOut={() => setIsHovered({ ...isHovered, delete: false })}
                        >
                
                            <MaterialIcons
                                name="delete"
                                size={24}
                                color={isHovered.delete ? "red" : "white"}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPressIn={() => setIsHovered({ ...isHovered, check: true })}
                            onPressOut={() => setIsHovered({ ...isHovered, check: false })}
                        >
                            <FontAwesome
                            name="check"
                            size={24}
                            color={isHovered.check ? "white" : "green"}
                            />
                        </TouchableOpacity>
                    </View>
                </View> */}

                <View style={toDoStyles.btnArea}>
                    <TouchableOpacity
                        style={[toDoStyles.secondaryBtn, !isCompleteScreen && toDoStyles.active]}
                        onPress={() => setIsCompleteScreen(false)}> 
                        <Text style={toDoStyles.btnText}>ToDo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[toDoStyles.secondaryBtn, isCompleteScreen && toDoStyles.active]}
                        onPress={() => setIsCompleteScreen(true)}>
                        <Text style={toDoStyles.btnText}>Completed</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    {allTodos.map((item, index) => (
                    <View key={index} style={toDoStyles.toDoListItem}>
                        <Text style={toDoStyles.toDoListText}>{item.title}</Text>
                        <Text style={toDoStyles.toDoListText}>{item.description}</Text>
                    </View>
                ))}
                </View>
            </View>
        </View>
    </Provider>
  );
}

export default App;