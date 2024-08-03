import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';

// Dummy data for registered users
const users = [
    { id: 1, name: 'Chaitanya', userId: 'chaitanya123' },
    { id: 2, name: 'Rupasri', userId: 'rupasri456' },
    { id: 3, name: 'Sanjana', userId: 'sanjana789' },
    { id: 4, name: 'Rakesh', userId: 'rakesh101' },
    { id: 5, name: 'Hima Shankar', userId: 'himashankar102' },
    { id: 6, name: 'Venkatesh', userId: 'venkatesh103' },
    { id: 7, name: 'Lakshmi', userId: 'lakshmi104' },
    { id: 8, name: 'Sravanthi', userId: 'sravanthi105' },
    { id: 9, name: 'Nikhil', userId: 'nikhil106' },
    { id: 10, name: 'Pavani', userId: 'pavani107' },
    { id: 11, name: 'Sudeep', userId: 'sudeep108' },
    { id: 12, name: 'Bhavana', userId: 'bhavana109' },
    { id: 13, name: 'Rohit', userId: 'rohit110' },
    { id: 14, name: 'Anjali', userId: 'anjali111' },
    { id: 15, name: 'Pradeep', userId: 'pradeep112' },
    { id: 16, name: 'Swathi', userId: 'swathi113' },
    { id: 17, name: 'Arjun', userId: 'arjun114' },
    { id: 18, name: 'Meghana', userId: 'meghana115' },
    { id: 19, name: 'Kiran', userId: 'kiran116' },
    { id: 20, name: 'Divya', userId: 'divya117' },
    { id: 21, name: 'Rajesh', userId: 'rajesh118' },
    { id: 22, name: 'Priya', userId: 'priya119' },
    { id: 23, name: 'Vishnu', userId: 'vishnu120' },
    { id: 24, name: 'Madhavi', userId: 'madhavi121' },
    { id: 25, name: 'Ravi', userId: 'ravi122' },
    { id: 26, name: 'Sailaja', userId: 'sailaja123' },
    // Add more users here if needed
];

const ConnectWithFriends: React.FC = () => {
    const [friendUserId, setFriendUserId] = useState<string>('');
    const [friendList, setFriendList] = useState<string[]>([]);

    const handleAddFriend = () => {
        const friend = users.find(user => user.userId === friendUserId);

        if (friend) {
            if (friendList.includes(friend.userId)) {
                Alert.alert('Error', 'You are already friends with this user.');
            } else {
                setFriendList([...friendList, friend.userId]);
                Alert.alert('Success', "You are now friends with ${friend.name}!");
            }
        } else {
            Alert.alert('Error', 'User not found. Please check the UserID and try again.');
        }
        setFriendUserId('');
    };

    const renderRecommendedFriends = () => {
        return users
            .filter(user => !friendList.includes(user.userId))
            .slice(0, 10) // Showing only top 10 recommendations
            .map(user => (
                <TouchableOpacity key={user.id} style={styles.recommendationCard} onPress={() => setFriendUserId(user.userId)}>
                    <Text style={styles.recommendationText}>{user.name}</Text>
                    <Text style={styles.recommendationSubText}>@{user.userId}</Text>
                </TouchableOpacity>
            ));
    };

    const renderFriendList = () => {
        if (friendList.length === 0) {
            return (
                <View style={styles.emptyFriendList}>
                    <Text style={styles.sadSymbol}>😢</Text>
                    <Text style={styles.emptyFriendListText}>You have no friends yet. Add some friends!</Text>
                </View>
            );
        } else {
            return friendList.map(userId => {
                const friend = users.find(user => user.userId === userId);
                return (
                    <View key={userId} style={styles.friendCard}>
                        <Text style={styles.friendName}>{friend?.name}</Text>
                        <Text style={styles.friendUserId}>@{userId}</Text>
                    </View>
                );
            });
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Connect with Friends</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter UserID of your friend"
                value={friendUserId}
                onChangeText={setFriendUserId}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddFriend}>
                <Text style={styles.addButtonText}>Add Friend</Text>
            </TouchableOpacity>

            <Text style={styles.subtitle}>Recommended Friends</Text>
            {renderRecommendedFriends()}

            <Text style={styles.subtitle}>Your Friends</Text>
            {renderFriendList()}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    addButton: {
        backgroundColor: '#4CAF50',
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
    },
    addButtonText: {
        color: 'white',
        fontSize: 16,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 16,
    },
    recommendationCard: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 4,
        marginBottom: 12,
        elevation: 2,
    },
    recommendationText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    recommendationSubText: {
        fontSize: 14,
        color: 'gray',
    },
    emptyFriendList: {
        alignItems: 'center',
        marginVertical: 16,
    },
    sadSymbol: {
        fontSize: 48,
        marginBottom: 8,
    },
    emptyFriendListText: {
        fontSize: 18,
        color: 'gray',
    },
    friendCard: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 4,
        marginBottom: 12,
        elevation: 2,
    },
    friendName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    friendUserId: {
        fontSize: 14,
        color: 'gray',
    },
});

export default ConnectWithFriends;