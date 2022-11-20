import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  name: yup.string().required("digite seu nome"),
  email: yup.string().required("informe seu email"),
  senha: yup
    .string()
    .min(6, "minimo de 6 caracteres ")
    .required("digite sua senha"),
});

export default function App() {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handle = (data) => {
    console.log(data);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>bem vindo(a)</Text>
      <View>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="name"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.name && <Text style={styles.err}>{errors.name?.message}</Text>}
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="email"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.email && (
          <Text style={styles.err}>{errors.email?.message}</Text>
        )}
        <Controller
          control={control}
          name="senha"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="senha"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
            />
          )}
        />
        {errors.senha && (
          <Text style={styles.err}>{errors.senha?.message}</Text>
        )}

        <StatusBar style="auto" />
      </View>
      <TouchableOpacity style={styles.btnArea} onPress={handleSubmit(handle)}>
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
    marginTop: 10,
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
    marginTop: 20,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  err: {
    alignSelf: "flex-start",
    color: "#ff375b",
    //  marginBottom: 1,
  },
});
