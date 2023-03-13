import { apiSlice } from "../../app/api/api";

const umbrellaApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllUmbrellas: builder.query({
            query: () => ({url: "/dashboard/umbrella"})
        }),
        addUmbrella: builder.mutation({
            query: (body) => ({
                url: "dashboard/umbrella",
                method: "POST",
                body,
            })
        }),
        getSpecificUmbrella: builder.query({
            query: ({id}) => ({
                url: `dashboard/umbrella/${id}`,
            })
        }),
        deleteUmbrella: builder.mutation({
            query: ({id}) => ({
                url: `dashboard/umbrella/${id}`,
                method: "DELETE",
            })
        }),
        updateUmbrella: builder.mutation({
            query: ({id, data}) => ({
                url: `dashboard/umbrella/${id}`,
                method: "POST",
                body: data
            })
        }),
    })
})


export const {
    useGetAllUmbrellasQuery,
    useAddUmbrellaMutation,
    useGetSpecificUmbrellaQuery,
    useDeleteUmbrellaMutation,
    useUpdateUmbrellaMutation
} = umbrellaApiSlice;