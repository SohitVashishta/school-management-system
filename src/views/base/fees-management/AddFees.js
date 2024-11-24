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
  CFormSelect,
  CRow,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
} from '@coreui/react';
import * as XLSX from 'xlsx';

const AddFees = () => {
  const [feesData, setFeesData] = useState([]);
  const [formData, setFormData] = useState({
    studentName: '',
    feeAmount: '',
    feeDate: '',
    status: '',
    course: '',
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
      const updatedFeesData = [...feesData];
      updatedFeesData[editingIndex] = formData;
      setFeesData(updatedFeesData);
      setEditingIndex(-1);
    } else {
      setFeesData([...feesData, formData]);
    }
    setFormData({
      studentName: '',
      feeAmount: '',
      feeDate: '',
      status: '',
      course: '',
    });
  };

  const handleEdit = (index) => {
    setFormData(feesData[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedFeesData = feesData.filter((_, i) => i !== index);
    setFeesData(updatedFeesData);
  };

  const handleDownloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(feesData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Fees Data');
    XLSX.writeFile(wb, 'fees_data.xlsx');
  };

  return (
    <div>
      <h1>Fees Management</h1>
      {/* Add/Edit Form */}
      <CRow className="justify-content-center py-4">
        <CCol md={12}>
          <CCard>
            <CCardHeader>
              <h5>{editingIndex >= 0 ? 'Edit Fee Record' : 'Add Fee Record'}</h5>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={handleSubmit}>
                <CRow>
                  <CCol md={6}>
                    <CFormLabel htmlFor="studentName">Student Name</CFormLabel>
                    <CFormInput
                      type="text"
                      id="studentName"
                      name="studentName"
                      placeholder="Enter student's name"
                      value={formData.studentName}
                      onChange={handleChange}
                      required
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="feeAmount">Fees Amount</CFormLabel>
                    <CFormInput
                      type="number"
                      id="feeAmount"
                      name="feeAmount"
                      placeholder="Enter fees amount"
                      value={formData.feeAmount}
                      onChange={handleChange}
                      required
                    />
                  </CCol>
                </CRow>
                <CRow className="mt-3">
                  <CCol md={6}>
                    <CFormLabel htmlFor="feeDate">Fee Date</CFormLabel>
                    <CFormInput
                      type="date"
                      id="feeDate"
                      name="feeDate"
                      value={formData.feeDate}
                      onChange={handleChange}
                      required
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="status">Payment Status</CFormLabel>
                    <CFormSelect
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select status</option>
                      <option value="Paid">Paid</option>
                      <option value="Pending">Pending</option>
                    </CFormSelect>
                  </CCol>
                </CRow>
                <CRow className="mt-3">
                  <CCol md={12}>
                    <CFormLabel htmlFor="course">Course</CFormLabel>
                    <CFormSelect
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Course</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Science">Science</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="English">English</option>
                    </CFormSelect>
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

      {/* Fees Table */}
      <CRow className="justify-content-center py-4">
        <CCol md={12}>
          <CCard>
            <CCardHeader>
              <h5>Fees List</h5>
              <CButton color="success" onClick={handleDownloadExcel}>
                Download Excel
              </CButton>
            </CCardHeader>
            <CCardBody>
              <CTable striped hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell>#</CTableHeaderCell>
                    <CTableHeaderCell>Student Name</CTableHeaderCell>
                    <CTableHeaderCell>Fees Amount</CTableHeaderCell>
                    <CTableHeaderCell>Fees Date</CTableHeaderCell>
                    <CTableHeaderCell>Status</CTableHeaderCell>
                    <CTableHeaderCell>Course</CTableHeaderCell>
                    <CTableHeaderCell>Actions</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {feesData.map((fee, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell>{index + 1}</CTableHeaderCell>
                      <CTableDataCell>{fee.studentName}</CTableDataCell>
                      <CTableDataCell>{fee.feeAmount}</CTableDataCell>
                      <CTableDataCell>{fee.feeDate}</CTableDataCell>
                      <CTableDataCell>{fee.status}</CTableDataCell>
                      <CTableDataCell>{fee.course}</CTableDataCell>
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

export default AddFees;
