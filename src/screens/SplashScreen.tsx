import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>✦</Text>
        </View>
        <Text style={styles.title}>Superior University</Text>
        <Text style={styles.subtitle}>e-Learning Platform</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.copy}>Copyright © 2022 Superior University</Text>
        <Text style={styles.copy}>All Right Reserved</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B2072',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 4,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    color: '#fff',
    fontSize: 48,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '800',
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    marginTop: 4,
  },
  footer: {
    paddingBottom: 40,
    alignItems: 'center',
  },
  copy: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.8,
  },
});