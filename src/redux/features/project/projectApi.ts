import { baseApi } from "@/redux/api/baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProject: builder.query({
      query: () => ({
        url: "/projects",
        method: "GET",
      }),
      providesTags: ["projects"],
    }),
    getSingleProjectDetails: builder.query({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "GET",
      }),
      providesTags: ["project"],
    }),
  }),
});

export const { useGetAllProjectQuery, useGetSingleProjectDetailsQuery } =
  projectApi;
