import * as React from "react";
import { Props } from '../../models';

import { Button } from '../../../../components/button';

export const Header: React.SFC<Props> = (props) => {
  return (
    <div>
      <Button onClick={props.check}>Click me</Button>
      This is header bar {props.name}
    </div>
  );
};

