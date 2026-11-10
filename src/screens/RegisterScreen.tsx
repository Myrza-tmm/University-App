import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RegisterScreen({ onRegister,onBack }: any) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [tried, setTried] = useState(false);

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPassValid = password.length >= 8;
    const isMatch = password === rePassword && rePassword.length > 0;

    const onContinue = () => {
        setTried(true);
        if (!username || !isEmailValid || !isPassValid || !isMatch) return;
        // Тіркеу логикасы
        onRegister();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onBack}>
                <Ionicons name="chevron-back" size={28} color="#000" />
            </TouchableOpacity>

            <Text style={styles.title}>
                Create Account
            </Text>

            <Text style={styles.label}>
                Username
            </Text>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={setUsername}
              placeholder=""
            />

            <Text style={styles.label}>
                Email
            </Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {tried && !isEmailValid && <Text style={styles.error}>Email is not valid</Text>}

            <Text style={styles.label}>
                Password
            </Text>
            <View style={styles.passWrap}>
                <TextInput
                  style={{ flex: 1 }}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPass}
                />
                <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                    <Ionicons name={showPass ? "eye-off-outline" : "eye-outline"} size={22} color="#888" />
                </TouchableOpacity>
            </View>
            {tried && !isPassValid && <Text style={styles.error}>Must contain 8 character</Text>}

            <Text style={styles.label}>
                Re-type Password
            </Text>
            <TextInput
              style={styles.input}
              value={rePassword}
              onChangeText={setRePassword}
              secureTextEntry={!showPass}
            />
            {tried && !isMatch && <Text style={styles.error}>Must match both password</Text>}

            <TouchableOpacity style={styles.button} onPress={onContinue}>
                <Text style={styles.buttonText}>
                    Continue
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 24,
        paddingTop: 60,
    },

    title: {
        fontSize: 26,
        fontWeight: '700',
        color: '#7E2A5E',
        textAlign: 'center',
        marginVertical: 30,
    },

    label: {
        color: '#999',
        fontSize: 14,
        marginTop: 18,
    },

    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingVertical: 8,
        fontSize: 16,
    },

    passWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingVertical: 4,
    },

    error: {
        color: '#D94F4F',
        fontSize: 12,
        marginTop: 4,
    },

    button: {
        backgroundColor: '#7E2A5E',
        borderRadius: 8,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 50,
    },

    buttonText: {
        color:'#fff',
        fontSize: 16,
        fontWeight:'600',
    },
});