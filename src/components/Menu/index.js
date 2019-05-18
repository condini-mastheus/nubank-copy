import React from 'react';

import QRCode from 'react-native-qrcode';

import { Container } from './styles';

export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode value="https://nubank.com.br/" size={80} bgColor="#8810AE" fgColor="#fff" />
      </Code>
    </Container>
  );
}
