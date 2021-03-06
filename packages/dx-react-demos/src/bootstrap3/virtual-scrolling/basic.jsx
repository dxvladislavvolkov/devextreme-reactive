import React from 'react';
import {
    Grid,
} from '@devexpress/dx-react-grid';
import {
    VirtualTableView,
    TableHeaderRow,
} from '@devexpress/dx-react-grid-bootstrap3';

import {
  generateRows,
  defaultColumnValues,
} from '../../demoData';

export class BasicDemo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'id', title: 'ID' },
        { name: 'name', title: 'Name' },
        { name: 'sex', title: 'Sex' },
        { name: 'city', title: 'City' },
        { name: 'car', title: 'Car' },
      ],
      rows: generateRows({
        columnValues: { id: ({ index }) => index, ...defaultColumnValues },
        length: 100000,
      }),
    };
  }
  render() {
    const { rows, columns } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
        getRowId={row => row.id}
      >
        <VirtualTableView />
        <TableHeaderRow />
      </Grid>
    );
  }
}
