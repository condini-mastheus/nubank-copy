import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container, TabsContainer, TabItem, TabText,
} from './styles';

const tabs = [
  {
    id: Math.random() * 10000,
    icon: 'person-add',
    text: 'Indicar amigos',
  },
  {
    id: Math.random() * 10000,
    icon: 'chat-bubble-outline',
    text: 'Cobrar',
  },
  {
    id: Math.random() * 10000,
    icon: 'arrow-downward',
    text: 'Depositar',
  },
  {
    id: Math.random() * 10000,
    icon: 'arrow-upward',
    text: 'Transferir',
  },
  {
    id: Math.random() * 10000,
    icon: 'lock',
    text: 'Bloquear cartão',
  },
];

export default function Tabs({ translateY }) {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 400],
              outputRange: [0, 30],
              extrapolate: 'clamp',
            }),
          },
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 250],
          outputRange: [0.99, 0.3],
          extrapolate: 'clamp',
        }),
      }}
    >
      <TabsContainer>
        {tabs.map(tab => (
          <TabItem key={tab.id}>
            <Icon name={tab.icon} size={20} color="#fff" />
            <TabText>{tab.text}</TabText>
          </TabItem>
        ))}
      </TabsContainer>
    </Container>
  );
}
