import { apiSlice } from "../../app/api/api";

const clientApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        //Get Requests
        getClients: builder.query({
            query: () => ({
                url: "/dashboard/client"
            })
        }),
        getSpecificClient: builder.query({
            query: ({id}) => ({
                url: "/dashboard/client/info/" + id,
                params: id
            })
        }),
        //Post/Update/Delete Requests
        addClient: builder.mutation({
            query: (body) => ({
                url: "/dashboard/client",
                method: "POST",
                body,
            })
        }),
        updateClient: builder.mutation({
            query: ({id, body}) => ({
                url: "/dashboard/client/update/" + id,
                method: "PUT",
                body,
            })
        }),
        deleteClient: builder.mutation({
            query: ({id}) => ({
                url: "/dashboard/client/dlete/" + id,
                method: "DELETE",
                params: id
            })
        })
    })
})

export const {
    useGetClientsQuery,
    useDeleteClientMutation,
    useGetSpecificClientQuery,
    useUpdateClientMutation,
    useAddClientMutation,
} = clientApiSlice