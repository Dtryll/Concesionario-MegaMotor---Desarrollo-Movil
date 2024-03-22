import React from 'react'
import { ScrollView } from 'react-native'
import { Button, Card, Text, Dialog } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Catalogue = () => {
  return (
    <ScrollView>
      <Dialog.Title>Catalogo</Dialog.Title>
      <Card>
        <Card.Content>
          <Text variant="titleLarge">Nissan Kicks</Text>
          <Text variant="bodyMedium">
            Nuevo /
            Modelo Nissan /
            $ 67.500.000 
          </Text>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://cdn.motor1.com/images/mgl/9MPeb/s1/nissan-kicks-s.jpg' }} />
        <Card.Actions>
          <Button>Más información</Button>
        </Card.Actions>
      </Card>

      <Card>
        <Card.Content>
          <Text variant="titleLarge">Renault Logan</Text>
          <Text variant="bodyMedium">
            Nuevo /
            Modelo Renault /
            $ 40.000.000
          </Text>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://s1.cdn.autoevolution.com/images/gallery/RENAULT-Logan-5253_33.jpg' }} />
        <Card.Actions>
          <Button>Más información</Button>
        </Card.Actions>
      </Card>

      <Card>
        <Card.Content>
          <Text variant="titleLarge">Chevrolet Captiva</Text>
          <Text variant="bodyMedium">
            Usado /
            Modelo Chevrolet /
            $ 34.500.000
          </Text>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://th.bing.com/th/id/R.3143b44f560afd37c987bea11d533c89?rik=LVi%2fxjV3VN3pfQ&riu=http%3a%2f%2fcarsnews.meionorte.com%2fwp-content%2fuploads%2f2016%2f02%2fGM_FOTO005.jpg&ehk=%2bS7wWG3ZOcPfMffJxL3ODc%2fkYmpEL2MLrqoLUFCs048%3d&risl=&pid=ImgRaw&r=0' }} />
        <Card.Actions>
          <Button>Más información</Button>
        </Card.Actions>
      </Card>

    </ScrollView>
    
    
  )
}

export default Catalogue
