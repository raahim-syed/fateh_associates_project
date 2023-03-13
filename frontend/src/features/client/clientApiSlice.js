import { apiSlice } from "../../app/api/api";

const clientApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getClients: builder.query({
            query: () => ({
                url: "/dashboard/client"
            })
        }),
        addClient: builder.mutation({
            query: (body) => ({
                url: "/dashboard/client",
                method: "POST",
                body,
            })
        }),
        getSpecificClient: builder.query({
            query: ({id}) => ({
                url: "/dashboard/client/info/" + id,
                params: id
            })
        }),
        updateClient: builder.mutation({
            query: ({id, body}) => ({
                url: "/dashboard/client/update/" + id,
                method: "PUT",
                body,
            })
        }),
        deleteClient: builder.query({
            query: ({id}) => ({
                url: "/dashboard/client/dlete/" + id,
                method: "DELETE",
                params: id
            })
        })
    })
})