import React, { useState, useContext, useEffect } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";

import { studentsData, studentsGrid } from "../data/dummy";
import { Header } from "../components";
import db from "../firebase";
const Students = () => {
  const selectionsettings = { persistSelection: true };
  // const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    console.log(usersData);
    const a = usersData.map((user) => {
      console.log(user);
    });
    console.log(a);
  }, [usersData]);

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      console.log(snapshot.docs);
      setUsersData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    console.log(usersData);
  }, []);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Students" />
      <GridComponent
        dataSource={studentsData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        // toolbar={toolbarOptions}

        allowSorting
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {studentsGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}

          {/* <table>
          <tr>
            <th>NAME</th>
            <th>PASSWORD</th>
          </tr>
  
          {customersData?.map(({ id, data }) => (
            <tr key={id}>
              <td>{data.name}</td>
              <td>{data.password}</td>
            </tr>
          ))}
        </table> */}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Students;
