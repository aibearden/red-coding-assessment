"use client"

import {render} from '@testing-library/react';
import TableActionBar from '../components/TableActionBar';
import "./setupTests";
import { store } from '../store/store';
import { Provider } from 'react-redux';

test('Succesfully loads and renders TableActionBar component', () => {

    const tableActionBar = render(<Provider store={store}><TableActionBar refreshOrderList={() => {}} searchOrders={() => {}} rowSelectionModel={[]} setRowSelectionModel={() => {}} filteredOrderTypes={[]} setFilteredOrderTypes={() => {}}/></Provider>)

    expect(tableActionBar.getAllByText('Order Type'));
})