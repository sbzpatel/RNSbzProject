import { StyleSheet } from "react-native";

export default StyleSheet.create({
    heading: {
        fontSize: 30, 
        color: "green",
        alignSelf: "center",
        marginBottom: 20,
        marginTop: 25,
        textShadowColor: "#84f58a",
        shadowOpacity: 0.8,
        textShadowOffset: {
            width: 0.8,
            height: 0.8
        },
        textShadowRadius: 1,                                                       
        elevation: 10
    },
    data: {
        fontSize: 22,
        paddingLeft: 10,
        fontWeight: 200, 
        color: "black"
    }, 
    textInput: {
        backgroundColor: "white",
        paddingLeft: 10,
        margin: 10,
        borderRadius: 5,
        borderWidth: 2,
        fontSize: 18,
        color: "brown"
    },
    buttonContainer: {
     margin: 15  
    },
    platformDisplay: {
        position:"absolute",
        top: 0,
        bottom: 0,
    },
    tinyLogo: {
        width: 50,
        height: 50,
        alignSelf: "center",
        marginBottom: 5,
        marginTop: 5
    },
    customBtn: {
        textAlign: "center",
        color: "#fff",
        margin: 15,
        padding: 15,
        fontSize: 22,
        borderRadius: 5,
        shadowColor: "skyblue",
        elevation: 0.4,
        shadowOffset: {
            width: 10,
            height: 10
        }
    },
    modalWrapper: {
        flex:1, 
        backgroundColor: "#dddce0", 
        alignItems:"center", 
        justifyContent:"center"
    },
    modalView: {
        flexDirection:"column", 
        backgroundColor: "white", 
        height: 170, 
        width: "90%", 
        padding:15, 
        justifyContent:"space-between",
        borderRadius: 7
    },
    modalText: {
        textAlign:"center", 
        fontSize:34,
        color: "#bbb",
        marginTop: 7
    },
    fadingContainer: {
        padding: 20, 
        backgroundColor: "powderblue",
        margin: 15
    },
    fadingText: {
        fontSize: 28
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})