import { StyleSheet } from "react-native";

const toDoStyles = StyleSheet.create({
    body: {
        color: "#FFFFFF",
        overflow: 'hidden',
    },

    todoWrapper: {
        backgroundColor: '#353434',
        padding: '35%',
        alignSelf: 'auto',
        marginHorizontal: 'auto',
        marginTop: '3%',
        overflow: 'scroll',
        boxShadow: '0px 5px 7px rgb(27, 27, 27)'
    },
    
    todoInput: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(78, 78, 78)',
        paddingBottom: 25,
        marginBottom: 25,
    },
    
    todoInputItem: 
    {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginRight: 25,
    },
    
    todoInputItem.label: 
    {
        fontSize: 17,
        fontWeight: 'bold',
        paddingBottom: 7,
    },
    
    todoInputItem input: 
    {
        width: 250,
        paddingBottom: 7,
        borderWidth: 1,
        borderRadius: 2,
        paddingHorizontal: 10,
        marginTop: 5,
        backgroundColor: '#FFF',
    },

    todoInputItem input:focus:
    {
        outline: none;
    },
});

export default toDoStyles