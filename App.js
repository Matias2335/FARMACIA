import React, { useState, useRef } from 'react';
import {
  TextInput, Text, View, Button, TouchableOpacity,
  ImageBackground, FlatList, ScrollView, Image,
  Vibration, Animated, StyleSheet, TouchableWithoutFeedback,
  StatusBar, Platform,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import estilos from './components/estilo';
import HigienesNavigator from './components/Higiene_1';
import CabelosNavigator from './components/Cabelos';

// ─── TEMA (definido aqui para garantir disponibilidade) ───────────────────────
const TEMA = {
  primario:        '#00BFA5',
  secundario:      '#0097A7',
  fundo:           '#F0FAFA',
  card:            '#FFFFFF',
  texto:           '#1A2B2B',
  textoSecundario: '#546E6E',
  preco:           '#00897B',
  btnAdicionar:    '#00BFA5',
  btnRemover:      '#EF5350',
  separador:       '#E0F2F1',
  amarelo:         '#FFFF00',
  vermelho:        '#E53935',
  azulClaro:       '#38B6FF',
};
const { width: SCREEN_WIDTH } = require('react-native').Dimensions.get('window');
const DRAWER_WIDTH = SCREEN_WIDTH * 0.72;

const Tab  = createBottomTabNavigator();
const Stack = createStackNavigator();

// ─── CATEGORIAS DO APP ───────────────────────────────────────────────────────
export const CATEGORIAS_APP = [
  { nome: 'Remédios', icone: '💊', tela: 'Remedios' },
  { nome: 'Higiene',  icone: '🧴', tela: 'Higienes' },
  { nome: 'Cabelos',  icone: '💇', tela: 'Cabelos' },
  { nome: 'Pastéis',  icone: '🥟', tela: 'Pasteis'  },
  { nome: 'Bebidas',  icone: '🥤', tela: 'Bebidas'  },
  { nome: 'Salgados', icone: '🍟', tela: 'Salgados' },
];

// ─── SALVAR / REMOVER / LISTAR ITENS ────────────────────────────────────────
// ─── Prefixo para separar itens do carrinho dos usuários no AsyncStorage ──────
const CARRINHO_PREFIX = 'carrinho__';

export class SalvarItens extends React.Component {
  async salvar(pedido, quantidade) {
    try {
      if (quantidade <= 0) {
        await AsyncStorage.removeItem(CARRINHO_PREFIX + pedido);
      } else {
        const valor = JSON.stringify({ pedido, quantidade });
        await AsyncStorage.setItem(CARRINHO_PREFIX + pedido, valor);
      }
    } catch (erro) {
      console.log('Erro ao salvar no carrinho:', erro);
    }
  }
}

export class RemoverItens extends React.Component {
  async remover(chave) {
    try {
      await AsyncStorage.removeItem(CARRINHO_PREFIX + chave);
    } catch (erro) {
      console.log('Erro ao remover do carrinho:', erro);
    }
  }
}

export class ListarItens extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pedidos: [] };
  }

  // Busca os itens do AsyncStorage toda vez que a tela abre
  async componentDidMount() {
    
    await this.carregarCarrinho();
  }

  async carregarCarrinho() {
    try {
      const todasChaves = await AsyncStorage.getAllKeys();
      // Filtra apenas as chaves do carrinho (que têm o prefixo)
      const chavesCarrinho = todasChaves.filter(k => k.startsWith(CARRINHO_PREFIX));
      if (chavesCarrinho.length === 0) {
        this.setState({ pedidos: [] });
        return;
      }
      const pares = await AsyncStorage.multiGet(chavesCarrinho);
      const itens = pares
        .map(([, valor]) => {
          try { return JSON.parse(valor); } catch { return null; }
        })
        .filter(item => item && item.quantidade > 0);
      this.setState({ pedidos: itens });
    } catch (erro) {
      console.log('Erro ao carregar carrinho:', erro);
    }
  }

  render() {
    return (
      <ImageBackground source={require('./assets/fundo_farmacia.png')} style={estilos.background}>
        <View style={estilos.container}>
          {this.state.pedidos.length > 0 ? (
            <FlatList
              data={this.state.pedidos}
              keyExtractor={(_, i) => String(i)}
              renderItem={({ item }) => (
                <View style={estilos.pedidoContainer}>
                  <Text style={estilos.textoPedido}>Pedido: {item.pedido}</Text>
                  <Text style={estilos.textoQuantidade}>Quantidade: {item.quantidade}</Text>
                </View>
              )}
            />
          ) : (
            <Text style={{ color: TEMA.texto, fontSize: 16 }}>Carrinho vazio</Text>
          )}
        </View>
      </ImageBackground>
    );
  }
}

// ─── DRAWER LATERAL (reutilizável) ──────────────────────────────────────────
export function DrawerMenu({ visible, onClose, onNavigate, categorias }) {
  const translateX = useRef(new Animated.Value(-DRAWER_WIDTH)).current;
  const opacity    = useRef(new Animated.Value(0)).current;
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    if (visible) {
      setMounted(true);
      Animated.parallel([
        Animated.spring(translateX, { toValue: 0,             useNativeDriver: true, tension: 65, friction: 11 }),
        Animated.timing(opacity,    { toValue: 1, duration: 200, useNativeDriver: true }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(translateX, { toValue: -DRAWER_WIDTH, duration: 220, useNativeDriver: true }),
        Animated.timing(opacity,    { toValue: 0, duration: 200, useNativeDriver: true }),
      ]).start(() => setMounted(false));
    }
  }, [visible]);

  if (!mounted && !visible) return null;

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents={visible ? 'auto' : 'none'}>
      <TouchableWithoutFeedback onPress={onClose}>
        <Animated.View style={[estilos.drawerOverlay, { opacity }]} />
      </TouchableWithoutFeedback>

      <Animated.View style={[estilos.drawerPanel, { transform: [{ translateX }] }]}>
        <View style={estilos.drawerHeader}>
          <Text style={estilos.drawerHeaderTitulo}>🏥 FarmaApp</Text>
          <Text style={estilos.drawerHeaderSub}>Escolha uma categoria</Text>
        </View>

        <ScrollView style={estilos.drawerLista}>
          {categorias.map((cat, i) => (
            <TouchableOpacity
              key={i}
              style={estilos.drawerItem}
              onPress={() => { onClose(); setTimeout(() => onNavigate(cat.tela), 250); }}
              activeOpacity={0.7}
            >
              <Text style={estilos.drawerItemIcone}>{cat.icone}</Text>
              <Text style={estilos.drawerItemTexto}>{cat.nome}</Text>
              <Text style={estilos.drawerItemSeta}>›</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TouchableOpacity style={estilos.drawerFechar} onPress={onClose}>
          <Text style={estilos.drawerFecharTexto}>✕  Fechar menu</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

// ─── HEADER CUSTOMIZADO (reutilizável) ──────────────────────────────────────
export function AppHeader({ titulo, onBack, onMenu }) {
  return (
    <View style={estilos.header}>
      {onBack
        ? <TouchableOpacity onPress={onBack} style={estilos.headerBotao}><Text style={estilos.headerIcone}>←</Text></TouchableOpacity>
        : <View style={{ width: 40 }} />}

      <Text style={estilos.headerTitulo} numberOfLines={1}>{titulo}</Text>

      {onMenu
        ? <TouchableOpacity onPress={onMenu} style={estilos.headerBotao}><Text style={estilos.headerIcone}>☰</Text></TouchableOpacity>
        : <View style={{ width: 40 }} />}
    </View>
  );
}

// ─── CARD DE PRODUTO (reutilizável) ─────────────────────────────────────────
export function CardProduto({ imagem, nome, preco, quantidade, onAdd, onRemove }) {
  return (
    <View style={estilos.card}>
      {imagem && <Image source={imagem} style={estilos.cardImagem} resizeMode="contain" />}
      <View style={{ flex: 1 }}>
        <Text style={estilos.cardNome}>{nome}</Text>
        <Text style={estilos.cardPreco}>{preco}</Text>
        <View style={estilos.cardBotoes}>
          <TouchableOpacity style={estilos.btnRemover} onPress={onRemove} activeOpacity={0.8}>
            <Text style={estilos.btnTexto}>−</Text>
          </TouchableOpacity>
          <Text style={estilos.cardQtd}>{quantidade}</Text>
          <TouchableOpacity style={estilos.btnAdicionar} onPress={onAdd} activeOpacity={0.8}>
            <Text style={estilos.btnTexto}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// ─── HOOK DE PRODUTOS (reutilizável) ────────────────────────────────────────
export function useProdutos(lista) {
  const [qtds, setQtds] = useState(
    Object.fromEntries(lista.map(p => [p.nome, 0]))
  );
  const salvarItens = new SalvarItens();

  function add(nome) {
    Vibration.vibrate(30);
    setQtds(prev => {
      const nova = prev[nome] + 1;
      salvarItens.salvar(nome, nova);
      return { ...prev, [nome]: nova };
    });
  }
  function remove(nome) {
    setQtds(prev => {
      if (prev[nome] <= 0) return prev;
      const nova = prev[nome] - 1;
      salvarItens.salvar(nome, nova);
      return { ...prev, [nome]: nova };
    });
  }
  return { qtds, add, remove };
}

// ─── TELA BASE (reutilizável para qualquer categoria) ───────────────────────
export function TelaBase({ titulo, navigation, children }) {
  const [drawerVisivel, setDrawerVisivel] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: TEMA.fundo }}>
      <AppHeader
        titulo={titulo}
        onBack={() => navigation.goBack()}
        onMenu={() => setDrawerVisivel(true)}
      />
      <ScrollView contentContainerStyle={estilos.scrollConteudo}>
        {children}
      </ScrollView>
      <DrawerMenu
        visible={drawerVisivel}
        onClose={() => setDrawerVisivel(false)}
        onNavigate={(tela) => navigation.navigate(tela)}
        categorias={CATEGORIAS_APP}
      />
    </View>
  );
}

// ─── LOGIN ───────────────────────────────────────────────────────────────────
class Principal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { usuario: '', senha: '' };
  }

  render() {
    return (
      <ImageBackground source={require('./assets/fundo_farmacia.png')} style={estilos.background}>
        <View style={estilos.container}>
          <Text style={estilos.texto}>Login:</Text>
          <TextInput
            style={estilos.caixa}
            onChangeText={texto => this.setState({ usuario: texto })}
            placeholder="            Usuário             "
            placeholderTextColor={TEMA.azulClaro}
          />
          <Text style={estilos.texto}>Senha:</Text>
          <TextInput
            style={estilos.caixa}
            onChangeText={texto => this.setState({ senha: texto })}
            secureTextEntry
            placeholder="            Senha                "
            placeholderTextColor={TEMA.azulClaro}
          />
          <Button title=" Login " onPress={() => this.ler()} color="red" />
        </View>
      </ImageBackground>
    );
  }

  async ler() {
    try {
      const senha = await AsyncStorage.getItem(this.state.usuario);
      if (senha !== null) {
        senha === this.state.senha
          ? this.props.navigation.navigate('Pedidos')
          : alert('Senha Incorreta!');
      } else {
        alert('Usuário não encontrado!');
      }
    } catch (erro) {
      console.log(erro);
    }
  }
}

// ─── CADASTRO ────────────────────────────────────────────────────────────────
class Cadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '' };
  }

  async gravar() {
    try {
      await AsyncStorage.setItem(this.state.user, this.state.password);
      alert('Salvo com sucesso!!!');
    } catch (erro) {
      alert('Erro!');
    }
  }

  render() {
    return (
      <ImageBackground source={require('./assets/fundo_farmacia.png')} style={estilos.background}>
        <View style={estilos.container}>
          <Text style={estilos.texto}>Cadastrar usuário:</Text>
          <TextInput
            style={estilos.caixa}
            onChangeText={texto => this.setState({ user: texto })}
            placeholder="          Novo usuário          "
            placeholderTextColor={TEMA.azulClaro}
          />
          <Text style={estilos.texto}>Cadastrar senha:</Text>
          <TextInput
            style={estilos.caixa}
            onChangeText={texto => this.setState({ password: texto })}
            secureTextEntry
            placeholder="         Nova senha             "
            placeholderTextColor={TEMA.azulClaro}
          />
          <Button title="   Cadastrar   " onPress={() => this.gravar()} color="red" />
        </View>
      </ImageBackground>
    );
  }
}

// ─── PEDIDOS (tela de categorias com drawer) ─────────────────────────────────
function Pedidos({ navigation }) {
  const [drawerVisivel, setDrawerVisivel] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: TEMA.fundo }}>
      <AppHeader
        titulo="Pedidos"
        onBack={() => navigation.goBack()}
        onMenu={() => setDrawerVisivel(true)}
      />
      <ScrollView contentContainerStyle={estilos.scrollConteudo}>
        <View style={estilos.banner}>
          <Text style={estilos.bannerTitulo}>🏥 FarmaApp</Text>
          <Text style={estilos.bannerSub}>Toque em ☰ ou escolha uma categoria abaixo</Text>
        </View>
        <Text style={estilos.secaoTitulo}>Categorias</Text>
        <View style={estilos.grade}>
          {CATEGORIAS_APP.map((cat, i) => (
            <TouchableOpacity
              key={i}
              style={estilos.categoriaCard}
              onPress={() => navigation.navigate(cat.tela)}
              activeOpacity={0.8}
            >
              <Text style={estilos.categoriaIcone}>{cat.icone}</Text>
              <Text style={estilos.categoriaTexto}>{cat.nome}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <DrawerMenu
        visible={drawerVisivel}
        onClose={() => setDrawerVisivel(false)}
        onNavigate={tela => navigation.navigate(tela)}
        categorias={CATEGORIAS_APP}
      />
    </View>
  );
}

// ─── REMÉDIOS ─────────────────────────────────────────────────────────────────
const REMEDIOS_LISTA = [
  { nome: 'Dorflex',           preco: 'R$ 12,90' },
  { nome: 'Dipirona 500mg',    preco: 'R$ 6,99'  },
  { nome: 'Paracetamol 750mg', preco: 'R$ 8,90'  },
  { nome: 'Ibuprofeno 400mg',  preco: 'R$ 12,50' },
  { nome: 'Omeprazol 20mg',    preco: 'R$ 18,00' },
  { nome: 'Loratadina 10mg',   preco: 'R$ 9,90'  },
  { nome: 'Buscopan',          preco: 'R$ 15,00' },
  { nome: 'Neosaldina',        preco: 'R$ 11,90' },
  { nome: 'Sal de Fruta Eno',  preco: 'R$ 7,50'  },
  { nome: 'Vitamina C 1000mg', preco: 'R$ 19,90' },
];
function Remedios({ navigation }) {
  const { qtds, add, remove } = useProdutos(REMEDIOS_LISTA);
  return (
    <TelaBase titulo="💊 Remédios" navigation={navigation}>
      {REMEDIOS_LISTA.map((p, i) => (
        <CardProduto key={i} nome={p.nome} preco={p.preco}
          quantidade={qtds[p.nome]} onAdd={() => add(p.nome)} onRemove={() => remove(p.nome)} />
      ))}
    </TelaBase>
  );
}

// ─── PASTÉIS ──────────────────────────────────────────────────────────────────
const PASTEIS_LISTA = [
  { nome: 'Pastel de Carne',              preco: 'R$ 7,00'  },
  { nome: 'Pastel de Queijo',             preco: 'R$ 6,50'  },
  { nome: 'Pastel de Frango c/Catupiry',  preco: 'R$ 8,00'  },
  { nome: 'Pastel de Carne c/Queijo',     preco: 'R$ 8,00'  },
  { nome: 'Pastel de Pizza',              preco: 'R$ 8,50'  },
  { nome: 'Pastel Carne, Queijo e Ovo',   preco: 'R$ 9,00'  },
  { nome: 'Pastel de Banana',             preco: 'R$ 6,00'  },
  { nome: 'Pastel de Camarão',            preco: 'R$ 10,50' },
];
function Pasteis({ navigation }) {
  const { qtds, add, remove } = useProdutos(PASTEIS_LISTA);
  return (
    <TelaBase titulo="🥟 Pastéis" navigation={navigation}>
      {PASTEIS_LISTA.map((p, i) => (
        <CardProduto key={i} nome={p.nome} preco={p.preco}
          quantidade={qtds[p.nome]} onAdd={() => add(p.nome)} onRemove={() => remove(p.nome)} />
      ))}
    </TelaBase>
  );
}

// ─── BEBIDAS ──────────────────────────────────────────────────────────────────
const BEBIDAS_LISTA = [
  { nome: 'Refrigerante Cola 2L', preco: 'R$ 9,50'  },
  { nome: 'Suco de Laranja 1L',   preco: 'R$ 8,90'  },
  { nome: 'Água Mineral 500ml',   preco: 'R$ 2,50'  },
  { nome: 'Café Solúvel',         preco: 'R$ 14,90' },
  { nome: 'Energético 473ml',     preco: 'R$ 12,00' },
  { nome: 'Cerveja Lata 350ml',   preco: 'R$ 4,50'  },
  { nome: 'Isotônico 500ml',      preco: 'R$ 6,90'  },
  { nome: 'Chá Gelado 500ml',     preco: 'R$ 5,50'  },
];
function Bebidas({ navigation }) {
  const { qtds, add, remove } = useProdutos(BEBIDAS_LISTA);
  return (
    <TelaBase titulo="🥤 Bebidas" navigation={navigation}>
      {BEBIDAS_LISTA.map((p, i) => (
        <CardProduto key={i} nome={p.nome} preco={p.preco}
          quantidade={qtds[p.nome]} onAdd={() => add(p.nome)} onRemove={() => remove(p.nome)} />
      ))}
    </TelaBase>
  );
}

// ─── SALGADOS ─────────────────────────────────────────────────────────────────
const SALGADOS_LISTA = [
  { nome: 'Hamburgão',        preco: 'R$ 18,00' },
  { nome: 'Esfiha',           preco: 'R$ 5,00'  },
  { nome: 'Empadinha',        preco: 'R$ 4,50'  },
  { nome: 'Pão de Queijo',    preco: 'R$ 3,00'  },
  { nome: 'Coxinha',          preco: 'R$ 5,50'  },
  { nome: 'Kibe',             preco: 'R$ 4,00'  },
  { nome: 'Bolinho Japonês',  preco: 'R$ 5,00'  },
  { nome: 'Bolinho de Carne', preco: 'R$ 4,50'  },
];
function Salgados({ navigation }) {
  const { qtds, add, remove } = useProdutos(SALGADOS_LISTA);
  return (
    <TelaBase titulo="🍟 Salgados" navigation={navigation}>
      {SALGADOS_LISTA.map((p, i) => (
        <CardProduto key={i} nome={p.nome} preco={p.preco}
          quantidade={qtds[p.nome]} onAdd={() => add(p.nome)} onRemove={() => remove(p.nome)} />
      ))}
    </TelaBase>
  );
}

// ─── STACK NAVIGATOR ─────────────────────────────────────────────────────────
function Nav2() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login"    component={Principal}         />
      <Stack.Screen name="Pedidos"  component={Pedidos}           />
      <Stack.Screen name="Remedios" component={Remedios}          />
      <Stack.Screen name="Higienes" component={HigienesNavigator} />
      <Stack.Screen name="Cabelos" component={CabelosNavigator} />
      <Stack.Screen name="Pasteis"  component={Pasteis}           />
      <Stack.Screen name="Bebidas"  component={Bebidas}           />
      <Stack.Screen name="Salgados" component={Salgados}          />
    </Stack.Navigator>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor:   TEMA.primario,
            tabBarInactiveTintColor: '#888',
            tabBarStyle: { elevation: 8 },
          }}
        >
          <Tab.Screen
            name="Login"
            component={Nav2}
            options={{
              tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home-account" color={color} size={size} />,
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Criar Usuário"
            component={Cadastro}
            options={{
              tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account-details" color={color} size={size} />,
            }}
          />
          <Tab.Screen
            name="Carrinho"
            component={ListarItens}
            options={{
              tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="cart" color={color} size={size} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
