import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#162447"
    },
    logo: {
        flex: 1,
        width: 200,
        height: 200,
        alignSelf: "center",
        margin: 60,
        top: 20,
        
      },

      usernameInput: {
        height: 48,
        width: 255,
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
        alignSelf: "center",
      },

      password: {
        height: 48,
        width: 255,
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
        alignSelf: "center",
      },

      register: {
          top: 20,
        color: "#fff",
        alignSelf: 'center'
      },

      appButtonContainer: {
        backgroundColor: "#1F4068",
        width: 250,
        height: 55,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 40,
        alignSelf: 'center',
    },

    appButtonText: {
        top: 7,
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",

    },
})