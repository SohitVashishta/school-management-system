import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logoWithText from 'src/assets/brand/Logo-with-text.png'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCardTitle,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CAlert,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleLogin = () => {
    if (!email || !password) {
      setError('Email and password are required.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      console.log('Login successful');
      navigate('/dashboard') // Navigate to the dashboard page
    }
    
   
  };
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center m-4"  >
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCardGroup>
              <CCard className="py-3">
                <CCardTitle className='text-center'>
                  <img src={open ? logoWithText : logo} lt={open ? 'logo with text' : 'logo'} height={60} />
                </CCardTitle>
                <CCardBody>
                  <CForm>
                    {error && <CAlert color="danger">{error}</CAlert>}
                    <h3 className='text-center'>Admin Login</h3>

                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mb-3" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mb-3"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol className='text-center'>
                        <CButton color="primary" className="px-4" onClick={handleLogin}>
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>

            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
