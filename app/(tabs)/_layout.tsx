import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Brian",
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="male" color={color} />,
                }}
            />
            <Tabs.Screen
                name="ali"
                options={{
                    title: "Ali",
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="male" color={color} />,
                }}
            />
        </Tabs>
    );
}
