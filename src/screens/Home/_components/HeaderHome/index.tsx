import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Avatar from "../../../../components/Avatar";
import { LogOut, ShoppingBag, ShoppingCart } from "lucide-react-native";
import { theme } from "../../../../theme";

export function HeaderHome() {

  const handleSigOut = () => {
    Alert.alert('Atenção!', 'Deseja deslogar o usuario?', [
      {
        text: 'Sim'
      }
    ])
  }

  return (
    <View style={s.container}>
      <View style={s.contain}>
        <Avatar />
        <View>
          <Text style={s.title}>Bem vindo!</Text>
          <Text style={s.text}>Desenvoledor</Text>
        </View>
      </View>
      <TouchableOpacity style={s.containIcon} onPress={handleSigOut}>
        <LogOut size={20} color={theme.PRIMARY} />
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  contain: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  title: {
    color: theme.WHITE,
    fontSize: 18,
    fontWeight: 600
  },
  text: {
    color: theme.WHITE,
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 1
  },
  containIcon: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#f3eff6",
    borderRadius: 8,
    backgroundColor: "#f3eff6",
  },
});
