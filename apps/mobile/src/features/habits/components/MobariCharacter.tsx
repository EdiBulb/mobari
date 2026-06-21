import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useTheme } from '@/hooks/use-theme';

type Props = {
  completed: number;
  total: number;
};

export function MobariCharacter({ completed, total }: Props) {
  const theme = useTheme();
  const progress = total > 0 ? completed / total : 0;

  return (
    <ThemedView type="backgroundElement" style={styles.container}>
      <ThemedText style={styles.emoji}>🌱</ThemedText>
      <ThemedText type="smallBold" style={styles.title}>
        모발이가 자라고 있어요
      </ThemedText>
      <ThemedText type="small" themeColor="textSecondary" style={styles.subtitle}>
        오늘 관리 {completed}/{total} 완료
      </ThemedText>
      <View style={[styles.track, { backgroundColor: theme.backgroundSelected }]}>
        <View style={[styles.fill, { width: `${progress * 100}%` }]} />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    gap: 6,
    marginTop: 8,
  },
  emoji: {
    fontSize: 40,
    lineHeight: 48,
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 13,
  },
  track: {
    width: '100%',
    height: 8,
    borderRadius: 4,
    marginTop: 8,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 4,
    backgroundColor: '#208AEF',
  },
});
