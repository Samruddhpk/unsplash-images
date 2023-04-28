import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "../context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    // react query caches old reuslts.. so each time searchTerm changes we need to tell react query to call the api again. so searchTerm is in the array of keys.
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });

  // loading
  if (response.isLoading) {
    return (
      <section className="image-container">
        <h2>Loading...</h2>
      </section>
    );
  }

  // error
  if (response.isError) {
    return (
      <section className="image-container">
        <h2>There was an error...</h2>
      </section>
    );
  }

  // not found
  const results = response.data.results;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h2>Not results found...</h2>
      </section>
    );
  }
  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
