import { Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

export interface ProfileDetailsProps {
  joinedDate: string;
  role: string;
  isEditing: boolean;
  onEditPress: () => void;
}

export function ProfileDetails({
  joinedDate,
  role,
  isEditing,
  onEditPress,
}: ProfileDetailsProps) {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.headerRow}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Details
        </ThemedText>
        <Pressable style={({ pressed }) => [
          styles.editButton,
          isEditing && styles.editButtonActive,
          pressed && styles.editButtonPressed,
        ]} onPress={onEditPress}>
          <ThemedText
            type="small"
            style={[
              styles.editButtonText,
              isEditing && styles.editButtonTextActive,
            ]}
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </ThemedText>
        </Pressable>
      </ThemedView>

      <ThemedView style={styles.detailsGrid}>
        <ThemedView type="backgroundElement" style={styles.detailCard}>
          <ThemedText type="small" themeColor="textSecondary" style={styles.detailLabel}>
            Role
          </ThemedText>
          <ThemedText type="default" style={styles.detailValue}>
            {role}
          </ThemedText>
        </ThemedView>

        <ThemedView type="backgroundElement" style={styles.detailCard}>
          <ThemedText type="small" themeColor="textSecondary" style={styles.detailLabel}>
            Member Since
          </ThemedText>
          <ThemedText type="default" style={styles.detailValue}>
            {joinedDate}
          </ThemedText>
        </ThemedView>
      </ThemedView>

      {isEditing && (
        <ThemedView style={styles.editHint}>
          <ThemedText type="small" style={styles.hintText}>
            Tap 'Cancel' to exit edit mode
          </ThemedText>
        </ThemedView>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.four,
    gap: Spacing.three,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    marginBottom: 0,
  },
  editButton: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one,
    borderRadius: Spacing.two,
  },
  editButtonActive: {
    backgroundColor: '#3c87f7',
  },
  editButtonPressed: {
    opacity: 0.7,
  },
  editButtonText: {
    fontWeight: '600',
  },
  editButtonTextActive: {
    color: '#ffffff',
  },
  detailsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  detailCard: {
    flex: 1,
    padding: Spacing.three,
    borderRadius: Spacing.three,
    alignItems: 'center',
    gap: Spacing.one,
  },
  detailLabel: {
    fontWeight: '600',
  },
  detailValue: {
    fontWeight: '600',
  },
  editHint: {
    padding: Spacing.two,
    borderRadius: Spacing.two,
    backgroundColor: '#fff3cd',
  },
  hintText: {
    textAlign: 'center',
    color: '#856404',
  },
});