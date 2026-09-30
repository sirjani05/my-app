import { ScrollView, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ProfileHeader } from '@/components/ProfileHeader';
import { ProfileInfo } from '@/components/ProfileInfo';
import { ProfileDetails } from '@/components/ProfileDetails';
import { SkillsList } from '@/components/SkillsList';
import { EditProfileButton } from '@/components/EditProfileButton';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

interface UserProfile {
  name: string;
  avatarUri: string;
  bio: string;
  email: string;
  location: string;
  joinedDate: string;
  role: string;
  skills: string[];
  interests: string[];
}

const initialProfile: UserProfile = {
  name: 'Alex Morgan',
  avatarUri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
  bio: 'Mobile developer passionate about building beautiful, accessible applications. Love learning new technologies and sharing knowledge with the community.',
  email: 'alex.morgan@example.com',
  location: 'San Francisco, CA',
  joinedDate: 'January 2024',
  role: 'React Native Developer',
  skills: ['React Native', 'TypeScript', 'Expo', 'JavaScript', 'Git', 'REST APIs'],
  interests: ['Mobile UI/UX', 'Open Source', 'Tech Blogging', 'Hiking', 'Photography'],
};

export function ProfileScreen() {
  const insets = useSafeAreaInsets();

  const [isEditing, setIsEditing] = useState(false);
  const [showInterests, setShowInterests] = useState(true);

  const handleEditPress = () => {
    setIsEditing((prev) => !prev);
  };

  const handleToggleInterests = () => {
    setShowInterests((prev) => !prev);
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        contentInset={{
          top: insets.top,
          bottom: insets.bottom + Spacing.four,
          left: insets.left,
          right: insets.right,
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <ProfileHeader
          name={initialProfile.name}
          avatarUri={initialProfile.avatarUri}
        />

        <ProfileInfo
          bio={initialProfile.bio}
          email={initialProfile.email}
          location={initialProfile.location}
        />

        <ProfileDetails
          joinedDate={initialProfile.joinedDate}
          role={initialProfile.role}
          isEditing={isEditing}
          onEditPress={handleEditPress}
        />

        <SkillsList
          skills={initialProfile.skills}
          interests={initialProfile.interests}
          showInterests={showInterests}
          onToggleInterests={handleToggleInterests}
        />

        <ThemedView style={styles.buttonContainer}>
          <EditProfileButton
            isEditing={isEditing}
            onPress={handleEditPress}
          />
        </ThemedView>

        <ThemedView style={styles.footer}>
          <ThemedText type="small" themeColor="textSecondary" style={styles.footerText}>
            User Profile Feature — React Native Assignment
          </ThemedText>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    gap: Spacing.four,
    paddingBottom: Spacing.four,
  },
  buttonContainer: {
    paddingHorizontal: Spacing.four,
    width: '100%',
    alignItems: 'center',
    marginTop: Spacing.two,
  },
  footer: {
    paddingVertical: Spacing.four,
    alignItems: 'center',
  },
  footerText: {
    textAlign: 'center',
  },
});