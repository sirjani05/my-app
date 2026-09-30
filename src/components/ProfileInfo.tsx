import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

export interface ProfileInfoProps {
  bio: string;
  email: string;
  location: string;
}

export function ProfileInfo({ bio, email, location }: ProfileInfoProps) {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          About
        </ThemedText>
        <ThemedText type="default" style={styles.bio}>
          {bio}
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Contact
        </ThemedText>
        <ThemedView style={styles.infoRow}>
          <ThemedText type="small" themeColor="textSecondary" style={styles.infoLabel}>
            Email
          </ThemedText>
          <ThemedText type="small" style={styles.infoValue}>
            {email}
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.infoRow}>
          <ThemedText type="small" themeColor="textSecondary" style={styles.infoLabel}>
            Location
          </ThemedText>
          <ThemedText type="small" style={styles.infoValue}>
            {location}
          </ThemedText>
        </ThemedView>
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
  sectionTitle: {
    marginBottom: Spacing.one,
  },
  bio: {
    lineHeight: 22,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.one,
  },
  infoLabel: {
    fontWeight: '600',
  },
  infoValue: {
    flex: 1,
    textAlign: 'right',
    marginLeft: Spacing.two,
  },
});