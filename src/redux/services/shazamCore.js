import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '943379c6c6msha606b98f1f25574p18c857jsn58fdb43c8460',
//       'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '943379c6c6msha606b98f1f25574p18c857jsn58fdb43c8460');
        
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => 'v1/charts/world'}),
        // getSongsByGenre: builder.query({ query: () => ``}),
        // getSongsByCountry: builder.query({ query: () => ``}),
        // getSongsBySearch: builder.query({ query: () => ``}),
        // getArtistDetails: builder.query({ query: () => ``}),
        getSongDetails: builder.query({ query: ({ songid }) => `v1/tracks/details?track_id=${songid}`}),
        getSongRelated: builder.query({ query: ({ songid }) => `v1/tracks/related?track_id=${songid}`})
    })
});

export const {
    useGetTopChartsQuery,
    // useGetSongsByGenreQuery,
    // useGetSongsByCountryQuery,
    // useGetSongsBySearchQuery,
    // useGetArtistDetailsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery
} = shazamCoreApi;