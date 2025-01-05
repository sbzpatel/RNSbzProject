import { View, Text, StyleSheet, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import notifee, { AndroidStyle } from '@notifee/react-native'

const MyNotification = () => {
    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = () => {
        console.log("handleRefresh calling...");

        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false);
        }, 3000);
    }

    async function onDisplayNotification() {
        // Request permissions (required for iOS)
        await notifee.requestPermission()

        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
            id: 'default',
            name: 'Default Channel',
        });

        // Display a notification
        await notifee.displayNotification({
            title: 'Sbz Notification',
            body: 'Sbz notify you through his application',
            android: {
                channelId,
                // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
                // pressAction is needed if you want the notification to open the app when pressed
                pressAction: {
                    id: 'default',
                },
                style: { type: AndroidStyle.BIGPICTURE, picture: 'https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blta1fa5a00559c5247/6668d5f934f06610e59987fa/Sunflower_care_hero.jpg?q=70&width=1200&auto=webp' }
            },
        });
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                    colors={["red", "green", "blue"]}
                />
            }
        >
            <Text style={styles.heading}>React Native Notification</Text>

            <TouchableOpacity
                style={{ width: "100%" }}
                onPress={onDisplayNotification}
            >
                <Text style={styles.button}>Get Notification1</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ width: "100%" }}
                onPress={onDisplayNotification}
            >
                <Text style={styles.button}>Get Notification2</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ width: "100%" }}
                onPress={onDisplayNotification}
            >
                <Text style={styles.button}>Get Notification3</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ width: "100%" }}
                onPress={onDisplayNotification}
            >
                <Text style={styles.button}>Get Notification4</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ width: "100%" }}
                onPress={onDisplayNotification}
            >
                <Text style={styles.button}>Get Notification5</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ width: "100%" }}
                onPress={onDisplayNotification}
            >
                <Text style={styles.button}>Get Notification6</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ width: "100%" }}
                onPress={onDisplayNotification}
            >
                <Text style={styles.button}>Get Notification7</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ width: "100%" }}
                onPress={onDisplayNotification}
            >
                <Text style={styles.button}>Get Notification8</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ width: "100%" }}
                onPress={onDisplayNotification}
            >
                <Text style={styles.button}>Get Notification9</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ width: "100%" }}
                onPress={onDisplayNotification}
            >
                <Text style={styles.button}>Get Notification10</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ width: "100%" }}
                onPress={onDisplayNotification}
            >
                <Text style={styles.button}>Get Notification11</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ width: "100%" }}
                onPress={onDisplayNotification}
            >
                <Text style={styles.button}>Get Notification12</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    heading: {
        fontSize: 30,
        color: "green",
        textAlign: "center",
        marginTop: 40
    },
    button: {
        backgroundColor: "black",
        color: "white",
        padding: 15,
        margin: 15,
        borderRadius: 7,
        textAlign: "center",
        fontSize: 22
    }
})

export default MyNotification