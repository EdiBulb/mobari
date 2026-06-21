import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset } from '@/constants/theme';
import { HabitCard } from '@/features/habits/components/HabitCard';
import { MobariCharacter } from '@/features/habits/components/MobariCharacter';

const HABITS = [
  { id: 'pill', title: '탈모약 복용', description: '매일 같은 시간에 복용하세요' },
  { id: 'minox-am', title: '미녹시딜 아침', description: '두피에 직접 도포하세요' },
  { id: 'minox-pm', title: '미녹시딜 저녁', description: '취침 4시간 전에 도포하세요' },
] as const;

function todayLabel() {
  return new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  });
}

export default function TodayScreen() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  const toggle = (id: string) =>
    setCompleted((prev) => ({ ...prev, [id]: !prev[id] }));

  const completedCount = HABITS.filter((h) => completed[h.id]).length;

  return (
    <ThemedView style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ThemedText type="small" themeColor="textSecondary" style={styles.date}>
          {todayLabel()}
        </ThemedText>
        <ThemedText type="subtitle" style={styles.heading}>
          오늘의 탈모 관리
        </ThemedText>

        {HABITS.map((habit) => (
          <HabitCard
            key={habit.id}
            title={habit.title}
            description={habit.description}
            completed={!!completed[habit.id]}
            onToggle={() => toggle(habit.id)}
          />
        ))}

        <MobariCharacter completed={completedCount} total={HABITS.length} />
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: BottomTabInset + 20,
  },
  date: {
    marginBottom: 4,
  },
  heading: {
    marginBottom: 20,
  },
});
