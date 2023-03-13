import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import SpecialityForm from "../components/forms/SpecialityForm"
import {  setSpecialities } from "../features/specialities/specialitySlice";
import { useGetSpecialitiesQuery } from "../features/specialities/spicialityApiSlice";

const Speciality = () => {
    //State
    const allSpecialities = useSelector((state) => state.specialities)

    //Dispatcher
    const dispatch = useDispatch();

    //Query Hooks
    const specialities = useGetSpecialitiesQuery();

    console.log(specialities)
    useEffect(() => {
      updateStore();
    }, [])

    //Functions
    const updateStore = () => {
      if(specialities.data.specialities){
        dispatch(setSpecialities(specialities.data.specialities))
      } else{
        dispatch(setSpecialities({}))
      }
    }

  return (
    <div>
      <SpecialityForm />
    </div>
  )
}

export default Speciality
