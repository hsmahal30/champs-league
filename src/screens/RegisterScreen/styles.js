import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#162447"

    },

    input: {
        backgroundColor: "#fff",
        paddingLeft: 20,
        top: 100,
        margin: 10,
        width: 250,
        height: 48,
        borderRadius: 20,
        alignSelf: 'center',
    },

    password: {
      backgroundColor: "#fff",
        paddingLeft: 20,
        top: 50,
        margin: 10,
        width: 250,
        height: 55,
        borderRadius: 20,
        alignSelf: 'center',
    },

    // register: {
    //     top: 20,
    //   color: "#fff",
    // },

  appButtonContainer: {
       backgroundColor: "#1F4068",
        width: 250,
        height: 55,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 150,
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