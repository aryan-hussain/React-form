import React from "react";
import {useSelector} from "react-redux";
import "./ShowDataTable.css";

const ShowDataTable = () => {
  const {users} = useSelector((state) => state);
  console.log(users);
  return (
    <section id="ShowDataTable">
      <div className="container">
        <div className="ShowDataTable">
          <table>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Skills</th>
              <th>Experience</th>
              <th>Immediate Joiner</th>
            </tr>
            {users?.map((item) => {
              return (
                <tr>
                  <td>{item?.firstName}</td>
                  <td>{item?.lastName}</td>
                  <td>
                    {item?.skills?.map((skills) => (
                      <li>{skills}</li>
                    ))}
                  </td>
                  <td>
                    {item?.experience === "yes" ? "1 Year" : "Not 1 Year"}
                  </td>
                  <td>{item?.immediateJoiner}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </section>
  );
};

export default ShowDataTable;
