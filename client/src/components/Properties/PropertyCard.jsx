import { Card, CardHeader, CardBody, List, ListItem, Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const PropertyCard = ({ property }) => {
  return (
    <Card boxShadow="xl" minW={['xs', 'md', 'md']} maxW={['xs', 'md', 'md']}>
      <CardHeader
        borderBottom="2px solid teal"
        textAlign={'center'}
        bg="gray.100"
        borderTopLeftRadius={4}
        borderTopRightRadius={4}
      >
        <Heading size="sm" as="h1">
          {property.title}
        </Heading>
      </CardHeader>
      <CardBody bg="gray.50">
        <List>
          <ListItem>
            <b>Area:</b> {property.area.mainText} - {property.area.secondaryText}
          </ListItem>
          <ListItem>
            <b>Type:</b> {property.type}
          </ListItem>
          <ListItem>
            <b>Price in Euros:</b> {property.price}
          </ListItem>
          <ListItem>
            <b>Date added:</b> {new Date(property.insertedAt).toUTCString()}
          </ListItem>
        </List>
      </CardBody>
    </Card>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.string,
    price: PropTypes.string,
    insertedAt: PropTypes.number,
    area: PropTypes.shape({
      placeId: PropTypes.string,
      mainText: PropTypes.string,
      secondaryText: PropTypes.string
    })
  })
};

export default PropertyCard;
