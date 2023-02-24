import { apiSlice } from "../../app/api/api";

const specialitiesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getSpecialities: builder.query({
            query: () => ({url: "/dashboard/specialities"})
        }),
        addSpeciality: builder.mutation({
            query: (body) => ({
                url: "dashboard/specialities",
                method: "POST",
                body,
            })
        }),
        getSpecificSpeciality: builder.query({
            query: ({id}) => ({
                url: `dashboard/specialities/${id}`,
            })
        }),
        deleteSpeciality: builder.mutation({
            query: ({id}) => ({
                url: `dashboard/specialities/${id}`,
                method: "DELETE",
            })
        }),
        addSpeciality: builder.mutation({
            query: ({id, data}) => ({
                url: `dashboard/specialities/${id}`,
                method: "POST",
                body: data
            })
        }),
    })
})