import CandidateForm from "../components/forms/CandidateForm"
import DynamicTable from "../components/DynamicTable"

export default function Candidate() {

  const tableHead = ["Name", "NIN", "Email", "Umbrella","Client","Something"]

  const candidateData = [
    {
      name: "Raahim",
      NIN_Number: 123456,
      email: "syedraahim24@gmail.com",
      umbrella: "salar",
      client: "mahad",
      something: ""
    },
    {
      name: "Hannaan",
      NIN_Number: 1234223256,
      email: "hannaan@gmail.com",
      umbrella: "salar",
      client: "raahim"
    },
  ]
  return (
    <>
      <h1>All Candidates</h1>
      <DynamicTable tableHead={tableHead} tableData={candidateData} />
    </>
  )
}
