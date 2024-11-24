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
} from '@coreui/react';

function AddStudent() {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dob: '',
        phone: '',
        gender: '',
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Data:', formData);
        alert('Student added successfully!');
        // Optionally, reset the form
        setFormData({
            name: '',
            email: '',
            dob: '',
            phone: '',
            gender: '',
        });
    };

    return (
        <div>
            <h1>Add Student</h1>
            <CRow className="justify-content-center py-4">
                <CCol md={12}>
                    <CCard>
                        <CCardHeader>
                            <h5>Student Details</h5>
                        </CCardHeader>
                        <CCardBody>
                            <CForm onSubmit={handleSubmit}>
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
                                <CButton type="submit" color="primary">
                                    Submit
                                </CButton>
                            </CForm>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </div>
    );
}

export default AddStudent;
