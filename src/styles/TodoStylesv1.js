import { StyleSheet } from "react-native";

const toDoStyles = StyleSheet.create({
    body: {
        backgroundColor: "#1F1E1E",
        color: "FFFFFF",
        overflow: 'hidden',
    },

    todoWrapper: {
        backgroundColor: '#353434',
        padding: '2%',
        alignSelf: 'auto',
        marginHorizontal: 'auto',
        marginTop: '3%',
        overflow: 'scroll',
        boxShadow: '0px 5px 7px rgb(27, 27, 27)'
    },


  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  todoInput: {
    marginTop: 10,
  },
  todoInputItem: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
});

export default toDoStyles