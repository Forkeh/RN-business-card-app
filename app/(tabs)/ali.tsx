import { StatusBar } from "expo-status-bar";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Page() {
    function buttonPress() {
        Alert.alert("Hello there!");
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../../assets/A.P.-Møller-Mærsk-Logo.png")} />
            <Text style={styles.textCompany}>Mærsk A/S</Text>
            <View style={styles.center}>
                <TouchableOpacity onPress={buttonPress}>
                    <Text style={styles.textName}>Ali Mohammad</Text>
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
        width: 300,
        height: 300,
        objectFit: "contain",
    },
});
