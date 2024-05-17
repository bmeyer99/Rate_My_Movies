export const fetchRatedMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/account/21253315/rated/movies?language=en-US&page=1&sort_by=created_at.asc`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_READ_TOKEN}`,
      },
    }
  );
  console.log("Fetching Rated Movies");
  const result = await res.json();
  return result;
};

export const fetchRatedTvShows = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/account/21253315/rated/tv?language=en-US&page=1&sort_by=created_at.asc`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_READ_TOKEN}`,
      },
    }
  );
  console.log("Fetching Rated Movies");
  const result = await res.json();
  return result;
};
