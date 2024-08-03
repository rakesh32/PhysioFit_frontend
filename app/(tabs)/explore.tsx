import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="fitness" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Physical Therapy Plans</ThemedText>
      </ThemedView>
      <ThemedText>Explore common physical therapy plans tailored for various conditions.</ThemedText>

      <Collapsible title="Post-Operative Rehabilitation">
        <ThemedText>
          - <ThemedText type="defaultSemiBold">Knee Replacement:</ThemedText> Focuses on regaining range of motion, strength, and functional mobility.
        </ThemedText>
        <ThemedText>
          - <ThemedText type="defaultSemiBold">Hip Replacement:</ThemedText> Emphasizes hip mobility, strength, and walking mechanics.
        </ThemedText>
        <ThemedText>
          - <ThemedText type="defaultSemiBold">Rotator Cuff Repair:</ThemedText> Involves exercises to restore shoulder function and strength.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Sports Injury Rehabilitation">
        <ThemedText>
          - <ThemedText type="defaultSemiBold">ACL Reconstruction:</ThemedText> Includes exercises to restore knee stability, strength, and function.
        </ThemedText>
        <ThemedText>
          - <ThemedText type="defaultSemiBold">Tennis Elbow:</ThemedText> Focuses on reducing pain and improving forearm strength and flexibility.
        </ThemedText>
        <ThemedText>
          - <ThemedText type="defaultSemiBold">Ankle Sprains:</ThemedText> Aims to restore ankle mobility, strength, and proprioception.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Chronic Pain Management">
        <ThemedText>
          - <ThemedText type="defaultSemiBold">Lower Back Pain:</ThemedText> Involves exercises to strengthen the core, improve flexibility, and reduce pain.
        </ThemedText>
        <ThemedText>
          - <ThemedText type="defaultSemiBold">Neck Pain:</ThemedText> Focuses on neck mobility, strength, and posture correction.
        </ThemedText>
        <ThemedText>
          - <ThemedText type="defaultSemiBold">Osteoarthritis:</ThemedText> Emphasizes joint mobility, strength, and pain reduction.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Neurological Rehabilitation">
        <ThemedText>
          - <ThemedText type="defaultSemiBold">Stroke Recovery:</ThemedText> Includes exercises to improve mobility, balance, and coordination.
        </ThemedText>
        <ThemedText>
          - <ThemedText type="defaultSemiBold">Parkinson’s Disease:</ThemedText> Focuses on improving gait, balance, and strength.
        </ThemedText>
        <ThemedText>
          - <ThemedText type="defaultSemiBold">Multiple Sclerosis:</ThemedText> Aims to manage symptoms and improve function and mobility.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Pediatric Physical Therapy">
        <ThemedText>
          - <ThemedText type="defaultSemiBold">Developmental Delays:</ThemedText> Focuses on improving motor skills and coordination.
        </ThemedText>
        <ThemedText>
          - <ThemedText type="defaultSemiBold">Cerebral Palsy:</ThemedText> Includes exercises to enhance mobility, strength, and functional abilities.
        </ThemedText>
        <ThemedText>
          - <ThemedText type="defaultSemiBold">Muscular Dystrophy:</ThemedText> Emphasizes maintaining mobility and function.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Cardiac and Pulmonary Rehabilitation">
        <ThemedText>
          - <ThemedText type="defaultSemiBold">Post-Heart Attack:</ThemedText> Involves exercises to improve cardiovascular fitness and strength.
        </ThemedText>
        <ThemedText>
          - <ThemedText type="defaultSemiBold">Chronic Obstructive Pulmonary Disease (COPD):</ThemedText> Focuses on improving respiratory function and endurance.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Geriatric Physical Therapy">
        <ThemedText>
          - <ThemedText type="defaultSemiBold">Fall Prevention:</ThemedText> Emphasizes balance and strength exercises to reduce the risk of falls.
        </ThemedText>
        <ThemedText>
          - <ThemedText type="defaultSemiBold">Mobility Improvement:</ThemedText> Focuses on maintaining or improving mobility and independence.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Orthopedic Rehabilitation">
        <ThemedText>
          - <ThemedText type="defaultSemiBold">Joint Pain:</ThemedText> Includes exercises to improve joint function and reduce pain.
        </ThemedText>
        <ThemedText>
          - <ThemedText type="defaultSemiBold">Fracture Rehabilitation:</ThemedText> Focuses on restoring mobility and strength after a bone fracture.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Vestibular Rehabilitation">
        <ThemedText>
          - <ThemedText type="defaultSemiBold">Dizziness and Balance Disorders:</ThemedText> Involves exercises to improve balance and reduce dizziness.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Women's Health Physical Therapy">
        <ThemedText>
          - <ThemedText type="defaultSemiBold">Pelvic Floor Dysfunction:</ThemedText> Focuses on strengthening the pelvic floor muscles and improving bladder control.
        </ThemedText>
        <ThemedText>
          - <ThemedText type="defaultSemiBold">Postpartum Recovery:</ThemedText> Includes exercises to restore strength and function after childbirth.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
