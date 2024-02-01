import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import {
  useGetAlbumListQuery,
  useGetSongsByCountryQuery,
} from "../redux/services/shazamCore";

const CountryTracks = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  //   const { data, isFetching, error } = useGetSongsByCountryQuery(country);
  const { data, isFetching, error } = useGetAlbumListQuery();
  useEffect(() => {
    axios
      .get(
        "https://geo.ipify.org/api/v1?apiKey=at_DN2GU99tI2iSY1fFxs5ysbOhkDyPo"
      )
      .then((res) => setCountry(res?.data?.location?.country))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [country]);

  //   if (isFetching && loading)
  //     return <Loader title={"Loading songs around you"} />;

  //   if (err && country) return <Error />;
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Around You
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};
export default CountryTracks;
