import { ScrollView} from 'react-native'
import { List, Card, Text} from 'react-native-paper';

const PageChevroletCaptiva = () => {
  return (
    <ScrollView>
    <Card>
      {/* Image Car */}
      <Card.Cover source={{ uri: 'https://th.bing.com/th/id/R.3143b44f560afd37c987bea11d533c89?rik=LVi%2fxjV3VN3pfQ&riu=http%3a%2f%2fcarsnews.meionorte.com%2fwp-content%2fuploads%2f2016%2f02%2fGM_FOTO005.jpg&ehk=%2bS7wWG3ZOcPfMffJxL3ODc%2fkYmpEL2MLrqoLUFCs048%3d&risl=&pid=ImgRaw&r=0' }} />
      {/* Characteristics Car*/}
      <Card.Content>
        <Text variant="bodyMedium">
          Usado /
          2015 /
          Modelo Chevrolet 
          {'\n'} 
        </Text>
        {/* Price Car */}
        <Text variant="titleMedium">$ 34.500.000 </Text>
        <Text variant="titleMedium"> {'\n'}Descripción {'\n'} </Text>
        <Text variant="bodyLarge">
        La Chevrolet Captiva 2015 es una SUV espaciosa y versátil que combina un diseño robusto con un interior cómodo y funcional. Equipada con un motor potente y eficiente, 
        ofrece un rendimiento confiable en una variedad de condiciones de manejo. Con características de seguridad avanzadas y tecnología moderna. 
        </Text>
        {/* Characteristics Car*/}
        <List.Section>
          <Text variant="titleMedium"> {'\n'}Características</Text>
          <List.Item title="- Kilometraje:  60.000km"/>
          <List.Item title="- Color: Plateado"/>
          <List.Item title="- Tipo de combustible: Gasolina"/>
          <List.Item title="- Motor: 2.4"/>
          <List.Item title="- Puertas: 5"/>
          <List.Item title="- Sensor de parqueo: No"/>
          <List.Item title="- Con precio negociable: Sí"/>
          <List.Item title="- Transmisión: Automática"/>
          <List.Item title="- Control de tracción 4x4"/>
        </List.Section>
        </Card.Content>
      </Card>
  </ScrollView>
  )
}

export default PageChevroletCaptiva
