import CandidateForm from "../components/forms/CandidateForm"
import DynamicTable from "../components/DynamicTable"

//Query
import { useGetCandidatesQuery } from "../features/candidates/candidateApiSlice"

import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { setCandidateData } from "../features/candidates/candidatesSlice"

export default function Candidate() {

  //Getting State From Store
  const allCandidates = useSelector(state => state.candidate);

  //Dispacther
  const dispatch = useDispatch()

  //Getting Candidates from Databse
  const candidates = useGetCandidatesQuery();

  console.log(candidates)

  useEffect(() => {
    //Updating Store
    dispatch(setCandidateData({name: "raahim"}))
    
    // dispatch(setCandidateData(candidates.data.data))
  }, [])


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

      <br />

      <CandidateForm />
    </>
  )
}
