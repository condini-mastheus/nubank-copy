import React from 'react';

import QRCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutText,
} from './styles';

const navs = [
  {
    id: Math.random() * 10000,
    icon: 'help-outline',
    text: 'Me ajuda',
  },
  {
    id: Math.random() * 10000,
    icon: 'person-outline',
    text: 'Perfil',
  },
  {
    id: Math.random() * 10000,
    icon: 'credit-card',
    text: 'Configurar cartão',
  },
  {
    id: Math.random() * 10000,
    icon: 'smartphone',
    text: 'Configurações do app',
  },
];

export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode value="https://nubank.com.br/" size={80} bgColor="#8810AE" fgColor="#fff" />
      </Code>

      <Nav>
        {navs.map(nav => (
          <NavItem key={nav.id}>
            <Icon name={nav.icon} size={20} color="#fff" />
            <NavText>{nav.text}</NavText>
          </NavItem>
        ))}
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutText>SAIR DA CONTA</SignOutText>
      </SignOutButton>
    </Container>
  );
}
