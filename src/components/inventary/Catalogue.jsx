import React from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Card, Text, RadioButton, List} from 'react-native-paper';


const Catalogue = ({navigation}) => { 
  // Managing the Value of the Selected Radio Button
  const [value, setValue] = React.useState('first');

  // Navigation functions for each card
  const pageOfNissanKicks = () => {
    navigation.navigate('Nissan Kicks');
  }
  const pageOfRenaultLogan = () => {
    navigation.navigate('Renault Logan');
  }
  const pageOfChevroletCaptiva = () => {
    navigation.navigate('Chevrolet Captiva');
  }
  const pageOfFordExplorer= () => {
    navigation.navigate('Ford Explorer');
  }

  return (
  <ScrollView>   
    <List.Section title="Filtro"> 
      {/* List of "Brand" arithulos */}
      <List.Accordion
        title="Marca">
        <List.Item title="Chevrolet" />
        <List.Item title="Ford" />
        <List.Item title="Nissan" />
        <List.Item title="Renault" />
      </List.Accordion>
      
      {/* List of "Model" Articholes */}
      <List.Accordion
        title="Modelo">
        <List.Item title="Nissan Kicks" />
        <List.Item title="Renault Logan" />
        <List.Item title="Chevrolet Captiva" />
        <List.Item title="Ford Explorer" />
      </List.Accordion>

    {/* List of "Year" Articholes */}
      <List.Accordion
        title="Año">
        <List.Item title="2024" />
        <List.Item title="2018" />
        <List.Item title="2015" />
      </List.Accordion>

    {/* List of "Price" Articholes */}
      <List.Accordion
        title="Precios">
        <List.Item title="$ 30.000.000 - $ 50.000.000"/>
        <List.Item title="$ 60.000.000 - $ 90.000.000" />
        <List.Item title="$ 100.000.000 - $ 150.000.000" />
      </List.Accordion>
    </List.Section>

    {/* Radio buttons for selecting condition (New/Used) */}
    <View>
      <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
        <RadioButton.Item label="Nuevo" value="first" />
        <RadioButton.Item label="Usado" value="second" />
      </RadioButton.Group>
    </View>

    {/* Contains the different items in a car */}
    <Card>
      <Card.Content>
        {/* Name of Car */}
        <Text variant="titleLarge">Nissan Kicks</Text>
      </Card.Content>
      {/* Image Car */}
      <Card.Cover source={{ uri: 'https://cdn.motor1.com/images/mgl/9MPeb/s1/nissan-kicks-s.jpg' }} />
      {/* Characteristics Car*/}
      <Text variant="bodyMedium">
          Nuevo /
          2024 /
          Modelo Nissan 
      </Text>
      {/* Price Car */}
      <Text variant="titleMedium"> $ 67.500.000 </Text>
      <Card.Actions>
        {/* This button sends you to another page with more information about the cart */}
        <Button title = 'Submit' onPress={pageOfNissanKicks}>Más información</Button>
      </Card.Actions>
    </Card>

    <Card>
      <Card.Content>
        <Text variant="titleLarge">Renault Logan</Text>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://s1.cdn.autoevolution.com/images/gallery/RENAULT-Logan-5253_33.jpg' }} />
      <Text variant="bodyMedium">
          Nuevo /
          2024 /
          Modelo Renault 
      </Text>
      <Text variant="titleMedium">$ 40.000.000</Text>
      <Card.Actions>
        <Button title = 'Submit' onPress={pageOfRenaultLogan}>Más información</Button>
      </Card.Actions>
    </Card>

    <Card>
      <Card.Content>
        <Text variant="titleLarge">Chevrolet Captiva</Text>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://th.bing.com/th/id/R.3143b44f560afd37c987bea11d533c89?rik=LVi%2fxjV3VN3pfQ&riu=http%3a%2f%2fcarsnews.meionorte.com%2fwp-content%2fuploads%2f2016%2f02%2fGM_FOTO005.jpg&ehk=%2bS7wWG3ZOcPfMffJxL3ODc%2fkYmpEL2MLrqoLUFCs048%3d&risl=&pid=ImgRaw&r=0' }} />
      <Text variant="bodyMedium">
          Usado /
          2015 /
          Modelo Chevrolet   
      </Text>
      <Text variant="titleMedium">$ 34.500.000</Text>
      <Card.Actions>
        <Button title = 'Submit' onPress={pageOfChevroletCaptiva}>Más información</Button>
      </Card.Actions>
    </Card>

    <Card>
      <Card.Content>
        <Text variant="titleLarge">Ford Explorer</Text>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://th.bing.com/th/id/OIP.turjkBWGj6OxhcFhdD6owAAAAA?rs=1&pid=ImgDetMain' }} />
      <Text variant="bodyMedium">
          Usado /
          2018 /
          Modelo Ford 
      </Text>
      <Text variant="titleMedium">$ 135.000.000</Text>
      <Card.Actions>
        <Button title = 'Submit' onPress={pageOfFordExplorer}>Más información</Button>
      </Card.Actions>
    </Card>
  </ScrollView>
  );
};

export default Catalogue
