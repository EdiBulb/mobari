import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function TodayScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">오늘</ThemedText>
      <ThemedText>오늘의 관리 기록을 확인하고 업데이트하세요.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
});
