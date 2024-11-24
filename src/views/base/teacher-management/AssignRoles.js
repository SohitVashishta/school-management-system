import React, { useState, useEffect } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormSelect,
  CRow,
} from '@coreui/react';

const AssignRoles = () => {
  const [teachers, setTeachers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [formData, setFormData] = useState({
    teacherId: '',
    roleId: '',
  });

  useEffect(() => {
    // Fetch teachers and roles when the component loads
    fetchTeachers();
    fetchRoles();
  }, []);

  const fetchTeachers = async () => {
    // Simulate API call to fetch teachers
    const response = await fetch('/api/teachers'); // Replace with actual API
    const data = await response.json();
    setTeachers(data);
  };

  const fetchRoles = async () => {
    // Simulate API call to fetch roles
    const response = await fetch('/api/roles'); // Replace with actual API
    const data = await response.json();
    setRoles(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate API call to assign a role
      const response = await fetch('/api/assign-role', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Role assigned successfully!');
        setFormData({ teacherId: '', roleId: '' });
      } else {
        alert('Failed to assign role.');
      }
    } catch (error) {
      console.error('Error assigning role:', error);
      alert('An error occurred while assigning the role.');
    }
  };

  return (
    <div>
      <h1>Assign Role to Teacher</h1>
      <CRow className="justify-content-center py-4">
        <CCol md={12}>
          <CCard>
            <CCardHeader>
              <h5>Assign a Role</h5>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={handleSubmit}>
                <div className="mb-3">
                  <CFormSelect
                    id="teacherId"
                    name="teacherId"
                    value={formData.teacherId}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Teacher</option>
                    {teachers.map((teacher) => (
                      <option key={teacher.id} value={teacher.id}>
                        {teacher.name}
                      </option>
                    ))}
                  </CFormSelect>
                </div>
                <div className="mb-3">
                  <CFormSelect
                    id="roleId"
                    name="roleId"
                    value={formData.roleId}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Role</option>
                    {roles.map((role) => (
                      <option key={role.id} value={role.id}>
                        {role.name}
                      </option>
                    ))}
                  </CFormSelect>
                </div>
                <CButton type="submit" color="primary">
                  Assign Role
                </CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default AssignRoles;
