// use-fetch-data.js
import { useEffect, useState } from "react";
import Axios from "axios";

const baseUrl = "https//spotify23.p.rapidapi.com";

const useSearch = () => {
  const [tracks, setTracks] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await Axios.get(
          "https//spotify23.p.rapidapi.com/search/",
          {
            headers: {
              "x-rapidapi-host": "spotify23.p.rapidapi.com",
              "x-rapidapi-key":
                "1d0d520fabmsh22ce54ff5bc398bp150f4djsn9f83b1eb6edd",
            },
            params: {
              q: "great",
              type: "tracks",
              offset: 0,
              limit: "10",
              numberOfTopResults: "5",
            },
          }
        );
        setTracks(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return {
    tracks,
  };
};

export default useSearch;

// const response = await Spotify.get("/search/", {
//   params: {
//   q: searchTerm,
//   type: "tracks",
//   offset: 0,
//   limit: "10",
//   numberOfTopResults: "5",
// },
// });
