import React from 'react'
import { ScrollView} from 'react-native'
import { List, Card, Text} from 'react-native-paper';

const PageNissanKicks = () => {
  return (
    <ScrollView>
      <Card>
        {/* Image Car */}
        <Card.Cover source={{ uri: 'https://cdn.motor1.com/images/mgl/9MPeb/s1/nissan-kicks-s.jpg' }} />
        {/* Characteristics Car*/}
        <Card.Content>
          <Text variant="bodyMedium">
            Nuevo /
            2024 /
            Modelo Nissan 
            {'\n'} 
          </Text>
          {/* Price Car */}
          <Text variant="titleMedium">$ 67.500.000 </Text>
          <Text variant="titleMedium"> {'\n'}Descripción {'\n'} </Text>
          <Text variant="bodyLarge">
            La Nissan Kicks 2024 es una SUV compacta que combina un diseño moderno con características familiares. 
            Con su transmisión automática y motor eficiente de 1.6 litros, ofrece un rendimiento suave y ágil en todo tipo de viajes familiares.
          </Text>
          {/* Characteristics Car*/}
          <List.Section>
            <Text variant="titleMedium"> {'\n'}Características</Text>
            <List.Item title="- Kilometraje:  0km"/>
            <List.Item title="- Color: Rojo"/>
            <List.Item title="- Tipo de combustible: Gasolina"/>
            <List.Item title="- Motor: 1.6"/>
            <List.Item title="- Puertas: 5"/>
            <List.Item title="- Sensor de parqueo: Sí"/>
            <List.Item title="- Transmisión: Automática"/>
            <List.Item title="- Control de tracción 4x2"/>
          </List.Section>
          </Card.Content>
        </Card>
    </ScrollView>
  )
}

export default PageNissanKicks
