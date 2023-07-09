import React from 'react';
import { Stack } from 'react-bootstrap';
import { StarFill  } from 'react-bootstrap-icons';

const Index = () => {
  return (
    <Stack direction="horizontal" gap={2}>
        <StarFill style={{ color: "orange"}}/>
        <StarFill style={{ color: "orange"}}/>
        <StarFill style={{ color: "orange"}}/>
        <StarFill style={{ color: "orange"}}/>
        <StarFill style={{ color: "orange"}}/>
    </Stack>
  );
}

export default Index;
