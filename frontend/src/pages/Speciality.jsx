import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import SpecialityForm from "../components/forms/SpecialityForm"
import { setSpeciality } from "../features/specialities/specialitySlice";
import { useGetSpecialitiesQuery } from "../features/specialities/spicialityApiSlice";

const Speciality = async () => {
    //Getting Specialities from store
    const allSpecialities = useSelector(state => state.speciality)

    //Dispatcher
    const dispatch = useDispatch();

    //Getting data from databse
    const specialities = useGetSpecialitiesQuery();

    const { isError } = specialities;

    console.log(specialities)

    useEffect(() => {
      updateStore();
    }, [])

    //Updating store with database data
    const updateStore = () => {
      if(!isError){
       // dispatch(setSpeciality(speciality))
      }
    }

  return (
    <div>
      {/* <SpecialityForm /> */}
    </div>
  )
}

export default Speciality
