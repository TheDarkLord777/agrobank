import { Table } from "antd";
import styled from "styled-components";

export const AntTableStyled = styled(Table)`
  height: 100%;

  /* Position pagination options */
  .ant-pagination-options {
    position: absolute;
    left: 0;
  }

  /* Set max height for table body */
  .ant-table-body {
    max-height: 100%;
  }
  .ant-table-header {
    border-radius: 0;
  }

  /* Set height for table wrapper */
  .ant-table-wrapper {
    height: 50%;
  }

  /* Sticky header */
  .ant-table-thead {
    position: sticky;
    top: 0;
    z-index: 1;
  }

  /* Pagination styles */
  .ant-pagination {
    background: white;
    padding-top: 14px;
    padding-bottom: 24px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    margin: 0 !important;
  }
  th {
    background: white !important;
    border-bottom: 1px solid #f0f0f0 !important;
    border-radius: 0;
    color: #718096 !important;
    font-family: ALSBold, sans-serif;
    font-size: 14px;
  }
  th:before {
    display: none;
  }
  td {
    background: none !important;
    border: none !important;
  }
  tr:nth-child(even) {
    background: #fafafa;
  }
  tr:nth-child(odd) {
    background: white;
  }
  /* Customize select option item */
  .ant-select-selection-item {
    font-family: ALSMedium, sans-serif;
    color: #111827;
  }

  /* Customize pagination item color */
  .ant-pagination-item {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    width: 40px;
    height: 40px;

    background: white; /* Background color */
    color: #a0aec0; /* Text color */
  }
  .ant-pagination-item-active {
    background: #e7f7ef; /* Background color */
    border: none;
  }
  .ant-pagination-item-active a {
    color: #00cd69 !important; /* Text color */
    outline: none;
  }
  .ant-pagination-prev,
  .ant-pagination-next {
    margin-top: auto;
    margin-bottom: auto;
  }
  .ant-select-selection-search {
    display: none;
  }
  .ant-select-selection-item {
    font-family: ALSBold, sans-serif;
    color: black;
    font-size: 14px;
  }
  .ant-select-selector {
    cursor: pointer !important;
  }
  tr:hover {
    background: #f5f5f5;
  }
`;
