import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./img_produto.png')} style={styles.image} />
      <View style={styles.avatarContainer}>
        <Image source={require('./avatar.png')} style={styles.avatar} />
        <Text style={styles.name}>Makenna Baptista</Text>
      </View>
      <Text style={styles.newText}>Novo</Text>
      <View style={styles.productContainer}>
        <Text style={styles.title}>Bicicleta</Text>
        <Text style={styles.description}>
          Cras congue cursus in tortor sagittis placerat nunc, tellus arcu. Vitae ante leo eget maecenas urna mattis cursus. Mauris metus amet nibh mauris mauris accumsan, euismod. Aenean leo nunc, purus iaculis in aliquam.
        </Text>
        <Text style={styles.price}>R$ 120,00</Text>
        <Text style={styles.tradeText}>Aceita troca?    Sim</Text>
        <Text style={styles.paymentTitle}>Meios de pagamento:</Text>
        <Text style={styles.paymentOption}>- Boleto</Text>
        <Text style={styles.paymentOption}>- Pix</Text>
        <Text style={styles.paymentOption}>- Dinheiro</Text>
        <Text style={styles.paymentOption}>- Cartão de Crédito</Text>
        <Text style={styles.paymentOption}>- Depósito Bancário</Text>
        <Text style={styles.priceBottom}>R$ 120,00</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar em contato</Text>
        </TouchableOpacity>
      </View>
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
    paddingTop: 20,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -150,
  },
  avatar: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  newText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: -250,
  },
  productContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginLeft: -130,
    width: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    textAlign: 'left',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#647AC6',
    position: 'absolute',
    right: -100,
    top: 10,
  },
  tradeText: {
    fontSize: 14,
    marginTop: 10,
    textAlign: 'left',
  },
  paymentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
    textAlign: 'left',
  },
  paymentOption: {
    fontSize: 14,
    marginTop: 5,
    marginLeft: 10,
    textAlign: 'left',
  },
  priceBottom: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#647AC6',
    marginTop: 20,
    alignSelf: 'flex-end',
  },
  button: {
    backgroundColor: '#647AC6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
