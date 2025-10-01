
import type React from 'react';

export interface SlideContent {
  type: 'title' | 'theory' | 'task' | 'final';
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}
