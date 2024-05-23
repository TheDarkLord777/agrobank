import React, { useEffect, useState } from "react";
import type { GetProp, TableProps } from "antd";
import qs from "qs";
import { AntTableStyled } from "./AntTable.styled.ts";

type TablePaginationConfig = Exclude<
  GetProp<TableProps, "pagination">,
  boolean
>;

interface DataType {
  name: {
    first: string;
    last: string;
  };
  gender: string;
  email: string;
  login: {
    uuid: string;
  };
}

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Parameters<GetProp<TableProps, "onChange">>[1];
}

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (name: DataType["name"]) => `${name.first} ${name.last}`,
    width: "3%",
    fixed: true,
  },
  {
    title: "Gender",
    dataIndex: "gender",
    width: "3%",
    fixed: true,
  },
  {
    title: "Email",
    dataIndex: "email",
    width: "4%",
    fixed: true,
  },
  {
    title: "Login",
    dataIndex: "login",
    width: "15%",
  },
];

const getRandomuserParams = (params: TableParams) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const AntTable: React.FC = () => {
  const [data, setData] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`,
    )
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200,
          },
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);

  const handleTableChange: TableProps["onChange"] = (
    pagination,
    filters,
    sorter,
  ) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  return (
    <AntTableStyled
      columns={columns}
      rowKey={(record) => record.login.uuid}
      dataSource={data}
      pagination={{
        ...tableParams.pagination,
        showSizeChanger: true,
        pageSizeOptions: [
          "10",
          "20",
          "30",
          "40",
          "50",
          "60",
          "70",
          "80",
          "90",
          "100",
        ],
      }}
      loading={loading}
      onChange={handleTableChange}
      scroll={{ y: 300, x: 1300 }}
    />
  );
};
export default AntTable;
