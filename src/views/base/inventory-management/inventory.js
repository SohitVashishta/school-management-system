import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
} from '@coreui/react';
import * as XLSX from 'xlsx';

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    price: '',
    category: '',
  });
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex >= 0) {
      const updatedInventory = [...inventory];
      updatedInventory[editingIndex] = formData;
      setInventory(updatedInventory);
      setEditingIndex(-1);
    } else {
      setInventory([...inventory, formData]);
    }
    setFormData({
      name: '',
      quantity: '',
      price: '',
      category: '',
    });
  };

  const handleEdit = (index) => {
    setFormData(inventory[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedInventory = inventory.filter((_, i) => i !== index);
    setInventory(updatedInventory);
  };

  const handleDownloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(inventory);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Inventory');
    XLSX.writeFile(wb, 'inventory.xlsx');
  };

  return (
    <div>
      <h1>Inventory Management</h1>
      {/* Add/Edit Form */}
      <CRow className="justify-content-center py-4">
        <CCol md={12}>
          <CCard>
            <CCardHeader>
              {editingIndex >= 0 ? 'Edit Item' : 'Add Item'}
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={handleSubmit}>
                <CRow>
                  <CCol md={4}>
                    <CFormLabel htmlFor="name">Item Name</CFormLabel>
                    <CFormInput
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter item name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </CCol>
                  <CCol md={4}>
                    <CFormLabel htmlFor="quantity">Quantity</CFormLabel>
                    <CFormInput
                      type="number"
                      id="quantity"
                      name="quantity"
                      placeholder="Enter quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                    />
                  </CCol>
                  <CCol md={4}>
                    <CFormLabel htmlFor="price">Price</CFormLabel>
                    <CFormInput
                      type="number"
                      id="price"
                      name="price"
                      placeholder="Enter price"
                      value={formData.price}
                      onChange={handleChange}
                      required
                    />
                  </CCol>
                </CRow>
                <CRow className="mt-3">
                  <CCol md={4}>
                    <CFormLabel htmlFor="category">Category</CFormLabel>
                    <CFormInput
                      type="text"
                      id="category"
                      name="category"
                      placeholder="Enter category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                    />
                  </CCol>
                </CRow>
                <CButton type="submit" color="primary" className="mt-4">
                  {editingIndex >= 0 ? 'Update' : 'Add'}
                </CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      {/* Inventory Table */}
      <CRow className="justify-content-center py-4">
        <CCol md={12}>
          <CCard>
            <CCardHeader>
              <h5>Inventory List</h5>
              <CButton color="success" onClick={handleDownloadExcel}>
                Download Excel
              </CButton>
            </CCardHeader>
            <CCardBody>
              <CTable striped hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell>#</CTableHeaderCell>
                    <CTableHeaderCell>Item Name</CTableHeaderCell>
                    <CTableHeaderCell>Quantity</CTableHeaderCell>
                    <CTableHeaderCell>Price</CTableHeaderCell>
                    <CTableHeaderCell>Category</CTableHeaderCell>
                    <CTableHeaderCell>Actions</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {inventory.map((item, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell>{index + 1}</CTableHeaderCell>
                      <CTableDataCell>{item.name}</CTableDataCell>
                      <CTableDataCell>{item.quantity}</CTableDataCell>
                      <CTableDataCell>{item.price}</CTableDataCell>
                      <CTableDataCell>{item.category}</CTableDataCell>
                      <CTableDataCell>
                        <CButton
                          color="warning"
                          size="sm"
                          onClick={() => handleEdit(index)}
                        >
                          Edit
                        </CButton>{' '}
                        <CButton
                          color="danger"
                          size="sm"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default Inventory;
