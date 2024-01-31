import { useEffect, useState } from "react";

const key = "d9f0b49";
const omdbUrl = `https://www.omdbapi.com/?apikey=${key}&`;

export function useMovies(query) {
  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setLoading(true);
          setError("");
          const res = await fetch(`${omdbUrl}s=${query}`, {
            signal: controller.signal,
          });
          if (!res.ok) {
            throw new Error("internet wonky");
          }
          const data = await res.json();

          if (data.Response === "False") {
            throw new Error("Invalid query String");
          }

          setMovies(data.Search);
          setError("");

          setLoading(false);
        } catch (err) {
          if (err.name !== "AbortError") setError(err.message);
        } finally {
          setLoading(false);
        }
      }
      if (query.length <= 3) {
        setMovies([]);
        setError("");
        return;
      }
      //handleClose();
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, loading, error };
}
