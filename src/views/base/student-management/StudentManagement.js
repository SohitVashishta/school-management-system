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

const StudentManagement = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    phone: '',
    gender: '',
  });

  const [editingIndex, setEditingIndex] = useState(-1);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission for adding/editing students
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex >= 0) {
      const updatedStudents = [...students];
      updatedStudents[editingIndex] = formData;
      setStudents(updatedStudents);
      setEditingIndex(-1);
    } else {
      setStudents([...students, formData]);
    }
    setFormData({
      name: '',
      email: '',
      dob: '',
      phone: '',
      gender: '',
    });
  };

  // Handle editing a student
  const handleEdit = (index) => {
    setFormData(students[index]);
    setEditingIndex(index);
  };

  // Handle deleting a student
  const handleDelete = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  // Download students as Excel
  const handleDownloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(students);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Students');
    XLSX.writeFile(wb, 'students.xlsx');
  };

  return (
    <div>
      <h1>Student Management</h1>
      <div>
        <CRow className="justify-content-center py-4">
          <CCol md={12}>
            <CCard>
              <CCardHeader>
                <h5>Student Details</h5>
              </CCardHeader>
              <CCardBody>
                <CForm onSubmit={handleSubmit}>
                  <CRow>
                    <CCol md={4}>
                      <div className="mb-3">
                        <CFormLabel htmlFor="name">Name</CFormLabel>
                        <CFormInput
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Enter student's name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </CCol>
                    <CCol md={4}>
                      <div className="mb-3">
                        <CFormLabel htmlFor="email">Email</CFormLabel>
                        <CFormInput
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Enter student's email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </CCol>
                    <CCol md={4}>
                      <div className="mb-3">
                        <CFormLabel htmlFor="dob">Date of Birth</CFormLabel>
                        <CFormInput
                          type="date"
                          id="dob"
                          name="dob"
                          value={formData.dob}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol md={4}>
                      <div className="mb-3">
                        <CFormLabel htmlFor="phone">Phone Number</CFormLabel>
                        <CFormInput
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="Enter phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </CCol>
                    <CCol md={4}>
                      <div className="mb-3">
                        <CFormLabel htmlFor="gender">Gender</CFormLabel>
                        <CFormSelect
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </CFormSelect>
                      </div>
                    </CCol>
                  </CRow>
                  <CButton type="submit" color="primary">
                    Submit
                  </CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>

      </div>

      {/* Student List Table */}
      <CRow className="justify-content-center py-4">
        <CCol md={12}>
          <CCard>
            <CCardHeader>
              <h5>Student List</h5>
              <CButton color="success" onClick={handleDownloadExcel}>
                Download Excel
              </CButton>
            </CCardHeader>
            <CCardBody>
              <CTable striped hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                    <CTableHeaderCell scope="col">DOB</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Gender</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {students.map((student, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                      <CTableDataCell>{student.name}</CTableDataCell>
                      <CTableDataCell>{student.email}</CTableDataCell>
                      <CTableDataCell>{student.dob}</CTableDataCell>
                      <CTableDataCell>{student.phone}</CTableDataCell>
                      <CTableDataCell>{student.gender}</CTableDataCell>
                      <CTableDataCell>
                        <CButton color="warning" size="sm" onClick={() => handleEdit(index)}>
                          Edit
                        </CButton>{' '}
                        <CButton color="danger" size="sm" onClick={() => handleDelete(index)}>
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

export default StudentManagement;
