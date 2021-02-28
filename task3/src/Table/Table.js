import React from 'react';

const Table = (props) => {
  return(
    <table className="table" style={{ cursor: "pointer" }}>
    <thead>
      <tr>
      <th>
           ID{" "}
        </th>
        <th>
           Name{" "}
        </th>
        <th>
           Country{" "}
        </th>
        <th>
           Web-pages{" "}
        </th>
        <th>
          Domains{" "}
        </th>
        
      </tr>
    </thead>
    <tbody>
      {props.data.map(item => (
        <tr
          key={item.name }
        >
           <td>{item.id}</td> 
          <td>{item.country}</td>
          <td>
            <a href='./'>
            {item.web_pages}
            </a>
            </td>
          <td>{item.domains}</td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default Table;
