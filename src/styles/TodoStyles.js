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
    
    label: 
    {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#FFF',
        paddingBottom: 7,
        marginTop: 10,
    },
    
    input: 
    {
        width: 250,
        borderWidth: 1,
        borderRadius: 2,
        paddingHorizontal: 10,
        marginTop: 5,
        backgroundColor: '#FFF',
    },

    btnArea: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 15,
    },

    todoList: {
        marginTop: 20,
    },

    toDoListItem: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
    },

    primaryBtn: {
        backgroundColor: "rgb(0, 230, 122)",
        color: '#FFF',
        borderWidth: 0, // Replaced invalid `border: none`
        borderRadius: 5,
        width: 160,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        margin: 20,
    },

    secondaryBtn: {
        backgroundColor: "rgb(71, 71, 71)",
        color: '#FFF',
        borderWidth: 0, // Replaced invalid `border: none`
        borderRadius: 5,
        width: 160,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        margin: 20,
    }
});

export default toDoStyles 