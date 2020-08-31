import React from 'react';

export type TableCellData = object | string;

export interface TableColumn {
  columnId: string;
  width?: number;
  align?: string;
  CellComponent?: React.ReactNode;
  HeaderComponent?: React.ReactNode;
  headerData: TableCellData;
}

export interface TableColumns {
  [columnId: string]: TableColumn;
}

export interface TableRowData {
  [columnId: string]: TableCellData;
}

export interface TableRow {
  rowId: string;
  rowData: object;
}

export interface TableConfig {
  columns: {[columnId: string]: TableColumn};
  columnsOrder: string[];
}

export type TableData = TableRowData[];
