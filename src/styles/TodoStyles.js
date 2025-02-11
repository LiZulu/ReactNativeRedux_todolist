import { StyleSheet } from "react-native";

const toDoStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1e1e1e", // Dark theme background
        padding: 20,
        justifyContent: "center",
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#FFF",
        textAlign: "center",
        marginBottom: 20,
    },

    todoWrapper: {
        backgroundColor: "#2a2a2a",
        borderRadius: 15,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },

    todoInput: {
        marginBottom: 20,
        padding: 15,
        borderRadius: 10,
        backgroundColor: "#383838",
    },

    todoInputItem: {
        marginBottom: 15,
    },

    label: {
        fontSize: 16,
        fontWeight: "600",
        color: "#FFF",
        marginBottom: 5,
    },

    input: {
        backgroundColor: "#FFF",
        padding: 12,
        borderRadius: 10,
        fontSize: 16,
        borderWidth: 2, // Default border width
        borderColor: "#383838", // Default border color (invisible)
    },

    btnArea: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10, // Adjust spacing between buttons (or use marginRight)
        marginTop: 15,
        marginBottom: 20,
    },

    primaryBtn: {
        backgroundColor: "#00E67A",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#00E67A",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        elevation: 5,
    },

    secondaryBtn: {
        backgroundColor: "#505050",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#505050",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        elevation: 5,
    },

    toDoListItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#383838",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        elevation: 4,
    },

    textContainer: {
        flex: 1,
    },

    toDoListText: {
        fontSize: 16,
        color: "#FFF",
    },

    iconWrapper: {
        flexDirection: "row",
        gap: 15,
    },

    icon: {
        fontSize: 24,
        color: "#00E67A",
    },
});

export default toDoStyles;