import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen2({ onSignUpEmail, onSignIn, onGoogle, onFacebook}: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome back!
            </Text>
            <Text style={styles.subtitle}>
                Sign in to continue!
            </Text>

            <TouchableOpacity style={styles.socialBtn} onPress={onGoogle}>
                <View style={styles.gLogo}>
                    <Text style={styles.gText}>
                        G
                    </Text>
                </View>
                <Text style={styles.socialText}>
                    Log in with Google
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialBtn} onPress={onFacebook}>
                <View style={styles.fLogo}>
                    <Text style={styles.fText}>
                        f
                    </Text>
                </View>
                <Text style={styles.socialText}>
                    Log in with Facebook
                </Text>
            </TouchableOpacity>

            <Text style={styles.or}>
                or
            </Text>

            <TouchableOpacity style={styles.emailBtn} onPress={onSignUpEmail}>
                <Text style={styles.emailText}>
                    Sign up with email
                </Text>
            </TouchableOpacity>

            <Text style={styles.terms}>
                By signing up you are agreed with our{'\n'}
                friendly terms and conditions
            </Text>

            <View style={styles.bottom}>
                <Text style={styles.haveAccount}>
                    Already have an account?
                </Text>
                <TouchableOpacity onPress={onSignIn}>
                    <Text style={styles.signIn}>
                        Sign in
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
        paddingHorizontal: 32,
        paddingTop: 90,
    },
    
    title: {
        fontSize: 26,
        fontWeight: '800',
        textAlign: 'center',
        color: '#000',
    },

    subtitle: {
        fontSize: 26,
        fontWeight: '800',
        textAlign: 'center',
        color: '#000',
        marginTop: 4,
        marginBottom: 40,
    },

    socialBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E8E8E8',
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginBottom: 16,
    },

    gLogo: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    gText: {
        fontSize: 20,
        fontWeight: '800',
        color: '#4285F4',
    },

    fLogo: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#1877F2',
        alignItems: 'center',
        justifyContent: 'center',
    },

    fText: {
        fontSize: 20,
        fontWeight: '800',
        color: '#fff',
    },

    socialText: {
        fontSize: 16,
        fontWeight: '800',
        color: '#000',
    },

    or: {
        textAlign: 'center',
        color: '#999',
        fontSize: 16,
        marginVertical: 30,
    },

    emailBtn: {
        backgroundColor: '#E8E8E8',
        borderRadius: 10,
        paddingVertical: 16,
        alignItems: 'center',
    },

    emailText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#000',
    },

    terms: {
        textAlign: 'center',
        color: '#999',
        fontSize: 13,
        marginTop: 12,
        lineHeight: 18,
    },

    bottom: {
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        alignItems: 'center',
    },

    haveAccount: {
        fontSize: 15,
        color: '#555',
    },

    signIn: {
        fontSize: 17,
        fontWeight: '700',
        color: '#7E2A5E',
        marginTop: 20,
    },
});