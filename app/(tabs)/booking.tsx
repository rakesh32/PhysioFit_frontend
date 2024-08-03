import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Alert, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';

interface Doctor {
    id: number;
    name: string;
    specialty: string;
}

const doctors: Doctor[] = [
    { id: 1, name: 'Dr. John Doe', specialty: 'Cardiology' },
    { id: 2, name: 'Dr. Jane Smith', specialty: 'Dermatology' },
    { id: 3, name: 'Dr. David Johnson', specialty: 'Orthopedics' },
    // Add more doctors here
];

interface DoctorCardProps extends Doctor {
    onPress: () => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ name, specialty, onPress }) => {
    return (
        <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
            <Image source={require('@/assets/images/favicon.png')} style={styles.image} />
            <View>
                <Text style={styles.doctorName}>{name}</Text>
                <Text style={styles.specialty}>{specialty}</Text>
            </View>
        </TouchableOpacity>
    );
};

const Booking: React.FC = () => {
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [selectedSlot, setSelectedSlot] = useState<string>('');

    const handleDoctorClick = (doctor: Doctor) => {
        setSelectedDoctor(doctor);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedDoctor(null);
        setSelectedDate('');
        setSelectedSlot('');
    };

    const validateDate = (dateString: string) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD format
        return regex.test(dateString) && !isNaN(new Date(dateString).getTime());
    };

    const handleBooking = () => {
        if (!selectedDate || !selectedSlot) {
            Alert.alert('Error', 'Please enter both date and slot');
            return;
        }

        if (!validateDate(selectedDate)) {
            Alert.alert('Error', 'Please enter a valid date in YYYY-MM-DD format');
            return;
        }

        const date = new Date(selectedDate);

        if (date < new Date()) {
            Alert.alert('Error', 'The date must be in the future');
            return;
        }

        Alert.alert(
            'Booking Confirmed',
            `You have booked an appointment with ${selectedDoctor?.name} on ${date.toDateString()} during the ${selectedSlot} slot.`
        );
        closeModal();
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.content}>
                {doctors.map((doctor) => (
                    <DoctorCard key={doctor.id} {...doctor} onPress={() => handleDoctorClick(doctor)} />
                ))}
            </View>
            <Modal isVisible={isModalVisible} onBackdropPress={closeModal}>
                <View style={styles.modalContent}>
                    {selectedDoctor && (
                        <>
                            <Text style={styles.modalTitle}>Book an Appointment</Text>
                            <Text style={styles.modalText}>Doctor: {selectedDoctor.name}</Text>
                            <Text style={styles.modalText}>Specialty: {selectedDoctor.specialty}</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Date (YYYY-MM-DD)"
                                value={selectedDate}
                                onChangeText={setSelectedDate}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Slot (e.g., Morning, Afternoon, Evening)"
                                value={selectedSlot}
                                onChangeText={setSelectedSlot}
                            />
                            <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
                                <Text style={styles.bookButtonText}>Book Appointment</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
    },
    content: {
        paddingBottom: 16,
    },
    doctorName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    specialty: {
        fontSize: 16,
        color: 'gray',
    },
    cardContainer: {
        backgroundColor: 'white',
        padding: 16,
        marginBottom: 16,
        borderRadius: 8,
        elevation: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 16,
        borderRadius: 25,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
        width: '80%',
        paddingHorizontal: 8,
        marginBottom: 20,
    },
    bookButton: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
    },
    bookButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default Booking;
