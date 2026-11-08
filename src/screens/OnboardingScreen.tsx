import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Dimensions,
  Animated,
} from 'react-native';

const { width } = Dimensions.get('window');

const COLORS = {
  bg: '#F9F9F5',
  primary: '#8B2072',
  title: '#1A1A1A',
  subtitle: '#666666',
  line: '#E0E0E0',
  white: '#FFFFFF',
  yellow: '#FFC72C',
  dark: '#1A1A2E',
};

type Props = {
  onNext: () => void;
  onSkip: () => void;
};

const SLIDES = [
  {
    id: '1',
    title1: 'Better way to learning',
    title2: 'is calling you!',
    subtitle: 'Unlock Your Potential, Embrace Education',
  },
  {
    id: '2',
    title1: 'Find yourself by doing',
    title2: 'whatever you do!',
    subtitle: 'Education with Grace and Style',
  },
  {
    id: '3',
    title1: "it's not just learning,",
    title2: "it's a promise!",
    subtitle: 'Learn Today, Lead Tomorrow',
  },
];

export default function OnboardingScreen({ onNext, onSkip }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < SLIDES.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true });
    } else {
      onNext();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* ЖОҒАРЫДАҒЫ ЖЫЛЖИТЫН СЫЗЫҚ - СУРЕТТЕГІДЕЙ */}
      <View style={styles.progressContainer}>
        <Animated.View
          style={[
            styles.progressFill,
            {
              width: scrollX.interpolate({
                inputRange: [0, width * (SLIDES.length - 1)],
                outputRange: ['33%', '100%'],
                extrapolate: 'clamp',
              }),
            },
          ]}
        />
      </View>

      <FlatList
        ref={flatListRef}
        data={SLIDES}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Illustration />
            <Text style={styles.title}>{item.title1}</Text>
            <Text style={styles.title}>{item.title2}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        )}
      />

      <NextButton onPress={handleNext} />
      <SkipButton onPress={onSkip} />

      <View style={styles.bottomSpace} />
    </SafeAreaView>
  );
}

function NextButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.nextButton} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.nextText}>Next</Text>
    </TouchableOpacity>
  );
}

function SkipButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.skipText}>Skip</Text>
    </TouchableOpacity>
  );
}

// Сенің Illustration-ың - тиіспедім
function Illustration() {
  return (
    <View style={styles.illustration}>
      <View style={[styles.blob, styles.blobPurple]} />
      <View style={[styles.blob, styles.blobPink]} />
      <View style={[styles.blob, styles.blobBlue]} />

      <View style={[styles.person, styles.personLeft]}>
        <View style={styles.head} />
        <View style={styles.bodyYellow} />
        <Text style={styles.legs}>🦵</Text>
      </View>

      <View style={styles.monitor}>
        <View style={styles.screen}>
          <View style={styles.megaphoneWrap}>
            <View style={styles.megaphoneHandle} />
            <View style={styles.megaphoneBody}>
              <Text style={styles.megaphoneText}>📣</Text>
            </View>
          </View>
          <View style={styles.iconsRow}>
            <Text style={styles.icon}>💬</Text>
            <Text style={styles.icon}>✉️</Text>
            <Text style={styles.icon}>🖼️</Text>
          </View>
          <View style={styles.iconsRow2}>
            <Text style={styles.icon}>❤️</Text>
            <Text style={styles.icon}>🎥</Text>
          </View>
        </View>
        <View style={styles.monitorStand} />
        <View style={styles.monitorBase} />
      </View>

      <View style={[styles.person, styles.personRight]}>
        <View style={[styles.head, styles.headGirl]} />
        <View style={[styles.bodyYellow, styles.bodyGirl]} />
      </View>

      <View style={styles.topIcons}>
        <Text style={styles.smallIcon}>💙</Text>
        <Text style={styles.smallIcon}>✉️</Text>
        <Text style={styles.smallIcon}>🔵</Text>
      </View>
      <Text style={styles.cursor}>👆🏻</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  slide: {
    width: width - 48, // paddingHorizontal 24 + 24 ескерілді
  },
  bottomSpace: {
    height: 18,
  },

  // ЖОҒАРЫДАҒЫ СЫЗЫҚ - ЕНДІ БІР ЖОЛАҚ, ІШІНДЕ ЖЫЛЖИТЫН ТОЛТЫРМА
  progressContainer: {
    height: 3,
    backgroundColor: COLORS.line,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: 3,
    backgroundColor: COLORS.primary,
    borderRadius: 2,
  },

  title: {
    fontSize: 26,
    fontWeight: '800',
    color: COLORS.title,
    textAlign: 'center',
    lineHeight: 34,
    marginTop: 6,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.subtitle,
    textAlign: 'center',
    marginTop: 12,
  },

  nextButton: {
    backgroundColor: COLORS.primary,
    height: 52,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
  skipText: {
    color: COLORS.primary,
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 18,
  },

  illustration: {
    height: 290,
    marginTop: 25,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blob: {
    position: 'absolute',
    width: 90,
    height: 120,
    borderRadius: 30,
    opacity: 0.6,
  },
  blobPurple: {
    backgroundColor: '#C9B8FF',
    left: 10,
    top: 20,
    transform: [{ rotate: '-20deg' }],
  },
  blobPink: {
    backgroundColor: '#FFC9E8',
    right: 5,
    top: 10,
    transform: [{ rotate: '20deg' }],
  },
  blobBlue: {
    backgroundColor: '#A8D8FF',
    left: 30,
    bottom: 10,
  },
  person: {
    position: 'absolute',
    alignItems: 'center',
    zIndex: 3,
  },
  personLeft: {
    left: 55,
    top: 5,
  },
  personRight: {
    right: 35,
    bottom: 5,
  },
  head: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#333333',
  },
  headGirl: {
    backgroundColor: '#5C2A1A',
  },
  bodyYellow: {
    width: 28,
    height: 20,
    backgroundColor: '#FFC107',
    borderRadius: 6,
    marginTop: 2,
  },
  bodyGirl: {
    backgroundColor: '#D94F4F',
  },
  legs: {
    fontSize: 14,
    marginTop: -2,
  },
  monitor: {
    width: 230,
    alignItems: 'center',
    zIndex: 2,
  },
  screen: {
    width: 230,
    height: 135,
    backgroundColor: COLORS.yellow,
    borderWidth: 4,
    borderColor: COLORS.dark,
    borderRadius: 6,
    padding: 10,
    overflow: 'hidden',
  },
  monitorStand: {
    width: 16,
    height: 18,
    backgroundColor: COLORS.dark,
  },
  monitorBase: {
    width: 70,
    height: 8,
    backgroundColor: COLORS.dark,
    borderRadius: 4,
  },
  megaphoneWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  megaphoneHandle: {
    width: 14,
    height: 28,
    backgroundColor: '#333333',
    borderRadius: 6,
    zIndex: 2,
  },
  megaphoneBody: {
    width: 70,
    height: 52,
    backgroundColor: '#A83A5C',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -2,
    transform: [{ rotate: '-8deg' }],
  },
  megaphoneText: {
    fontSize: 30,
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
  },
  iconsRow2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 6,
    paddingHorizontal: 20,
  },
  icon: {
    fontSize: 20,
    backgroundColor: COLORS.white,
    borderRadius: 6,
    overflow: 'hidden',
    padding: 2,
  },
  topIcons: {
    position: 'absolute',
    right: 10,
    top: 15,
    gap: 6,
    zIndex: 3,
  },
  smallIcon: {
    fontSize: 18,
    backgroundColor: COLORS.white,
    borderRadius: 6,
    padding: 2,
    overflow: 'hidden',
  },
  cursor: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    fontSize: 24,
    zIndex: 4,
  },
});