import UmbrellaForm from "../components/forms/UmbrellaFrom"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useGetAllUmbrellasQuery } from "../features/umbrella/umbrellaApiSlice";
import { setUmbrellas } from "../features/umbrella/umbrellaSlice";

const Umbrella = () => {
  //Getting State From Store
  const allUmbrella = useSelector(state => state.candidate);

  //Dispacther
  const dispatch = useDispatch()

  //Getting Candidates from Databse
  const umbrellas = useGetAllUmbrellasQuery();

  console.log(umbrellas)

  useEffect(() => {
    //Updating Store
    dispatch(setUmbrellas(umbrellas.data))
  }, [])
  
  return (
    <div>
      <UmbrellaForm />
    </div>
  )
}

export default Umbrella
