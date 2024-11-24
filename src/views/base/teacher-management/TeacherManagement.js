import React, { useState } from 'react';
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow, CTable, CTableHead, CTableRow, CTableHeaderCell, CTableDataCell, CTableBody } from '@coreui/react';
import { Link } from 'react-router-dom';

const TeacherManagement = () => {
  const [teachers, setTeachers] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', subject: 'Math', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', subject: 'English', phone: '987-654-3210' },
  ]);

  const handleDelete = (id) => {
    setTeachers(teachers.filter((teacher) => teacher.id !== id));
  };

  return (
    <div>
      <h1>Teacher Management</h1>
      <CRow className="justify-content-center py-4">
        <CCol md={12}>
          <CCard>
            <CCardHeader>
              <h5>Teacher List</h5>
              <Link to="/AddTeacher">
                <CButton color="primary">Add Teacher</CButton>
              </Link>
            </CCardHeader>
            <CCardBody>
              <CTable striped hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell>#</CTableHeaderCell>
                    <CTableHeaderCell>Name</CTableHeaderCell>
                    <CTableHeaderCell>Email</CTableHeaderCell>
                    <CTableHeaderCell>Subject</CTableHeaderCell>
                    <CTableHeaderCell>Phone</CTableHeaderCell>
                    <CTableHeaderCell>Actions</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {teachers.map((teacher) => (
                    <CTableRow key={teacher.id}>
                      <CTableHeaderCell>{teacher.id}</CTableHeaderCell>
                      <CTableDataCell>{teacher.name}</CTableDataCell>
                      <CTableDataCell>{teacher.email}</CTableDataCell>
                      <CTableDataCell>{teacher.subject}</CTableDataCell>
                      <CTableDataCell>{teacher.phone}</CTableDataCell>
                      <CTableDataCell>
                        <Link to={`/edit-teacher/${teacher.id}`}>
                          <CButton color="warning" className="me-2">Edit</CButton>
                        </Link>
                        <CButton color="danger" onClick={() => handleDelete(teacher.id)}>Delete</CButton>
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

export default TeacherManagement;
