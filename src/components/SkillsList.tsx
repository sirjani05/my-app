import { Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

export interface SkillsListProps {
  skills: string[];
  interests: string[];
  showInterests: boolean;
  onToggleInterests: () => void;
}

export function SkillsList({
  skills,
  interests,
  showInterests,
  onToggleInterests,
}: SkillsListProps) {
  const renderSkillTags = (items: string[]) => (
    <ThemedView style={styles.tagsContainer}>
      {items.map((item, index) => (
        <ThemedView key={index} type="backgroundElement" style={styles.tag}>
          <ThemedText type="small" style={styles.tagText}>
            {item}
          </ThemedText>
        </ThemedView>
      ))}
    </ThemedView>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.section}>
        <ThemedView style={styles.sectionHeader}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Skills
          </ThemedText>
          <ThemedView type="backgroundElement" style={styles.count}>
            <ThemedText type="small" themeColor="textSecondary">
              {skills.length}
            </ThemedText>
          </ThemedView>
        </ThemedView>
        {renderSkillTags(skills)}
      </ThemedView>

      <ThemedView style={styles.section}>
        <Pressable style={styles.toggleButton} onPress={onToggleInterests}>
          <ThemedView style={styles.sectionHeader}>
            <ThemedText type="subtitle" style={styles.sectionTitle}>
              Interests
            </ThemedText>
            <ThemedView type="backgroundElement" style={styles.count}>
              <ThemedText type="small" themeColor="textSecondary">
                {interests.length}
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </Pressable>

        {showInterests && renderSkillTags(interests)}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  section: {
    gap: Spacing.two,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    marginBottom: 0,
  },
  count: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.half,
    borderRadius: Spacing.one,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  tag: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: Spacing.two,
  },
  tagText: {
    fontWeight: '500',
  },
  toggleButton: {
    width: '100%',
  },
});