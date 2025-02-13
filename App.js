import React, { useState, useEffect } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

const store = createStore(rootReducer, applyMiddleware(logger));

/* const App = () => (
  <Provider store={store}>
    <Todo />
  </Provider>
); */

function App() {
  const [ isCompleteScreen, setIsCompleteScreen ] = useState(false);
  const [ allTodos, setTodos ] = useState([]);
  const [ newTitle, setNewTitle ] = useState('');
  const [ newDescription, setNewDescription ] = useState('');
  const [ completedTodos, setCompletedTodos ] = useState([]);
  const [ isHovered, setIsHovered ] = useState({ delete: false, check: false });
  const [ titleFocused, setTitleFocused ] = useState(false);
  const [descriptionFocused, setDescriptionFocused] = useState(false);
  const [clickedTitles, setClickedTitles] = useState({});
  
  const [editingIndex, setEditingIndex] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const handleAddTodo = async () => {
    if (!newTitle || !newDescription) {
        alert("Please enter both title and description");
        return;
    }

    let newTodoItem = {
        title: newTitle,
        description: newDescription,
    };

    let updatedTodoArr = [...allTodos, newTodoItem];

    // Save to AsyncStorage first
    try {
        await AsyncStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
        console.log("Updated Todos saved to AsyncStorage:", updatedTodoArr); // Debugging Step
    } catch (error) {
        console.log("Error saving to AsyncStorage", error);
    }

    // Then update state
    setTodos(updatedTodoArr);

    // Clear inputs
    setNewTitle("");
    setNewDescription("");
};

const handleEditTodo = (index) => {
    setEditingIndex(index);
    setEditTitle(allTodos[index].title);
    setEditDescription(allTodos[index].description);
};

const handleUpdateTodo = async () => {
    if (editingIndex === null) return;

    let updatedTodos = [...allTodos];
    updatedTodos[editingIndex] = { title: editTitle, description: editDescription };

    // Save to AsyncStorage
    await AsyncStorage.setItem('todolist', JSON.stringify(updatedTodos));

    setTodos(updatedTodos);
    setEditingIndex(null);
    setEditTitle('');
    setEditDescription('');
};

useEffect(() => {
    console.log("Updated Todos after state update:", allTodos);
}, [allTodos]);  // Logs after state has been updated
  const handleDeleteTodo = async (index) => {
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index, 1);

    await AsyncStorage.setItem ('todolist', JSON.stringify (reducedTodo));
    setTodos (reducedTodo);
  }

  const handleComplete = async (index) => {
    let now = new Date();
    let completedOn = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()} at ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    let completedTask = { ...allTodos[index], completedOn };

    let updatedTodos = allTodos.filter((_, i) => i !== index);
    let updatedCompleted = [...completedTodos, completedTask];
   
    let filteredItem = {
        ...allTodos[index],
        completedOn:completedOn
    }

    let updatedCompletedArr = [...completedTodos];
    updatedCompletedArr.push(filteredItem);
    setCompletedTodos(updatedCompletedArr);

    setTodos(updatedTodos);
    setCompletedTodos(updatedCompleted);

    await AsyncStorage.setItem('todolist', JSON.stringify(updatedTodos));
    await AsyncStorage.setItem('completedTodos', JSON.stringify(updatedCompleted));
  }

  useEffect(() => {
    const loadTodos = async () => {
        try {
            const savedTodos = await AsyncStorage.getItem("todolist");
            const savedCompletedTodo = await AsyncStorage.getItem("completedTodos");
            if (savedTodos) setTodos(JSON.parse(savedTodos));
            if (savedCompletedTodo) setCompletedTodos(JSON.parse(savedCompletedTodo));
        } catch (error) {
            console.log("Error loading AsyncStorage", error);
        }
    };
    loadTodos();
}, []);

  return (
    <Provider store={store}>
        <View style={toDoStyles.container}>
            <Text style={toDoStyles.title}> My Todo </Text>
            
            <View style={toDoStyles.todoWrapper}>
                {/* Task Input */}
                <View style={toDoStyles.todoInput}>
                    <View style={toDoStyles.todoInputItem}>
                        <Text style={toDoStyles.label}>Title</Text>
                        <TextInput 
                            style = {toDoStyles.input} 
                            value = {editingIndex !== null ? editTitle : newTitle}
                            onChangeText = {(text) => editingIndex !== null ? setEditTitle(text) : setNewTitle(text)}
                            placeholder = "What is the task title?" 
                            placeholderTextColor = "#999" />
                    </View>

                    <View style={toDoStyles.todoInputItem}>
                        <Text style={toDoStyles.label}>Description</Text>
                        <TextInput 
                            style={toDoStyles.input} 
                            value={editingIndex !== null ? editDescription : newDescription} 
                            onChangeText={(text) => editingIndex !== null ? setEditDescription(text) : setNewDescription(text)}
                            placeholder="Describe the task..." 
                            placeholderTextColor="#999" 
                            multiline = {true} 
                            numberOfLines = {5} />
                    </View>

                    <TouchableOpacity style={toDoStyles.primaryBtn} onPress={editingIndex !== null ? handleUpdateTodo : handleAddTodo}>
                        <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "600" }}>
                            {editingIndex !== null ? "Update Task" : "Add Task"}
                        </Text>
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
                        style={[toDoStyles.secondaryBtn, 
                            !isCompleteScreen && { backgroundColor: 'green'}]}
                        onPress={() => setIsCompleteScreen(false)}> 
                        <Text style={toDoStyles.btnText}>ToDo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[toDoStyles.secondaryBtn, 
                            isCompleteScreen && { backgroundColor: 'green' }]}
                        onPress={() => setIsCompleteScreen(true)}>
                        <Text style={toDoStyles.btnText}>Completed</Text>
                    </TouchableOpacity>
                </View>

                <View>
                {(isCompleteScreen ? completedTodos : allTodos).map((item, index) => (
                    <View key={index} style={toDoStyles.toDoListItem}>
                        <Text style={[toDoStyles.toDoListText, toDoStyles.titleStyle, { flexWrap: 'wrap', width: '16%' }]}>{item.title}</Text>
                        <View style={{ flexWrap: 'wrap', width: '53%' }}>
                            <Text style={[toDoStyles.toDoListText, {flexWrap: 'wrap', overflow: 'hidden'}]}>{item.description}</Text>
                            {isCompleteScreen && (
                                <Text style={[toDoStyles.completedText, { marginTop: 5 }]}>Completed on: {item.completedOn}</Text>
                            )}
                        </View>
                        
                        {/* Right Side: Icons */}
                        <View style={toDoStyles.iconWrapper}>
                            <TouchableOpacity
                                onPressIn={() => setIsHovered({ ...isHovered, delete: true })}
                                onPressOut={() => setIsHovered({ ...isHovered, delete: false })} >
                            
                                <MaterialIcons
                                    name="delete"
                                    size={24}
                                    color={isHovered.delete ? "rgb(255, 36, 0)" : "white"}
                                    onPress={() => handleDeleteTodo(index)} />
                            </TouchableOpacity>

                            <TouchableOpacity>
                            
                            <MaterialIcons
                                    name="edit"
                                    size={24}
                                    color="rgb(0, 150, 255)"
                                    onPress={() => handleEditTodo(index)}
                                />
                            </TouchableOpacity>


                            <TouchableOpacity
                                onPressIn={() => setIsHovered({ ...isHovered, check: true })}
                                    onPressOut={() => setIsHovered({ ...isHovered, check: false })}
                                >
                                    {!isCompleteScreen && (
                                        <FontAwesome
                                            name="check"
                                            size={24}
                                            color={isHovered.check ? "white" : "rgb(144, 238, 144)"}
                                            onPress={() => handleComplete(index)}
                                        />
                                    )}
                            </TouchableOpacity>
                        </View>
                    </View>
                    ))}
                </View>
            </View>
        </View>
    </Provider>
  );
}

export default App;