import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { useTheme } from '@/hooks/use-theme';

type Props = {
  title: string;
  description: string;
  completed: boolean;
  onToggle: () => void;
};

export function HabitCard({ title, description, completed, onToggle }: Props) {
  const theme = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.backgroundElement }]}>
      <View style={styles.content}>
        <ThemedText type="smallBold" style={completed && styles.completedText}>
          {title}
        </ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          {description}
        </ThemedText>
      </View>
      <TouchableOpacity onPress={onToggle} style={styles.checkboxHitSlop} hitSlop={8}>
        <View
          style={[
            styles.checkbox,
            { borderColor: completed ? PRIMARY : theme.textSecondary },
            completed && { backgroundColor: PRIMARY },
          ]}
        >
          {completed && <ThemedText style={styles.checkmark}>✓</ThemedText>}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const PRIMARY = '#208AEF';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
  },
  content: {
    flex: 1,
    gap: 2,
  },
  completedText: {
    textDecorationLine: 'line-through',
    opacity: 0.5,
  },
  checkboxHitSlop: {
    marginLeft: 12,
  },
  checkbox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
  },
});
