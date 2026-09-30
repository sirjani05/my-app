import { Image, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

export interface ProfileHeaderProps {
  name: string;
  avatarUri: string;
}

export function ProfileHeader({ name, avatarUri }: ProfileHeaderProps) {
  return (
    <ThemedView style={styles.container}>
      <ThemedView type="backgroundElement" style={styles.avatarContainer}>
        <Image
          source={{ uri: avatarUri }}
          style={styles.avatar}
          resizeMode="cover"
        />
      </ThemedView>
      <ThemedText type="title" style={styles.name}>
        {name}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: Spacing.four,
    paddingBottom: Spacing.three,
    gap: Spacing.three,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
  },
});