import React from 'react';
import AboutPage from '@site/src/components/AboutPage';
import { aboutContent } from '@site/src/data/aboutContent';

export default function About() {
  return <AboutPage content={aboutContent.ja} locale="ja" />;
}