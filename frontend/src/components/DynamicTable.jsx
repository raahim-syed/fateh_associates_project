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
    </tbody>
  </Table>
  )
}
