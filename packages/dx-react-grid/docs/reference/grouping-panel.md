# GroupingPanel Plugin Reference

A plugin that renders a panel showing grouped columns in the Grid's header. An end-user can change the grouping options by interacting with this panel.

Optionally, the plugin allows an end-user to change sorting order of the grouped columns and renders the corresponding sort indicators.

## User Reference

### Dependencies

- [SortingState](sorting-state.md) [Optional]
- [GroupingState](grouping-state.md)

### Properties

Name | Type | Default | Description
-----|------|---------|------------
allowSorting | boolean | false | If true, allows an end-user to change sorting by a column
groupPanelTemplate | Component&lt;[GroupPanelProps](#group-panel-props)&gt; | | Renders a group panel
groupPanelCellTemplate | Component&lt;[GroupPanelCellProps](#group-panel-cell-props)&gt; | | Renders a group panel cell

## Interfaces

### <a name="group-panel-props"></a>GroupPanelProps

Describes properties passed to the group panel template when it is being rendered

A value with the following shape:

Field | Type | Description
------|------|------------
groupedColumns | Array&lt;[Column](grid.md#column)&gt; | Columns by which the Grid is currently grouped
cellTemplate | Component&lt;[CellProps](#cell-props)&gt; | A template that should be used to render the group panel cells

### <a name="cell-props"></a>CellProps

Describes properties passed to the cell template when it is being rendered

A value with the following shape:

Field | Type | Description
------|------|------------
column | [Column](grid.md#column) | Specifies a column associated with the cell

### <a name="group-panel-cell-props"></a>GroupPanelCellProps

Describes properties passed to the group panel cell template when it is being rendered

A value with the following shape:

Field | Type | Description
------|------|------------
allowSorting | boolean | If true, an end-user can change sorting by the current column
sortingDirection? | 'asc' &#124; 'desc' | Specifies sorting direction
changeSortingDirection | ({ keepOther: boolean }) => void | Changes the sort order of a column. Keeps existing sorting if `keepOther` is set to `true`
groupByColumn | ({ columnName: string }) | Toggles a column's grouping state

## Plugin Developer Reference

To be described...
