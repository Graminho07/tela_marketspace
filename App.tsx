import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./logo.png')} style={styles.logo} />
      <Text style={styles.welcomeText}>Boas vindas!</Text>
      <Text style={styles.descriptionText}>
        Crie sua conta e use o espaço para comprar itens variados e vender seus produtos.
      </Text>
      <Image source={require('./logo-cadastro.png')} style={styles.cadastroLogo} />

      <TextInput style={styles.input} placeholder="Nome" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Telefone" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
      <TextInput style={styles.input} placeholder="Confirmar Senha" secureTextEntry={true} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Criar</Text>
      </TouchableOpacity>

      <Text style={styles.haveAccountText}>Já tem uma conta?</Text>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Ir para o login</Text>
      </TouchableOpacity>

      <ExpoStatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  logo: {
    width: 150,
    height: 90,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    maxWidth: 250,
  },
  cadastroLogo: {
    width: 100,
    height: 91,
    marginTop: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'black',
    width: 300,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  haveAccountText: {
    fontSize: 16,
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#ccc',
    width: 300,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
