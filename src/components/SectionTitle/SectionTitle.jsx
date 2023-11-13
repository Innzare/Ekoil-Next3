'use client';

import React from 'react';
import { SectionTitleRoot } from './styles';

export default function SectionTitle(props) {
  const { text, isLight = false } = props;

  return <SectionTitleRoot sx={{ color: isLight && '#fff' }}>{text}</SectionTitleRoot>;
}
