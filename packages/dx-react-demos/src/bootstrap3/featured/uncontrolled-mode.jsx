import React from 'react';
import {
    Grid,
    SortingState, SelectionState, FilteringState, PagingState, GroupingState,
    LocalFiltering, LocalGrouping, LocalPaging, LocalSorting,
} from '@devexpress/dx-react-grid';
import {
    TableView, TableHeaderRow,
    TableFilterRow, TableSelection, PagingPanel, GroupingPanel, TableGroupRow,
} from '@devexpress/dx-react-grid-bootstrap3';
import {
    ProgressBarCell,
} from './templates/progress-bar-cell';
import {
    HighlightedCell,
} from './templates/highlighted-cell';

import {
  generateRows,
  globalSalesValues,
} from '../../demoData';

export class UncontrolledModeDemo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'product', title: 'Product' },
        { name: 'region', title: 'Region' },
        { name: 'amount', title: 'Sale Amount', align: 'right' },
        { name: 'discount', title: 'Discount' },
        { name: 'saleDate', title: 'Sale Date' },
        { name: 'customer', title: 'Customer' },
      ],
      rows: generateRows({ columnValues: globalSalesValues, length: 1000 }),
    };
  }
  render() {
    const { rows, columns } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
      >

        <FilteringState
          defaultFilters={[{ columnName: 'saleDate', value: '2016-02' }]}
        />
        <SortingState
          defaultSorting={[
            { columnName: 'product', direction: 'asc' },
            { columnName: 'saleDate', direction: 'asc' },
          ]}
        />
        <GroupingState
          defaultGrouping={[{ columnName: 'product' }]}
          defaultExpandedGroups={['EnviroCare Max']}
        />
        <PagingState
          defaultCurrentPage={0}
          pageSize={10}
        />

        <LocalFiltering />
        <LocalSorting />
        <LocalGrouping />
        <LocalPaging />

        <SelectionState
          defaultSelection={[1, 3, 18]}
        />

        <TableView
          tableCellTemplate={({ row, column, style }) => {
            if (column.name === 'discount') {
              return (
                <ProgressBarCell value={row.discount * 100} style={style} />
              );
            } else if (column.name === 'amount') {
              return (
                <HighlightedCell align={column.align} value={row.amount} style={style} />
              );
            }
            return undefined;
          }}
        />

        <TableHeaderRow allowSorting allowGrouping />
        <TableFilterRow />
        <PagingPanel />
        <TableSelection />
        <TableGroupRow />
        <GroupingPanel allowSorting />

      </Grid>
    );
  }
}
