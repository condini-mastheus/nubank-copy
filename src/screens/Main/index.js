import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Balance,
  CardFooter,
  Annotation,
} from './styles';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Menu />

        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>

          <CardContent>
            <Title>Saldo disponível</Title>
            <Balance>R$ 1.000.000,00</Balance>
          </CardContent>

          <CardFooter>
            <Annotation>Fatura do cartão no valor de R$ 453,00 paga em 03 MAI</Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
}
