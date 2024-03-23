import { ScrollView} from 'react-native'
import { List, Card, Text} from 'react-native-paper';

const PageFordExplorer = () => {
  return (
    <ScrollView>
    <Card>
      {/* Image Car */}
      <Card.Cover source={{ uri: 'https://th.bing.com/th/id/OIP.turjkBWGj6OxhcFhdD6owAAAAA?rs=1&pid=ImgDetMain' }} />
      {/* Characteristics Car*/}
      <Card.Content>
        <Text variant="bodyMedium">
          Usado /
          2018 /
          Modelo Ford 
          {'\n'} 
        </Text>
        {/* Price Car */}
        <Text variant="titleMedium">$ 135.000.000 </Text>
        <Text variant="titleMedium"> {'\n'}Descripción {'\n'} </Text>
        <Text variant="bodyLarge">
        El Ford Explorer 2018 es un SUV de tamaño mediano que combina potencia, confort y versatilidad. Con un diseño robusto y elegante, 
        este vehículo ofrece un rendimiento excepcional tanto en carretera como fuera de ella. Equipado con un motor potente y eficiente, 
        el Explorer 2018 brinda una experiencia de conducción suave y ágil, ideal para viajes largos y aventuras familiares.
        </Text>
        {/* Characteristics Car*/}
        <List.Section>
          <Text variant="titleMedium"> {'\n'}Características</Text>
          <List.Item title="- Kilometraje:  25.100km"/>
          <List.Item title="- Color: Negro"/>
          <List.Item title="- Tipo de combustible: Gasolina"/>
          <List.Item title="- Motor: 2.3"/>
          <List.Item title="- Puertas: 5"/>
          <List.Item title="- Sensor de parqueo: Si"/>
          <List.Item title="- Con precio negociable: Sí"/>
          <List.Item title="- Transmisión: Automática"/>
          <List.Item title="- Control de tracción 4x4"/>
        </List.Section>
        </Card.Content>
      </Card>
  </ScrollView>
  )
}

export default PageFordExplorer
