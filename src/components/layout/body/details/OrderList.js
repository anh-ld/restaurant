import React, { Component } from 'react';
import { connect } from "react-redux";
import deleteTableItem from '../../../../actions/orderActions/deleteTableItem';
import addTableItem from '../../../../actions/orderActions/addTableItem';
import styled from 'styled-components';
import media from '../../../../utils/mediaQueriesStyling';
import buttonMainStyle from '../../../../utils/buttonStyling';

const $OrderList = styled.div`
  height: 248px;
  overflow-y: scroll;
  ${media.desktop`
    height: 323px;
  `}
  ${media.tablet`
    height: 248px;
  `}
`

const Table = styled.table`
  width: 100%;
  position: relative;
`

const TableHead = styled.th`
  border-collapse: collapse;
  text-align: left;
  padding: 0.5rem 0.2rem;
  border-bottom: 1px solid #EDEFF0;
  position: sticky;
  top: 0;
  background-color: #FFF;
`

const TableData = styled.td`
  border-collapse: collapse;
  padding: 0.4rem 0.2rem;
  border-bottom: 1px solid #F8F9F9;
  color: #333333;
`

const ActionButton = styled.button`
  ${buttonMainStyle}
  background-color: #F8F9F9;
  font-weight: 900;
  width: 50%;
  font-size: 1rem;
  &:hover, &:active {
    background-color: #EDEFF0;
  }
`

class OrderList extends Component {
  componentDidUpdate = () => {
    if (this.props.items.length > 0) {
      this.refs.orderTable.scrollIntoView(false);
    }
  }

  render() {
    const { items, selectedTable, onAdd, onDelete } = this.props;
    return (
      <$OrderList>
        {items.length === 0 ? null :
          <Table ref='orderTable'>
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
                        className="itemNumber"
                        onClick={() => onDelete(selectedTable, i)}
                      >
                      -
                      </ActionButton>
                      <ActionButton
                        className="itemNumber"
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
  }
}

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