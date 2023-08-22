import React from 'react';
import { BadgeDelta, Card, Flex, Metric, Text } from '@tremor/react';

function CardItem() {
  return (
    <Card
      className='w-xs'
      decoration='top'
      decorationColor='indigo'
    >
      <Flex
        justifyContent='between'
        alignItems='center'
      >
        <Text>Sales</Text>
        <BadgeDelta deltaType='moderateIncrease'>+12.3%</BadgeDelta>
      </Flex>

      <Metric>$ 45,678</Metric>
    </Card>
  );
}

export default CardItem;
