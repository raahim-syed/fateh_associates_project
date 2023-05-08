import ClientForm from "../components/forms/ClientForm"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { useGetClientsQuery } from "../features/client/clientApiSlice"
import { setClient } from "../features/client/clientSlice"

const Client = () => {
  //Getting all clients from store
  const allClients = useSelector(state => state.client) ;
  
  //Getting all clients from database
  const clients = useGetClientsQuery();

  //Setting Up dispatcher
  const dispatch = useDispatch();

  console.log(clients)

  useEffect(() => {

    //dispatch(clients.data);

  }, [])


  return (
    <div>
      <ClientForm />
    </div>
  )
}

export default Client
