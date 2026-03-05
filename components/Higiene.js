import React from 'react';
import { TextInput, Text, View, Button, StyleSheet, TouchableOpacity, ImageBackground,FlatList,ScrollView,Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {SalvarItens} from '../App';


import estilos from './estilo'
const HigienesStack = createStackNavigator();
  function HigienesNavigator(){
  return(
    <HigienesStack.Navigator>
      <HigienesStack.Screen 
        name="Higiene Pessoal" 
        component={Higienes}
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate('MenuHigiene')}
            >
              <Text style={{ fontSize: 22 }}>⋮</Text>
            </TouchableOpacity>
          )
        })}
      />

      <HigienesStack.Screen name="Sabonetes" component={Sabonetes} />
      <HigienesStack.Screen name="Desodorante" component={Desodorante} />
      <HigienesStack.Screen name="Absorventes" component={Absorventes} />

      {/* Tela oculta para funcionar como menu */}
      <HigienesStack.Screen 
        name="MenuHigiene" 
        component={MenuHigiene}
        options={{ title: "Categorias" }}
      />

    </HigienesStack.Navigator>
  )
}
class MenuHigiene extends React.Component {
  render() {
    return (
      <ImageBackground 
        source={require('../assets/fundo_farmacia.png')} 
        style={estilos.background}
      >
        <View style={estilos.container}>
          
          <Button 
            title="Sabonete" 
            onPress={() => this.props.navigation.navigate('Sabonetes')} 
          />
          
          <Button 
            title="Desodorante" 
            onPress={() => this.props.navigation.navigate('Desodorante')} 
          />
          
          <Button 
            title="Absorventes" 
            onPress={() => this.props.navigation.navigate('Absorventes')} 
          />

        </View>
      </ImageBackground>
    );
  }
}

class Higienes extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/fundo_farmacia.png')}
        style={estilos.background}
      >
        <View style={estilos.container}>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
            Escolha uma categoria no menu ⋮
          </Text>
        </View>
      </ImageBackground>
    );
  }
}
  
  
class Sabonetes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pedidos: {
        'Sabonete Granado Enxofre': 0,
        'Sabonete Dove Original': 0,
        'Sabonete Protex Vitamina E': 0,
        'Sabonete Dove Baby': 0,
        'Sabonete Johnsons Baby': 0,
        'Sabonete Íntimo Kronel': 0,
        'Sabonete Protex Baby': 0,
        'Sabonete Liquido Nivea': 0,
      }
    };
    this.salvarItens = new SalvarItens();
  }

  handlePress(pedido) {
    Vibration.vibrate();
    this.setState(prevState => {
      const quantidade = prevState.pedidos[pedido] + 1;
      return {
        pedidos: {
          ...prevState.pedidos,
          [pedido]: quantidade
        }
      };
    }, () => {
      this.salvarItens.salvar(pedido, this.state.pedidos[pedido]);
    });
  }
  handleRemove(pedido) {
    if (this.state.pedidos[pedido] > 0) {
      this.setState(prevState => {
        const quantidade = prevState.pedidos[pedido] - 1;
        return {
          pedidos: {
            ...prevState.pedidos,
            [pedido]: quantidade
          }
        };
      }, () => {
        this.salvarItens.salvar(pedido, this.state.pedidos[pedido]);
      });
    }
  }

  render() {
    const { pedidos } = this.state;
    return (
      <ImageBackground source={require('../assets/fundo_farmacia.png')} style={estilos.background}>
        <View style={estilos.container}>
        <ScrollView>
        <View style={estilos.card}>
        <Image source={require('./Sabonete/SaboneteEnxofre.webp')} style={estilos.imagemProduto} />
        <Text style={estilos.nomeProduto}> Sabonete Granado Enxofre </Text>
        <Text style={estilos.precoProduto}>R$ 8,00</Text>
        <Button title={`Comprar (${pedidos['Sabonete Granado Enxofre']})`} onPress={() => this.handlePress('Sabonete Granado Enxofre')} color="#66ccff"/>

        <Image source={require('./Sabonete/Dove_Original.webp')} style={estilos.imagemProduto} />
        <Text style={estilos.nomeProduto}> Sabonete Dove Original </Text>
        <Text style={estilos.precoProduto}>R$ 4,99</Text>
        <Button title={`Comprar (${pedidos['Sabonete Dove Original']})`} onPress={() => this.handlePress('Sabonete Dove Original')} color="#66ccff"/>

        <Image source={require('./Sabonete/sabonete_protex.webp')} style={estilos.imagemProduto} />
        <Text style={estilos.nomeProduto}> Sabonete Protex Vitamina E </Text>
        <Text style={estilos.precoProduto}>R$ 4,19</Text>
        <Button title={`Comprar (${pedidos['Sabonete Protex Vitamina E']})`} onPress={() => this.handlePress('Sabonete Protex Vitamina E')} color="#66ccff"/>

        <Image source={require('./Sabonete/sabonetedovebaby.webp')} style={estilos.imagemProduto} />
        <Text style={estilos.nomeProduto}> Sabonete Dove Baby </Text>
        <Text style={estilos.precoProduto}>R$ 4,39</Text>
        <Button title={`Comprar (${pedidos['Sabonete Dove Baby']})`} onPress={() => this.handlePress('Sabonete Dove Baby')} color="#66ccff"/>

        <Image source={require('./Sabonete/johnsonsbaby.webp')} style={estilos.imagemProduto} />
        <Text style={estilos.nomeProduto}> Sabonete Johnsons Baby </Text>
        <Text style={estilos.precoProduto}>R$ 4,39</Text>
        <Button title={`Comprar (${pedidos['Sabonete Johnsons Baby']})`} onPress={() => this.handlePress('Sabonete Johnsons Baby')} color="#66ccff"/>

        <Image source={require('./Sabonete/saboneteKronel.webp')} style={estilos.imagemProduto} />
        <Text style={estilos.nomeProduto}> Sabonete Íntimo Kronel </Text>
        <Text style={estilos.precoProduto}>R$ 27,90</Text>
        <Button title={`Comprar (${pedidos['Sabonete Íntimo Kronel']})`} onPress={() => this.handlePress('Sabonete Íntimo Kronely')} color="#66ccff"/>

        <Image source={require('./Sabonete/sabonetenivea.jpg')} style={estilos.imagemProduto} />
        <Text style={estilos.nomeProduto}> Sabonete Liquido Nivea </Text>
        <Text style={estilos.precoProduto}>R$ 18,99</Text>
        <Button title={`Comprar (${pedidos['Sabonete Liquido Nivea']})`} onPress={() => this.handlePress('Sabonete Liquido Nivea')} color="#66ccff"/>
          </View>
       
      
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

class Desodorante extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pedidos: {
        'Desodorante Rexona Men Clinical Clean': 0,
        'Desodorante Dove Men+Care Proteção Total': 0,
        'Desodorante Dove Original': 0,
        'Desodorante Nivea Men Invisible Black & White': 0,
        'Desodorante Rexona Women Powder Dry': 0,
        'Desodorante Axe Apollo': 0,
        'Desodorante Above Ice Fresh': 0,
        'Desodorante Bozzano Men Extreme': 0,
      }
    };
    this.salvarItens = new SalvarItens();
  }

  handlePress(pedido) {
    Vibration.vibrate();
    this.setState(prevState => {
      const quantidade = prevState.pedidos[pedido] + 1;
      return {
        pedidos: {
          ...prevState.pedidos,
          [pedido]: quantidade
        }
      };
    }, () => {
      this.salvarItens.salvar(pedido, this.state.pedidos[pedido]);
    });
  }
  handleRemove(pedido) {
    if (this.state.pedidos[pedido] > 0) {
      this.setState(prevState => {
        const quantidade = prevState.pedidos[pedido] - 1;
        return {
          pedidos: {
            ...prevState.pedidos,
            [pedido]: quantidade
          }
        };
      }, () => {
        this.salvarItens.salvar(pedido, this.state.pedidos[pedido]);
      });
    }
  }

  render() {
    const { pedidos } = this.state;
    return (
      <ImageBackground source={require('../assets/fundo_farmacia.png')} style={estilos.background}>
        <View style={estilos.container}>
          <ScrollView>
          <View style={estilos.card}>
          <Image source={require('./Desodorante/Desodorante_Rexona_Men_Clinical_Clean.webp')} style={estilos.imagemProduto} />
          <Text style={estilos.nomeProduto}> Desodorante Rexona Men Clinical Clean </Text>
          <Text style={estilos.precoProduto}>R$ 23,90</Text>
          <Button title={`Comprar (${pedidos['Desodorante Rexona Men Clinical Clean']})`} onPress={() => this.handlePress('Desodorante Rexona Men Clinical Clean')} color="#66ccff"/>
          

          <Image source={require('./Desodorante/DesodoranteDoveMenCare.webp')} style={estilos.imagemProduto} />
          <Text style={estilos.nomeProduto}> Desodorante Dove Men+Care Proteção Total </Text>
          <Text style={estilos.precoProduto}>R$ 29,79</Text>
          <Button title={`Comprar (${pedidos['Desodorante Dove Men+Care Proteção Total']})`} onPress={() => this.handlePress('Desodorante Dove Men+Care Proteção Total')} color="#66ccff"/>

          <Image source={require('./Desodorante/Desodorante_Dove_Original.webp')} style={estilos.imagemProduto} />
          <Text style={estilos.nomeProduto}> Desodorante Dove Men+Care Proteção Total </Text>
          <Text style={estilos.precoProduto}>R$ 15,50</Text>
          <Button title={`Comprar (${pedidos['Desodorante Dove Original']})`} onPress={() => this.handlePress('Desodorante Dove Original')} color="#66ccff"/>

          <Image source={require('./Desodorante/desodoranteblackwhite.webp')} style={estilos.imagemProduto} />
          <Text style={estilos.nomeProduto}> Desodorante Nivea Men Invisible Black & White </Text>
          <Text style={estilos.precoProduto}>R$ 15,50</Text>
          <Button title={`Comprar (${pedidos['Desodorante Nivea Men Invisible Black & White']})`} onPress={() => this.handlePress('Desodorante Nivea Men Invisible Black & White')} color="#66ccff"/>

          

          </View>
  
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}
class Absorventes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pedidos: {
        'Sabonete Granado Enxofre': 0,
        'Sabonete Dove Original': 0,
        'Sabonete Protex Vitamina E': 0,
        'Sabonete Dove Baby': 0,
        'Sabonete Johnsons Baby': 0,
        'Sabonete Íntimo Kronel': 0,
        'Sabonete Protex Baby': 0,
        'Sabonete Liquido Nivea': 0,
      }
    };
    this.salvarItens = new SalvarItens();
  }

  handlePress(pedido) {
    Vibration.vibrate();
    this.setState(prevState => {
      const quantidade = prevState.pedidos[pedido] + 1;
      return {
        pedidos: {
          ...prevState.pedidos,
          [pedido]: quantidade
        }
      };
    }, () => {
      this.salvarItens.salvar(pedido, this.state.pedidos[pedido]);
    });
  }
  handleRemove(pedido) {
    if (this.state.pedidos[pedido] > 0) {
      this.setState(prevState => {
        const quantidade = prevState.pedidos[pedido] - 1;
        return {
          pedidos: {
            ...prevState.pedidos,
            [pedido]: quantidade
          }
        };
      }, () => {
        this.salvarItens.salvar(pedido, this.state.pedidos[pedido]);
      });
    }
  }

  render() {
    const { pedidos } = this.state;
    return (
      <ImageBackground source={require('../assets/fundo_farmacia.png')} style={estilos.background}>
        <View style={estilos.container}>
        <ScrollView>
        <View style={estilos.card}>
        <Image source={require('./Sabonete/SaboneteEnxofre.webp')} style={estilos.imagemProduto} />
        <Text style={estilos.nomeProduto}> Sabonete Granado Enxofre </Text>
        <Text style={estilos.precoProduto}>R$ 8,00</Text>
        <Button title={`Comprar (${pedidos['Sabonete Granado Enxofre']})`} onPress={() => this.handlePress('Sabonete Granado Enxofre')} color="#66ccff"/>

        <Image source={require('./Sabonete/Dove_Original.webp')} style={estilos.imagemProduto} />
        <Text style={estilos.nomeProduto}> Sabonete Dove Original </Text>
        <Text style={estilos.precoProduto}>R$ 4,99</Text>
        <Button title={`Comprar (${pedidos['Sabonete Dove Original']})`} onPress={() => this.handlePress('Sabonete Dove Original')} color="#66ccff"/>

        <Image source={require('./Sabonete/sabonete_protex.webp')} style={estilos.imagemProduto} />
        <Text style={estilos.nomeProduto}> Sabonete Protex Vitamina E </Text>
        <Text style={estilos.precoProduto}>R$ 4,19</Text>
        <Button title={`Comprar (${pedidos['Sabonete Protex Vitamina E']})`} onPress={() => this.handlePress('Sabonete Protex Vitamina E')} color="#66ccff"/>

        <Image source={require('./Sabonete/sabonetedovebaby.webp')} style={estilos.imagemProduto} />
        <Text style={estilos.nomeProduto}> Sabonete Dove Baby </Text>
        <Text style={estilos.precoProduto}>R$ 4,39</Text>
        <Button title={`Comprar (${pedidos['Sabonete Dove Baby']})`} onPress={() => this.handlePress('Sabonete Dove Baby')} color="#66ccff"/>

        <Image source={require('./Sabonete/johnsonsbaby.webp')} style={estilos.imagemProduto} />
        <Text style={estilos.nomeProduto}> Sabonete Johnsons Baby </Text>
        <Text style={estilos.precoProduto}>R$ 4,39</Text>
        <Button title={`Comprar (${pedidos['Sabonete Johnsons Baby']})`} onPress={() => this.handlePress('Sabonete Johnsons Baby')} color="#66ccff"/>

        <Image source={require('./Sabonete/saboneteKronel.webp')} style={estilos.imagemProduto} />
        <Text style={estilos.nomeProduto}> Sabonete Íntimo Kronel </Text>
        <Text style={estilos.precoProduto}>R$ 27,90</Text>
        <Button title={`Comprar (${pedidos['Sabonete Íntimo Kronel']})`} onPress={() => this.handlePress('Sabonete Íntimo Kronely')} color="#66ccff"/>

        <Image source={require('./Sabonete/sabonetenivea.jpg')} style={estilos.imagemProduto} />
        <Text style={estilos.nomeProduto}> Sabonete Liquido Nivea </Text>
        <Text style={estilos.precoProduto}>R$ 18,99</Text>
        <Button title={`Comprar (${pedidos['Sabonete Liquido Nivea']})`} onPress={() => this.handlePress('Sabonete Liquido Nivea')} color="#66ccff"/>
          </View>
       
      
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}


export default HigienesNavigator;