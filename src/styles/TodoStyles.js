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

    titleStyle: {
        fontWeight: 'bold',
        color: '#90EE90',
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

    completedText: {
        color: "white", // Makes the text white
        fontSize: 14,
        flexWrap: 'wrap', // Allow wrapping of the text
        width: '100%',    // Ensure it occupies the available space
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
        textAlignVertical: 'top',  // Aligns text to the top
        minHeight: 60,  // Sets a minimum height
        maxHeight: 200, // Prevents it from growing too large
        overflow: 'hidden',
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
        flexWrap: 'wrap', // Ensure text wraps properly
        overflow: 'hidden', // Prevent text overflow
        width: '100%', // Ensure it takes up the full width available
    },

    iconWrapper: {
        flexDirection: "row",
        gap: 15,
    },

    icon: {
        fontSize: 24,
        color: "#00E67A",
    },

    titleLarge: {
        fontSize: 24,
        color: "#00FF7F",
    },

    searchContainer: {
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        color: '#333',
    }
});

export default toDoStyles;