import { apiSlice } from "../../app/api/api"


const invoiceApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllInvoices: builder.query({
            query: () => ({
                url: "/dashboard/invoice"
            })
        }),
        getSpecificInvoice: builder.query({
            query: ({id}) => ({
                url: `/dashboard/invoice/info/${id}`
            })
        }),
        addInvoice: builder.mutation({
            query: (body) => ({
                url: "/dashboard/invoice",
                method, "POST",
                body: {...body}
            })
        }),
        updateInvoice: builder.mutation({
            query: ({id, body}) => ({
                url: `/dashboard/invoice/update/${id}`,
                method: "PUT",
                body: {...body}
            })
        }),
        deleteInvoice: builder.mutation({
            query: ({id}) => ({
                url: `/dashboard/invoice/delete/${id}`
            })
        })
    })
})

export const {
    useAddInvoiceMutation,
    useDeleteInvoiceMutation,
    useGetAllInvoicesQuery,
    useGetSpecificInvoiceQuery,
    useUpdateInvoiceMutation
} = invoiceApiSlice