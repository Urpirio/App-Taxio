import { Tabs } from "expo-router";

export default function _layout() {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={{title: 'Home'}}/>
        <Tabs.Screen name="Ajustes" options={{title: 'Ajustes'}}/>
    </Tabs>
  )
}
