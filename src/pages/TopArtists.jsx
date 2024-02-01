import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import { Error, Loader, ArtistCard } from "../components";
import { useGetAlbumListQuery } from "../redux/services/shazamCore";

const TopArtists = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetAlbumListQuery();

  if (isFetching) return <Loader title={"Loading top charts"} />;

  //   if (err) return <Error />;
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Top Artists
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.data?.map((track) => (
          <ArtistCard key={track._id} track={track} />
        ))}
      </div>
    </div>
  );
};
export default TopArtists;
