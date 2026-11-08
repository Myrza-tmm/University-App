import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
} from 'react-native';

const COLORS = {
    bg: '#F9F9F5',
    primary: '#8B2072',
    title: '#1A1A1A',
    subtitle: '#666666',
    line: '#E0E0E0',
    white: '#FFFFFF',
    grayBtn: '#E8E8E8',
    red: '#E53935',
};

export default function LoginScreen ({ onLogin, onSignUp }: any) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState(false);

    const handlelogin = () => {
        if (password.length < 6) {
            setError(true);
            return;
        }
        setError(false);
        onLogin?.();
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Welcome Back!
            </Text>
            <Text style={styles.title}>
                Sign in to continue!
            </Text>

            <TouchableOpacity style={styles.socialBtn}>
                <Text style={styles.socialIcon}>
                    G
                </Text>
                <Text style={styles.socialText}>
                    Log in with Google
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialBtn}>
                <Text style={[styles.socialIcon, {color: '#1877F2' }]}>
                    f
                </Text>
                <Text style={styles.socialText}>
                    Log in with Facebook
                </Text>
            </TouchableOpacity>

            <Text style={styles.or}>or</Text>
            
            {/* Қолданушы есімі*/}
            <TextInput
               style={styles.input}
               placeholder="Username"
               value={username}
               onChangeText={setUsername}
               placeholderTextColor="#999"
            />
            
            {/*Пароль*/}
            <View style={styles.passWrap}>
                <TextInput
                  style={[styles.input, {flex:1, borderBottomWidth: 0, marginBottom:0 }]}
                  placeholder="Password"
                  value={password}
                  onChangeText={(t) => { setPassword(t); setError(false); }}
                  secureTextEntry={!showPass}
                  placeholderTextColor="#999"
                />
                <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                    <Text style={styles.eye}>
                        👁️
                    </Text>
                </TouchableOpacity>
            </View>

            {error && <Text style={styles.error}>Password is not valid</Text>}

            <TouchableOpacity style={styles.loginBtn} onPress={handlelogin}>
                <Text style={styles.loginText}>
                    Log in
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('Forget басылды')}>
                <Text style={styles.forget}>
                    Forget password?
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onSignUp}>
                <Text style={styles.signup}>
                    Don't have an account? <Text style={styles.signupBold}>Sign Up</Text>
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: COLORS.bg,
        paddingHorizontal: 24,
        paddingTop: 40,
    },

    title: {
        fontSize: 26,
        fontWeight: '800',
        color: COLORS.title,
        textAlign: 'center',
        lineHeight: 34,
    },

    socialBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.grayBtn,
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 16,
        marginTop: 16,
    },

    socialIcon: {
        fontSize: 22,
        fontWeight: '800',
        width: 30,
        textAlign: 'center',
    },

    socialText: {
        fontSize: 15,
        fontWeight: '600',
        color: COLORS.title,
        marginLeft: 10,
    },

    or: {
        textAlign: 'center',
        color: '#999',
        marginVertical: 20,
        fontSize: 15,
    },

    input: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.line,
        paddingVertical: 10,
        fontSize: 15,
        marginBottom: 8,
    },

    passWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.line,
    },

    eye: {
        fontSize: 18,
        padding: 6,
    },

    error: {
        color: COLORS.red,
        fontSize: 13,
        marginTop: 6,
    },

    loginBtn: {
        backgroundColor: COLORS.primary,
        height: 52,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },

    loginText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: '600',
    },

    forget: {
        color: COLORS.primary,
        textAlign: 'center',
        marginTop: 16,
        fontWeight: '600',
        fontSize: 14,
    },

    signup: {
        textAlign: 'center',
        marginTop: 8,
        color: COLORS.title,
        fontSize: 13,
    },

    signupBold: {
        color: COLORS.primary,
        fontWeight: '700',
    },
});