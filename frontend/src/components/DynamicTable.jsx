import {Table} from "react-bootstrap"

export default function DynamicTable({tableHead, tableData}) {
    const keys = Object.keys(tableData[0]);
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        {tableHead.map((head, index) => <th key={index}>{head}</th>)}
      </tr>
    </thead>
    <tbody>
      {tableData.map((data, index) => {
        return (
            <tr key={index}>
                {keys.map((key, index) => {
                    return (
                        <td key={index}>{data[key]}</td>
                    )
                })}
            </tr>
        )
      })}
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan={2}>Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>
  )
}
