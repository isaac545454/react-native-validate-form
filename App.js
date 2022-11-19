import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function App() {
  const handleSubmit = () => {
    console.log("aa");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>bem vindo(a)</Text>
      <View>
        <TextInput placeholder="email" style={styles.input} />
        <TextInput placeholder="senha" style={styles.input} />
        <TextInput
          placeholder="confirme a senha"
          style={styles.input}
          secureTextEntry={true}
        />
        <StatusBar style="auto" />
      </View>
      <TouchableOpacity style={styles.btnArea} onPress={handleSubmit}>
        <Text style={styles.btnText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 6,
    width: 290,
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  btnArea: {
    backgroundColor: "#32CD32",
    paddingVertical: 14,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});
