import React from 'react';
import { View, Text, SafeAreaView, Image, StatusBar, TouchableOpacity } from 'react-native';
import Feather from "react-native-feather1s";
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import HomeHeader from '../../components/HomeHeader';

export default function Home() {
    const navigation = useNavigation();

    function navigateToAccess() {
        navigation.navigate('Access');
    }

    function navigateToRegister() {
        navigation.navigate('Register');
    }

    return (
        <>
            <StatusBar backgroundColor='#600' />
            <SafeAreaView style={styles.container}>
                <HomeHeader />

                <View style={styles.main}>
                    <TouchableOpacity 
                        style={styles.cardInput}
                        onPress={navigateToRegister}
                    >
                        <View style={styles.inputIcon}>
                            <Feather name="edit" size={48} color={'#FFF'} />
                        </View>
                        <View style={styles.inputDescription}>
                            <Text style={styles.inputTitle}>Perguntas de Cadastro</Text>
                            <Text style={styles.inputText}>Responda as perguntas para realizar o cadastro</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.cardInput}
                        onPress={navigateToAccess}
                    >
                        <View style={styles.inputIcon}>
                            <Feather name="file-text" size={48} color={'#FFF'} />
                        </View>
                        <View style={styles.inputDescription}>
                            <Text style={styles.inputTitle}>Perguntas de Acesso</Text>
                            <Text style={styles.inputText}>Responda as perguntas para obter acesso as intalações da Avery Dennison</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        </>
    );
}