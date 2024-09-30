import { View, StyleSheet} from "react-native"

const card_cidade = (nome,uf)=>{
    return(
        <View style={styles.card}>
            <Text style={styles.cidade}> {nome}</Text> 
            - <Text style={styles.uf}> {uf} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  card:{
    width: "100%",
    padding: 10,
    flexDirection: "row",
    justifyContent: 'space-between',
    backgroundColor:'#444'
  },
  cidade:{
    fontSize:18,
    color:'#ff0202',
    fontWeight:"600"
  },
  uf:{
    fontSize:18,
    color:'blue',
    fontWeight:"900"
  },
});
