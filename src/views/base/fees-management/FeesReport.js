import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
} from '@coreui/react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const FeesReport = () => {
  const [feesData, setFeesData] = useState([
    {
      studentName: 'John Doe',
      feesAmount: 500,
      feeDate: '2024-01-15',
      status: 'Paid',
      course: 'Mathematics',
    },
    {
      studentName: 'Jane Smith',
      feesAmount: 750,
      feesDate: '2024-02-10',
      status: 'Pending',
      course: 'Science',
    },
  ]);

  // Export to CSV
  const handleDownloadCSV = () => {
    const ws = XLSX.utils.json_to_sheet(feesData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Fees Report');
    XLSX.writeFile(wb, 'fees_report.csv');
  };

  // Export to PDF
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ['Student Name', 'Fee Amount', 'Fee Date', 'Status', 'Course'];
    const tableRows = feesData.map((fee) => [
      fees.studentName,
      fees.feeAmount,
      fees.feeDate,
      fees.status,
      fees.course,
    ]);

    doc.text('Fees Report', 14, 16);
    doc.autoTable({
      startY: 20,
      head: [tableColumn],
      body: tableRows,
    });
    doc.save('fees_report.pdf');
  };

  return (
    <div>
      <h1>Fees Report</h1>
      {/* Fees Table */}
      <CRow className="justify-content-center py-4">
        <CCol md={12}>
          <CCard>
            <CCardHeader>
              <h5>Fees List</h5>
              <div className="d-flex gap-2">
                <CButton color="primary" onClick={handleDownloadCSV}>
                  Export CSV
                </CButton>
                <CButton color="danger" onClick={handleDownloadPDF}>
                  Export PDF
                </CButton>
              </div>
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

export default FeesReport;
