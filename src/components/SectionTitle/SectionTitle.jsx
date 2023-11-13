'use client';

import React from 'react';
import { SectionTitleRoot } from './styles';

export default function SectionTitle(props) {
  const { text } = props;

  return <SectionTitleRoot sx={{ color: '#fff' }}>{text}</SectionTitleRoot>;
}
