import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';

type Course = {
    id: string;
    name: string;
    grade: string;
    semester: string;
};

const courses: Course[] = [
    { id: '1', name: 'Digital Marketing', grade: 'A+', semester: 'S2023' },
    { id: '2', name: 'Design Learning', grade: 'B', semester: 'S2023' },
    { id: '3', name: 'Software Managment', grade: 'B+', semester: 'S2023' },
    { id: '4', name: 'Digital Logical Thoughts', grade: 'C', semester: 'S2023' },
    { id: '5', name: 'Artifical Inelligence', grade: 'F', semester: 'S2023' },
    { id: '6', name: 'Physics', grade: 'A+', semester: 'S2023' },
    { id: '7', name: 'Mathematics', grade: 'C+', semester: 'S2023' },
];

export default function ResultScreen({ onTab }: any) {
    const [semester, setSemester] = useState('S2023');

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
                <View style={styles.headerRow}>
                    <View style={{ width: 24 }} />
                    <Text style={styles.header}>
                        Grades: <Text style={styles.headerPink}>FinalGrades</Text>
                    </Text>

                    <TouchableOpacity>
                        <EvilIcons name="bell" size={28} color="#999" />
                    </TouchableOpacity>
                </View>

                <View style={styles.topRow}>
                    <View>
                        <Text style={styles.bold}>
                            Overall CGPA: <Text style={styles.gray}>4.00</Text>
                        </Text>
                        <Text style={[styles.bold, { marginTop: 6}]}>
                            Credits earned: <Text style={styles.gray}>50/150</Text>
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.semesterBtn} activeOpacity={0.7}>
                        <Text style={styles.semesterText}>Semester ⌄</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 18 }}>
                    {courses.map((c, index) => (
                        <View key={c.id} style={styles.card}>
                            <View style={styles.left}>
                                <Text style={styles.num}>
                                    {index + 1}
                                </Text>
                                <Text style={styles.courseName}>
                                    {c.name}
                                </Text>
                            </View>

                            <View style={styles.gradeBox}>
                                <Text style={styles.grade}>
                                    {c.grade}
                                </Text>
                                <Text style={styles.semester}>
                                    {c.semester}
                                </Text>
                            </View>
                        </View>
                        ))}
                </View>
            </ScrollView>

            <View style={styles.bottom}>
                <TouchableOpacity style={styles.bottomItem} onPress={() => onTab?.('home')}>
                    <Feather name="home" size={24} color="black" />
                    <Text style={styles.bottomLabel}>
                        Home
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bottomItem} onPress={() => onTab?.('courses')}>
                    <Feather name="folder" size={24} color="black" />
                    <Text style={styles.bottomLabel}>
                        Courses
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bottomItem} onPress={() => onTab?.('shedule')}>
                    <EvilIcons name="calendar" size={24} color="black" />
                    <Text style={styles.bottomLabel}>
                        Shedule
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bottomItem}>
                    <Entypo name="graduation-cap" size={24} color="black" />
                    <Text style={[styles.bottomLabel, styles.bottomActive]}> 
                        Result
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bottomItem} onPress={() => onTab?.('profile')}>
                    <AntDesign name="user" size={24} color="666" />
                    <Text style={styles.bottomLabel}>
                        Profile
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F8',
        paddingHorizontal: 18,
        paddingTop: 55,
    },

    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14,
    },

    header: {
        fontSize: 17,
        fontWeight: '700',
    },

    headerPink: {
        color: '#A64B8C',
    },

    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },

    bold: {
        fontSize: 13,
        fontWeight: '700',
    },

    gray: {
        fontWeight: '400',
        color: '#6B7280', 
    },

    semesterBtn: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#EFEFEF',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 7, 
    },

    semesterText: {
        fontSize: 11,
        color: '#9CA3AF',
    },

    card: {
        backgroundColor: '#F9F9FC',
        borderRadius: 12,
        flexDirection: 'row',
        overflow: 'hidden',
        marginBottom: 12,
        elevation: 1,
    },

    left: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        gap: 10,
    },

    num: {
        fontSize: 14,
        color: '#666',
    },

    courseName: {
        fontSize: 14,
        fontWeight: '500',
        flex: 1, 
    },

    gradeBox: {
        width: 85,
        backgroundColor: '#fff',
        borderLeftWidth: 1,
        borderLeftColor: '#EFEFEF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
    },

    grade: {
        fontSize: 14,
        fontWeight: '700',
        color: '#A64B8C',
    },

    semester: {
        fontSize: 12,
        color: '#9CA3AF',
    },

    bottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#EFEFEF',
        paddingVertical: 12,
        paddingBottom: 22,
        justifyContent: 'space-around', 
    },

    bottomItem: {
        alignItems: 'center',
    },

    bottomLabel: {
        fontSize: 11,
        color: '#666',
        marginTop: 3,
    },

    bottomActive: {
        color: '#A64B8C',
        fontWeight: '700',
    },
});