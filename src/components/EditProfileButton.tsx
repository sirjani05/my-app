import { Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export interface EditProfileButtonProps {
  isEditing: boolean;
  onPress: () => void;
  disabled?: boolean;
}

export function EditProfileButton({
  isEditing,
  onPress,
  disabled = false,
}: EditProfileButtonProps) {
  const theme = useTheme();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        isEditing && styles.buttonActive,
        disabled && styles.buttonDisabled,
        pressed && styles.buttonPressed,
      ]}
      onPress={onPress}
      disabled={disabled}
      accessibilityLabel={isEditing ? 'Cancel editing' : 'Edit profile'}
      accessibilityRole="button"
    >
      <ThemedText
        type="smallBold"
        style={[
          styles.buttonText,
          isEditing && styles.buttonTextActive,
          disabled && styles.buttonTextDisabled,
        ]}
      >
        {isEditing ? 'Cancel Editing' : 'Edit Profile'}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: Spacing.five,
    paddingVertical: Spacing.two,
    borderRadius: Spacing.three,
    backgroundColor: '#3c87f7',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 200,
  },
  buttonActive: {
    backgroundColor: '#dc3545',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  buttonTextActive: {
    color: '#ffffff',
  },
  buttonTextDisabled: {
    color: '#cccccc',
  },
});