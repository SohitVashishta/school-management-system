import React, { useState } from 'react';
import { CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormInput, CFormLabel, CRow, CFormSelect } from '@coreui/react';
import { useNavigate } from 'react-router-dom';

const AddTeacher = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate adding the teacher to the database
    console.log('Teacher added:', formData);
    alert('Teacher added successfully!');
    navigate('/teachers'); 
  };

  return (
    <div>
      <h1>Add Teacher</h1>
      <CRow className="justify-content-center py-4">
        <CCol md={12}>
          <CCard>
            <CCardHeader>
              <h5>Enter Teacher Details</h5>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={handleSubmit}>
                <div className="mb-3">
                  <CFormLabel htmlFor="name">Name</CFormLabel>
                  <CFormInput
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter teacher's name"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="email">Email</CFormLabel>
                  <CFormInput
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter teacher's email"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="phone">Phone</CFormLabel>
                  <CFormInput
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter teacher's phone number"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="subject">Subject</CFormLabel>
                  <CFormSelect
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select subject</option>
                    <option value="Math">Math</option>
                    <option value="Science">Science</option>
                    <option value="English">English</option>
                    <option value="History">History</option>
                  </CFormSelect>
                </div>
                <CButton type="submit" color="primary">Add Teacher</CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default AddTeacher;
