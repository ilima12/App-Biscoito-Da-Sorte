import React, { Component } from 'react';
import{
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,

} from 'react-native';

class App extends Component{
    render(){
        return(
            <View style={StyleSheet.container}>
                <Image
                source={require('./src/biscoito.png')}
                style={styles.img}
                />

                <Text style={styles.textoFrase}>"Alguma frase aqui"</Text>
                
                <TouchableOpacity style={styles.botao}>
                    <View style={styles.btnArea}>
                        <Text style={styles.bnTexto}>Abrir Biscoito</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    img:{
        width: 250,
        height: 250,
    }
});

export default App;