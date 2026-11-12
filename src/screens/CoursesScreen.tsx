import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

const courses = [
    { id: '1', title: 'Digital Marketing' },
    { id: '2', title: 'Design Learning' },
    { id: '3', title: 'Atifical Intelligence' },
    { id: '4', title: 'Sfotware Managment' },
    { id: '5', title: 'Digital Logical Thoughts' },
    { id: '6', title: 'Web 3.0' },
    { id: '7', title: 'Calculas' },
    { id: '8', title: 'Physics' },
    { id: '9', title: 'Mathematics' },
];

export default function CoursesScreen({ onTab }: any) {
    const [search, setSearch] = useState('');

    const filtered = courses.filter((c) =>
        c.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <ScrollView 
                showsVerticalScrollIndicator={false} 
                contentContainerStyle = {{ paddingBottom: 100}}
            >
                <View style={styles.headerRow}>
                    <View style={{ width: 24 }}/>
                    <Text style={styles.header}>
                        Courses
                    </Text>

                    <TouchableOpacity>
                        <EvilIcons name ="bell" size={28} color="#999" />
                    </TouchableOpacity>
                </View>

                <View style={styles.searchBox}>
                    <Feather name="search" size={18} color="#AAA" />
                    <TextInput
                         style={styles.searchInput}
                         placeholder="Search"
                         placeholderTextColor="AAA"
                         value={search}
                         onChangeText={setSearch} 
                    />
                </View>

                {filtered.map((c) => (
                    <TouchableOpacity key={c.id} style={styles.courseCard}>
                        <Text style={styles.courseTitle}>
                            {c.title}
                        </Text>
                        <Entypo name="chevron-right" size={20} color={"#CCC"} />
                    </TouchableOpacity>
                ))}

                {filtered.length === 0 && (
                    <Text style={styles.empty}>
                        Ешнәрсе табылмады
                    </Text>
                )}
            </ScrollView>

            <View style={styles.bottom}>
                <TouchableOpacity style={styles.bottomItem} onPress={() => onTab?.('home')}>
                    <Feather name="home" size={24} color="black" />
                    <Text style={styles.bottomLabel}>
                        Home
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bottomItem}>
                    <Feather name="folder" size={24} color="black" />
                    <Text style={[styles.bottomLabel, styles.bottomActive]}>
                        Courses
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bottomItem}>
                    <EvilIcons name="calendar" size={24} color="black" />
                    <Text style={styles.bottomLabel}>
                        Shedule
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bottomItem}>
                    <Entypo name="graduation-cap" size={24} color="black" />
                    <Text style={styles.bottomLabel}>
                        Result
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bottomItem}>
                    <AntDesign name="user" size={24} color="#666" />
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
        backgroundColor: '#fff',
        paddingHorizontal: 18,
        paddingTop: 55, 
    },

    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 18,
    },

    header: {
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
    },

    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#EFEFEF',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginBottom: 18,
        backgroundColor: '#fff',
        elevation: 1,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
    },

    searchInput: {
        flex: 1,
        marginLeft: 8,
        fontSize: 15,
        color: '#333',
    },

    courseCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#EFEFEF',
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginBottom: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 6,
    },

    courseTitle: {
        fontSize: 15,
        fontWeight: '700',
        color: '#333',
    },

    empty: {
        textAlign: 'center',
        color: '#999',
        marginTop: 20,
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
        color: '#A6488C',
        fontWeight: '700',
    },
});