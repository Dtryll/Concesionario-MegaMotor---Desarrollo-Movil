import { ScrollView} from 'react-native'
import { List, Card, Text} from 'react-native-paper';

const Other = () => {
  return (
    <ScrollView>
    <Card>
      {/* Image Car */}
      <Card.Cover source={{ uri: 'https://s1.cdn.autoevolution.com/images/gallery/RENAULT-Logan-5253_33.jpg' }} />
      {/* Characteristics Car*/}
      <Card.Content>
        <Text variant="bodyMedium">
          Nuevo /
          2024 /
          Modelo Renault 
          {'\n'} 
        </Text>
        {/* Price Car */}
        <Text variant="titleMedium">$ 40.000.000 </Text>
        <Text variant="titleMedium"> {'\n'}Descripción {'\n'} </Text>
        <Text variant="bodyLarge">
          El Renault Logan 2024 es un automóvil sedán compacto con un diseño elegante y moderno. 
          Equipado con tecnología avanzada y un rendimiento confiable, es ideal para viajes urbanos y largos trayectos en carretera.
        </Text>
        {/* Characteristics Car*/}
        <List.Section>
          <Text variant="titleMedium"> {'\n'}Características</Text>
          <List.Item title="- Kilometraje:  0km"/>
          <List.Item title="- Color: Blanco"/>
          <List.Item title="- Tipo de combustible: Gasolina y Gas"/>
          <List.Item title="- Motor: 1.6"/>
          <List.Item title="- Puertas: 5"/>
          <List.Item title="- Sensor de parqueo: No"/>
          <List.Item title="- Transmisión: Automática"/>
          <List.Item title="- Control de tracción 4x2"/>
        </List.Section>
        </Card.Content>
      </Card>
  </ScrollView>
  )
}

export default Other
