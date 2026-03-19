import { useCallback, useRef } from 'react';
import { useWebHaptics } from 'web-haptics/react';

const HAPTIC_DEBOUNCE_MS = 90;

export function useHapticFeedback() {
  const { trigger } = useWebHaptics();
  const lastTriggerAtRef = useRef(0);

  const triggerHaptic = useCallback((pattern = 'nudge') => {
    const now = performance.now();
    if (now - lastTriggerAtRef.current < HAPTIC_DEBOUNCE_MS) return;
    lastTriggerAtRef.current = now;
    trigger(pattern);
  }, [trigger]);

  return { triggerHaptic };
}

