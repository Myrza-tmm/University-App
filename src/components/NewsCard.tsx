import { View, Text, Image, StyleSheet } from 'react-native';
import type { NewsItem } from '../types/news';

export default function NewsCard({ item }: { item: NewsItem }) {
    const date = new Date(item.published_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
    return (
        <View style={styles.newsCard}>
            {item.image_url ? (
                <Image source={{ uri: item.image_url }} style={styles.image} />
            ) : (
                <View style={[styles.image, { backgroundColor: '#F0F0F0' }]} />
            )}
            <View style={styles.rowBetween}>
                <Text style={styles.newsTitle} numberOfLines={1}>{item.title}</Text>
                <View style={[styles.dateBadge, { backgroundColor: '#D6E6F5' }]}>
                    <Text style={styles.dateText}>{date}</Text>
                </View>
            </View>
            <Text style={styles.newsDesc} numberOfLines={3}>{item.summary}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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

    image: {
        width: '100%',
        height: 140,
        borderRadius: 10,
        marginBottom: 12,
    },

    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    newsTitle: {
        fontSize: 17,
        fontWeight: '800',
        flex: 1,
        marginRight: 8,
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
});