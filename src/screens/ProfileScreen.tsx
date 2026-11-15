import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';

export default function ProfileScreen({ onTab }: any) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 110 }}>

        <Text style={styles.header}>
            Profile
        </Text>

        <View style={styles.userRow}>
          <Image source={{ uri: 'https://i.pravatar.cc/100?img=12' }} style={styles.avatar} />
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>
                Ammar Ali
            </Text>
            <Text style={styles.id}>
                SU92-BSCSM-S23-040
            </Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>
                50/130
            </Text>
            <Text style={styles.statLabel}>
                Credit earns
            </Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>
                3.02
            </Text>
            <Text style={styles.statLabel}>
                GPA
            </Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>
                2
            </Text>
            <Text style={styles.statLabel}>
                Year student
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>
                Statistics
            </Text>
              <Text style={styles.cardDate}>
                Monday, 08 June 2024
            </Text>
            </View>
            <TouchableOpacity style={styles.attendBtn} activeOpacity={0.7}>
              <Text style={styles.attendText}>
                Mark Attend
            </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.statGrid}>
            <View style={styles.statItem}>
              <View style={[styles.iconCircle, { backgroundColor: '#FFE9A8' }]}>
                <Text>
                    📅
                </Text>
              </View>
              <View>
                <Text style={styles.smallLabel}>
                    Attendance
                </Text>
                <Text style={styles.percent}>
                    90%
                </Text>
              </View>
            </View>

            <View style={styles.statItem}>
              <View style={[styles.iconCircle, { backgroundColor: '#D6D0F5' }]}>
                <Text>
                    📋
                </Text>
              </View>
              <View>
                <Text style={styles.smallLabel}>
                    Task & Work
                </Text>
                <Text style={styles.percent}>
                    70%
                </Text>
              </View>
            </View>
          </View>

          <View style={[styles.statGrid, { marginTop: 16 }]}>
            <View style={styles.statItem}>
              <View style={[styles.iconCircle, { backgroundColor: '#FFD0B3' }]}>
                <Text>
                    📝
                </Text>
              </View>
              <View>
                <Text style={styles.smallLabel}>
                    Quiz
                </Text>
                <Text style={styles.percent}>
                    85%
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.dashboardTitle}>
            Dashboard
        </Text>

          <TouchableOpacity style={styles.menuRow} activeOpacity={0.7}>
            <View style={styles.menuLeft}>
              <View style={[styles.iconCircle, { backgroundColor: '#D6F0F0' }]}>
                <Text>
                    ⚙️
                </Text>
              </View>
              <Text style={styles.menuText}>
                Setting
            </Text>
            </View>
            <Text style={styles.arrow}>
                ›
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuRow} activeOpacity={0.7}>
            <View style={styles.menuLeft}>
              <View style={[styles.iconCircle, { backgroundColor: '#D6C8F5' }]}>
                <Text>
                    🏆
                </Text>
              </View>
              <Text style={styles.menuText}>
                Achivement
            </Text>
            </View>
            <Text style={styles.arrow}>
                ›
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.menuRow, { borderBottomWidth: 0 }]} activeOpacity={0.7}>
            <View style={styles.menuLeft}>
              <View style={[styles.iconCircle, { backgroundColor: '#FFE0B3' }]}>
                <Text>
                    🔒
                </Text>
              </View>
              <Text style={styles.menuText}>
                Privacy
            </Text>
            </View>
            <Text style={styles.arrow}>
                ›
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.bottomItem} onPress={() => onTab?.('home')}>
          <Feather name="home" size={22} color="black" />
          <Text style={styles.bottomLabel}>
            Home
        </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.bottomItem} onPress={() => onTab?.('courses')}>
          <Feather name="folder" size={22} color="black" />
          <Text style={styles.bottomLabel}>
            Courses
          </Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.bottomItem} onPress={() => onTab?.('schedule')}>
          <EvilIcons name="calendar" size={22} color="black" />
          <Text style={styles.bottomLabel}>
            Schedule
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.bottomItem} onPress={() => onTab?.('result')}>
          <Entypo name="graduation-cap" size={22} color="black" />
          <Text style={styles.bottomLabel}>
            Result
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.bottomItem}>
          <AntDesign name="user" size={22} color="black" />
          <Text style={[styles.bottomLabel, styles.bottomActive]}>
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

    header: { 
        fontSize: 17, 
        fontWeight: '700', 
        textAlign: 'center', 
        marginBottom: 18, 
    },

    userRow: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 20, 
    },

    avatar: { 
        width: 48, 
        height: 48, 
        borderRadius: 24, 
        backgroundColor: '#ddd', 
        marginRight: 12, 
    },

    name: { 
        fontSize: 18, 
        fontWeight: '800', 
    },

    id: { 
        fontSize: 11, 
        color: '#999', 
        marginTop: 2, 
    },

    statsRow: { 
        flexDirection: 'row', 
        marginBottom: 20, 
    },

    stat: { 
        flex: 1, 
        alignItems: 'center', 
    },

    statValue: { 
        fontSize: 15, 
        fontWeight: '700', 
        color: '#A64B8C', 
    },

    statLabel: { 
        fontSize: 12, 
        color: '#A64B8C', 
        marginTop: 2, 
        textAlign: 'center', 
    },

    card: { 
        backgroundColor: '#fff', 
        borderRadius: 14, 
        borderWidth: 1, 
        borderColor: '#D9D9D9', 
        padding: 16, 
        marginBottom: 16, 
    },

    cardHeader: { 
        flexDirection: 'row', 
        alignItems: 'flex-start', 
        marginBottom: 16, 
    },

    cardTitle: { 
        fontSize: 16, 
        fontWeight: '800', 
    },

    cardDate: { 
        fontSize: 11, 
        color: '#999', 
        marginTop: 2, 
    },

    attendBtn: {
        backgroundColor: '#B9E5B0', 
        paddingHorizontal: 12, 
        paddingVertical: 6, 
        borderRadius: 8, 
        marginLeft: 10, 
    },
    
    attendText: { 
        fontSize: 11, 
        fontWeight: '700', 
        color: '#1E4D1A', 
    },

    statGrid: { 
        flexDirection: 'row', 
    },
    
    statItem: { 
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
    },
    
    iconCircle: { 
        width: 32, 
        height: 32, 
        borderRadius: 16, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginRight: 8, 
    },

    smallLabel: { 
        fontSize: 11, 
        color: '#999', 
    },
    
    percent: { 
        fontSize: 13, 
        fontWeight: '800', 
    },

    dashboardTitle: { 
        fontSize: 13, 
        color: '#999', 
        marginBottom: 6, 
    },

    menuRow: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingVertical: 12, 
        borderBottomWidth: 1, 
        borderBottomColor: '#F5F5F5', 
    },
    
    menuLeft: { 
        flexDirection: 'row', 
        alignItems: 'center', 
    },
    
    menuText: { 
        fontSize: 14, 
        fontWeight: '600', 
    },
    
    arrow: { 
        fontSize: 22, 
        color: '#CCC', 
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
        flex: 1, 
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