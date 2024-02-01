import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://academics.newtonschool.co/api/v1",
    prepareHeaders: (headers) => {
      headers.set("projectId", "f104bi07c490");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    listOfMusic: builder.query({ query: () => "/music/song" }),
    getSongByGenre: builder.query({
      query: (genre) => `/music/song?filter={"mood":"${genre}"}`,
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/music/album?filter={"_id":${songid}}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `/music/artist?filter={"_id":${songid}}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `/artists/details?filter{'_id':${artistId}}`,
    }),
    getSongsByCountry: builder.query({
      query: (countryCode) => `/charts/country?country_code=${countryCode}`,
    }),
    getAlbumList: builder.query({
      query: () => `/music/album`,
    }),
    getSongsBySearch: builder.query({
      query: (searchTerm) => `/music/song?filter={"title":"${searchTerm}"}`,
    }),
  }),
});

export const {
  useListOfMusicQuery,
  useGetSongByGenreQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetAlbumListQuery,
  useGetTopChartsQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;
