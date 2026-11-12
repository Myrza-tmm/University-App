import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';

const categories = [
    { id: '1', title: 'Computer\nScience', color: '#2B4EFF', emoji: '💻' },
    { id: '2', title: 'Mathematics', color: '#2E7D32', emoji: '📐' },
    { id: '3', title: 'History &\nGeography', color: '#E8963A', emoji: '🌍' },
    { id: '4', title: 'Art& \nCraft', color: '#E84A8A', emoji: '🎨' },
];

const news = [
    { id: '1', 
        title: 'FBISE', 
        date: 'May 01', 
        dateColor: '#F5E6E6', 
        desc: `The Federal Board 
        of Intermediate and Secondary Education (FBISE) has officially announced the date for 
        the results of the Secondary School Certificate (SSC) Part I & II 1st Annual Examinations.`
    },
    
    { id: '2',
        title: 'Gaza',
        date: 'June 07',
        dateColor: '#E6F0D6',
        desc: `The Pakistan Medical and Dental Council (PM&DC) 
            has permitted medical/dental students from Gaza to 
            complete their studies in Pakistan.`
    },

    { id: '3',
        title: 'LUMS',
        date: 'May 01',
        dateColor: '#D6E6F5',
        desc: `LUMS recently celebrated the graduation 
        of its new batch of students with great enthusiasm.`
    },
];

const events = [
    { id: '1',
        title: 'Science Fair',
        date: 'May 15',
        dateColor: '#E6F0FF',
        desc: `Annual Science Fair will be held in the main auditorium.`
    },

    { id: '2',
        title: 'Sports Day',
        date: 'May 02',
        dateColor: '#FF0D6',
        desc: `Join us for Sports Day!`
    },
];

export default function HomeScreen({ onTab }: any) {
    const [tab, setTab] = useState('News');

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 100}}>
                <Text style={styles.header}>
                    Home
                </Text>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.catRow}>
                    {categories.map((c) => (
                        <TouchableOpacity key={c.id} style={[styles.catCard, {backgroundColor: c.color }]}>
                            <Text style={styles.catEmoji}>
                                {c.emoji}
                            </Text>
                            <Text style={styles.catTitle}>
                                {c.title}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <View style={styles.rowBetween}>
                    <Text style={styles.sectionTitle}>
                        Today's Classes
                    </Text>
                    
                    <TouchableOpacity>
                        <Text style={styles.link}>
                            Open shedule
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.classCard}>
                    <Text style={styles.classTitle}>
                        Digital Thinking
                    </Text>

                    <Text style={styles.classMeta}>
                        🕘  09:00 - 11:00    📍 Main auditorium
                    </Text>

                    <Text style={styles.teacher}>
                        Mam Mahnoor
                    </Text>
                </View>

                <View style={styles.tabs}>
                    <TouchableOpacity onPress={() => setTab('News')}>
                        <Text style={[styles.tabText, tab === 'News' && styles.tabActive]}>
                            News
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setTab('Events')}>
                        <Text style={[styles.tabText, tab === 'Events' && styles.tabActive]}>
                            Events
                        </Text>
                    </TouchableOpacity>
                </View>


                {tab === 'News' && news.map((n) => (
                    <View key={n.id} style={styles.newsCard}>
                        <View style={styles.rowBetween}>
                            <Text style={styles.newsTitle}>
                                {n.title}
                            </Text>

                            <View style={[styles.dateBadge, {backgroundColor: n.dateColor}]}>
                                <Text style={styles.dateText}>
                                    {n.date}
                                </Text>
                            </View>
                        </View>

                        <Text style={styles.newsDesc}>
                            {n.desc}
                        </Text>
                    </View>
                ))}

                {tab === 'Events' && events.map((e) => (
                    <View key={e.id} style={styles.newsCard}>
                        <View style={styles.rowBetween}>
                            <Text style={styles.newsTitle}>
                                {e.title}
                            </Text>
                            <View style={[styles.dateBadge, {backgroundColor: e.dateColor}]}>
                                <Text style={styles.dateText}>
                                    {e.date}
                                </Text>
                            </View>
                        </View>
                        <Text style={styles.newsDesc}>
                            {e.desc}
                        </Text>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.bottom}>
                <TouchableOpacity style={styles.bottomItem} onPress={() => onTab?.('home')}>
                    <Feather name="home" size={24} color="black" />
                    <Text style={[styles.bottomLabel, styles.bottomActive]}>
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

    header: {
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 18,
    },

    catRow: {
        marginBottom: 22,
    },

    catCard: {
        width: 105,
        height: 120,
        borderRadius: 10,
        padding: 10,
        marginRight: 12,
        justifyContent: 'flex-end',
    },

    catEmoji: {
        fontSize: 32,
        marginBottom: 8,
    },

    catTitle: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 12,
        lineHeight: 15,
    },

    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    sectionTitle: {
        fontSize: 19,
        fontWeight: '700',
    },

    link: {
        color: '#A64B8C',
        fontWeight: '600',
        fontSize: 14,
    },

    classCard: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#EFEFEF',
        borderRadius: 12,
        padding: 16,
        marginTop: 14,
        marginBottom: 22,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 6,
    },

    classTitle: {
        fontSize: 17,
        fontWeight: '700',
        marginBottom: 6,
    },

    classMeta: {
        color: '#777',
        fontSize: 12,
        marginBottom: 16,
    },

    teacher: {
        color: '#777',
        fontSize: 12,
    },

    tabs: {
        flexDirection: 'row',
        gap: 22,
        marginBottom: 4,
    },

    tabText: {
        fontSize: 17,
        fontWeight: '600',
        color: '#333',
    },

    tabActive: {
        color: '#A64B8C',
        textDecorationLine: 'underline',
    },

    newsCard: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#EFEFEF',
        borderRadius: 12,
        padding: 16,
        marginBottom: 14,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 6,
    },

    newsTitle: {
        fontSize: 17,
        fontWeight: '800',
    },

    dateBadge: {
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 20,
    },

    dateText: {
        fontSize: 11,
        fontWeight: '700',
        color: '#555',
    },

    newsDesc: {
        color: '#555',
        fontSize: 12,
        lineHeight: 17,
        marginTop: 8,
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

    bottomIcon: {
        fontSize: 22,
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