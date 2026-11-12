import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';

const days = [
    { day: 'S', num: '04' },
    { day: 'S', num: '05' },
    { day: 'M', num: '06' },
    { day: 'T', num: '07' },
    { day: 'W', num: '08' },
    { day: 'T', num: '09' },
    { day: 'F', num: '10' },
];

const shedule = [
    {
        id: '1',
        start: '11:35',
        end: '13:05',
        title: 'Computer Science',
        subtitle: 'lecture 2: Data managment',
        room: 'Room 2 - 124',
        teacher: 'Mam Laiba Khalid',
        bg: '#B9E5B0',
        text: '#1ED1A',
    },
    {
        id: '2',
        start: '13:35',
        end: '14:45',
        title: 'Digital Marketing',
        subtitle: 'Lecture 3: Shopify Creation',
        room: 'Room 3A - G4',
        teacher: 'Mam Hira',
        bg: '#FFE98A',
        text: '#9A3B00',
    },
    {
        id: '3',
        start: '15:10',
        end: '16:40',
        title: 'Digital Marketing',
        subtitle: 'Lecture 3: Shopify Creation',
        room: 'Room 7B - 12',
        teacher: 'Mam Hira',
        bg: '#A8C8E8',
        text: '#FFFFFF',
    },
];

export default function SheduleScreen({ onTab }: any) {
    const [selected, setSelected] = useState('06');

    return (
        <View style={styles.container}>
            <ScrollView 
             showsVerticalScrollIndicator={false} 
             contentContainerStyle={{ paddingBottom: 100 }}
            >
                <View style={styles.headerRow}>
                    <View style={{ width: 24 }} />
                    <Text style={styles.header}>
                        Shedule
                    </Text>

                    <TouchableOpacity>
                        <EvilIcons name="bell" size={28} color="#999" />
                    </TouchableOpacity>
                </View>

                <View style={styles.dateRow}>
                    <Text style={styles.bigDate}>
                        06
                    </Text>
                    <View>
                        <Text style={styles.dayText}>
                            Mon
                        </Text>
                        <Text style={styles.dayText}>
                            July, 2024
                        </Text>
                    </View>
                </View>

                <View style={styles.weekRow}>
                    {days.map((d) => (
                        <TouchableOpacity
                           key={d.num}
                           onPress={() => setSelected(d.num)}
                           style={[styles.dayBox, selected === d.num && styles.dayActive]}
                        >
                            <Text style={[styles.dayLetter, selected === d.num && styles.dayActiveText]}>
                                {d.day}
                            </Text>
                            <Text style={[styles.dayNum, selected === d.num && styles.dayActiveText]}>
                                {d.num}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.tableHeader}>
                    <Text style={styles.colTime}>
                        Time
                    </Text>
                    <Text style={styles.colCourse}>
                        Courses
                    </Text>
                </View>

                {shedule.map((s) => (
                    <View key={s.id} style={styles.row}> 
                        <View style={styles.timeCol}> 
                            <Text style={styles.start}>
                                {s.start}
                            </Text>
                            <Text style={styles.end}>
                                {s.end}
                            </Text>
                        </View>

                        <View style={[styles.card, { backgroundColor: s.bg }]}>
                            <View> 
                                <Text style={[styles.cardTitle, {color: s.text }]}>
                                    {s.title}
                                </Text>
                                <Text style={[styles.cardSub, {color: s.text }]}>
                                    {s.subtitle}
                                </Text>
                            </View>
                            <Entypo name="dots-three-vertical" size={16} color={s.text} />
                        </View>

                        <View style={styles.cardBottom}> 
                            <View>
                                <Text style={[styles.meta, { color: s.text }]}>
                                    📍 {s.room}
                                </Text>
                                <Text style={[styles.meta, { color: s.text }]}>
                                    👩 {s.teacher}
                                </Text>
                            </View>
                            <EvilIcons name="bell" size={22} color={s.text} />
                        </View>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.bottom}>
                <TouchableOpacity style={styles.bottomItem} onPress={(() => onTab?.('home'))}>
                    <Feather name="home" size={24} color= "black" />
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

                <TouchableOpacity style={styles.bottomItem}>
                    <EvilIcons name="calendar" size={24} color="black" />
                    <Text style={[styles.bottomLabel, styles.bottomActive]}>
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
        marginBottom: 12,
    },

    header: {
        fontSize: 22,
        fontWeight: '700',
    },

    dateRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 14,
    },

    bigDate: {
        fontSize: 42,
        fontWeight: '800',
    },

    dayText: {
        fontSize: 14,
        color: '#666',
    },

    weekRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',
        paddingBottom: 12,
        marginBottom: 14,
    },

    dayBox: {
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 10,
    },

    dayActive: {
        backgroundColor: '#A64B8C',
    },

    dayLetter: {
        fontSize: 12,
        color: '#AAA',
    },

    dayNum: {
        fontSize: 16,
        fontWeight: '700',
    },

    dayActiveText: {
        color: '#fff',
    },

    tableHeader: {
        flexDirection: 'row', 
        marginBottom: 12,
    },

    colTime: {
        width: 60,
        color: '#AAA',
        fontSize: 14,
    },

    colCourse: {
        color: '#AAA',
        fontSize: 14,
        marginLeft: 12,
    },

    row: {
        flexDirection: 'row',
        marginBottom: 16,
    },

    timeCol: {
        width: 60,
        paddingTop: 4,
    },

    start: {
        fontSize: 15,
        fontWeight: '700',
    },

    end: {
        fontSize: 13,
        color: '#AAA',
        marginTop: 4,
    },

    card: {
        flex: 1,
        marginLeft: 12,
        borderRadius: 12,
        padding: 14,
    },

    cardTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    cardTitle: {
        fontSize: 16,
        fontWeight: '800',
    },

    cardSub: {
        fontSize: 11,
        marginTop: 2,
        opacity: 0.8,
    },

    cardBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginTop: 22,
    },

    meta: {
        fontSize: 11,
        marginTop: 2
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