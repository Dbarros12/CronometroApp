import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao:'Iniciar',
      ultimo: null,
    }
    //variavel timer relógio
    this.timer = null;

    this.iniciar = this.iniciar.bind(this);
    this.parar = this.parar.bind(this);

  }

  iniciar(){
    if(this.timer != null ){
      //aqui para o timer
      clearInterval(this.timer);
      this.timer = null
      this.setState({botao:'Iniciar'})
    }else{
      //começa a girar o timer
      this.timer = setInterval(()=>{
      this.setState({numero: this.state.numero + 0.1})
  
     }, 100);

     this.setState({ botao:'Pausar'})
      
    }
  }

  parar(){

    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({ultimo: this.state.numero, numero:0,  botao:'Iniciar'})

  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./src/cronometro.png')}
          style={styles.cronometro}
        />

        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.botao} onPress={this.iniciar}>
            <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={this.parar}>
            <Text style={styles.btnTexto}>Parar</Text>
          </TouchableOpacity>

        </View>
        
        <View style={styles.ultimo}>
            <Text style={styles.textoTempo}>
              {this.state.ultimo > 0 ? 'Ultimo tempo: ' + this.state.ultimo.toFixed(3) + 's' :  + ''}</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',
  },

  timer: {
    marginTop: -180,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold',
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },
  botao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },

  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00aeef',
    alignItems: 'center',
  },
  cronometro: {
    width: 300,
    height: 300,
  },
  ultimo:{
    marginTop:40,
  },
  textoTempo:{
    fontSize:25,
    fontStyle:'italic',
    color:'#fff'
  }
});

export default App;
