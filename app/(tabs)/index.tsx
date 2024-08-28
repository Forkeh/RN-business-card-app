import { StatusBar } from "expo-status-bar";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Page() {
    function buttonPress() {
        Alert.alert("Hello there!");
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../../assets/LEGO_logo.png")} />
            <Text style={styles.textCompany}>LEGO A/S!</Text>
            <View style={styles.center}>
                <TouchableOpacity onPress={buttonPress}>
                    <Text style={styles.textName}>Brian Blume</Text>
                </TouchableOpacity>
                <Text>Softwareudvikler</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        // justifyContent: "center",
        padding: 50,
        gap: 50,
    },
    textName: {
        color: "red",
        fontSize: 30,
        fontStyle: "italic",
        fontWeight: "800",
    },
    textCompany: {
        color: "black",
        fontStyle: "italic",
        fontWeight: "800",
        fontSize: 30,
    },
    center: {
        alignItems: "center",
    },
    logo: {
        width: 250,
        height: 250,
    },
});
