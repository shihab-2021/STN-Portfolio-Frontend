import { toast } from "sonner";
import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
  createApi,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_API,
  credentials: "include",
  prepareHeaders: (headers) => {
    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
> = async (args, api, extraOptions): Promise<any> => {
  const result = await baseQuery(args, api, extraOptions);

  // More comprehensive error handling
  if (result?.error) {
    switch (result.error.status) {
      case 404:
        toast.error(`404: Server not found!`);
        break;
      case 401:
        try {
          toast.error(`Something went wrong!`);
        } catch (error) {
          console.error("Token refresh error:", error);
        }
        break;
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: [
    "users",
    "profile",
    "blogs",
    "blog",
    "projects",
    "project",
    "messages",
    "message",
    "dashboardState",
  ],
  endpoints: () => ({}),
  keepUnusedDataFor: 30, // Keep unused data for 30 seconds
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
});
