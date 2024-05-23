import React from "react";
import styled from "styled-components";
import { Table } from "antd";
import { TableProps, ColumnsType } from "antd/lib/table";

// Define the TransactionType interface
interface TransactionType {
  id: string;
  paymentType: string;
  transactionType: string;
  transactionDate: string;
  amount: number;
  paymentStatus: string;
}

// Define your columns
const columns: ColumnsType<TransactionType> = [
  {
    title: "ID кредита",
    dataIndex: "id",
    key: "id",
    width: 150,
  },
  {
    title: "Тип оплаты",
    dataIndex: "paymentType",
    key: "paymentType",
    width: 150,
  },
  {
    title: "Тип платежа",
    dataIndex: "transactionType",
    key: "transactionType",
    width: 150,
  },
  {
    title: "Дата транзакции",
    dataIndex: "transactionDate",
    key: "transactionDate",
    width: 150,
  },
  {
    title: "Сумма",
    dataIndex: "amount",
    key: "amount",
    width: 100,
  },
  {
    title: "Статус платежа",
    dataIndex: "paymentStatus",
    key: "paymentStatus",
    width: 150,
  },
  // Define other columns...
];

// Define your data
const data: TransactionType[] = [
  {
    id: "1",
    paymentType: "Credit Card",
    transactionType: "Purchase",
    transactionDate: "2024-04-28",
    amount: 100.5,
    paymentStatus: "Completed",
  },
  {
    id: "2",
    paymentType: "Credit Card",
    transactionType: "Purchase",
    transactionDate: "2024-04-28",
    amount: 100.5,
    paymentStatus: "Completed",
  },
  {
    id: "3",
    paymentType: "Credit Card",
    transactionType: "Purchase",
    transactionDate: "2024-04-28",
    amount: 100.5,
    paymentStatus: "Completed",
  },
  {
    id: "4",
    paymentType: "Credit Card",
    transactionType: "Purchase",
    transactionDate: "2024-04-28",
    amount: 100.5,
    paymentStatus: "Completed",
  },
  {
    id: "5",
    paymentType: "Credit Card",
    transactionType: "Purchase",
    transactionDate: "2024-04-28",
    amount: 100.5,
    paymentStatus: "Completed",
  },
  {
    id: "6",
    paymentType: "Credit Card",
    transactionType: "Purchase",
    transactionDate: "2024-04-28",
    amount: 100.5,
    paymentStatus: "Completed",
  },
  {
    id: "7",
    paymentType: "Credit Card",
    transactionType: "Purchase",
    transactionDate: "2024-04-28",
    amount: 100.5,
    paymentStatus: "Completed",
  },
  {
    id: "8",
    paymentType: "Credit Card",
    transactionType: "Purchase",
    transactionDate: "2024-04-28",
    amount: 100.5,
    paymentStatus: "Completed",
  },
  {
    id: "9",
    paymentType: "Credit Card",
    transactionType: "Purchase",
    transactionDate: "2024-04-28",
    amount: 100.5,
    paymentStatus: "Completed",
  },
  {
    id: "10",
    paymentType: "Credit Card",
    transactionType: "Purchase",
    transactionDate: "2024-04-28",
    amount: 100.5,
    paymentStatus: "Completed",
  },
  {
    id: "11",
    paymentType: "Credit Card",
    transactionType: "Purchase",
    transactionDate: "2024-04-28",
    amount: 100.5,
    paymentStatus: "Completed",
  },
  {
    id: "12",
    paymentType: "Credit Card",
    transactionType: "Purchase",
    transactionDate: "2024-04-28",
    amount: 100.5,
    paymentStatus: "Completed",
  },
  // Define other data entries...
];

// Define the type for the columns prop
interface StyledTableProps extends TableProps<TransactionType> {
  columns: ColumnsType<TransactionType>;
}

// Create a styled component wrapper for the Table component
const StyledTable = styled((props: StyledTableProps) => <Table {...props} />)`
  .ant-pagination {
    display: none;
  }
  th {
    background: white !important;
    border-bottom: 1px solid #f0f0f0 !important;
    border-radius: 0;
    color: #718096 !important;
    font-family: ALSMedium, sans-serif;
    font-size: 12px;
  }
  th:before {
    display: none;
  }
  td {
    background: none !important;
    border: none !important;
  }
  tr:nth-child(odd) {
    background: #fafafa;
  }
  tr:nth-child(even) {
    background: white;
  }
  tr:hover {
    background: #f5f5f5;
  }
`;

const TransactionTable: React.FC = () => (
  <StyledTable columns={columns} dataSource={data} />
);

export default TransactionTable;
