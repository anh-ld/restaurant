import React, { useRef, useEffect } from 'react';
import { connect } from "react-redux";
import deleteTableItem from '../../../../actions/orderActions/deleteTableItem';
import addTableItem from '../../../../actions/orderActions/addTableItem';
import styled from 'styled-components';
import { buttonMainStyle, media } from '../../../../utils/styling';

const $OrderList = styled.div`
  height: 248px;
  overflow-y: scroll;
  ${media.desktop`
    height: 323px;
  `}
  ${media.tablet`
    height: 248px;
  `}
`;

const Table = styled.table`
  width: 100%;
  position: relative;
  border-collapse: collapse;
`;

const TableHead = styled.th`
  text-align: left;
  padding: 0.5rem 0.2rem;
  border-bottom: 1px solid #EDEFF0;
  position: sticky;
  top: 0;
  background-color: #FFF;
`;

const TableData = styled.td`
  border-collapse: collapse;
  padding: 0.4rem 0.2rem;
  border-bottom: 1px solid #F8F9F9;
  color: #333333;
`;

const ActionButton = styled.button`
  ${buttonMainStyle}
  background-color: #F8F9F9;
  font-weight: 900;
  width: 50%;
  font-size: 1rem;
  &:hover, &:active {
    background-color: #EDEFF0;
  }
`;

const OrderList = ({items, selectedTable, onAdd, onDelete}) => {
  const orderTable = useRef(null);
  useEffect(() => {
    if (items) {
      orderTable.current.scrollIntoView(false);
    }
  });

  return (
    <$OrderList>
      {!items ? null :
        <Table ref={orderTable}>
          <thead>
            <tr>
              <TableHead>Item</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Actions</TableHead>
            </tr>
          </thead>
          <tbody>
          {items.map((item, i) => {
            return (
              <tr key={i}>
                <TableData>{item.name}</TableData>
                <TableData>{item.price} $</TableData>
                <TableData>{item.quantity}</TableData>
                <TableData>
                  <ActionButton
                    onClick={() => onDelete(selectedTable, i)}
                  >
                    -
                  </ActionButton>
                  <ActionButton
                    onClick={() => onAdd(item.name, item.price, selectedTable)}
                  >
                    +
                  </ActionButton>
                </TableData>
              </tr>
            )
          })}
          </tbody>
        </Table>
      }
    </$OrderList>
  );
};

const mapStateToProps = state => {
  return {
    selectedTable: state.selectedTable,
    items: state.tableData[state.selectedTable]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: (tableId, id) => {
      dispatch(deleteTableItem(tableId, id));
    },
    onAdd: (name, price, tableId) => {
      dispatch(addTableItem(name, price, tableId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);