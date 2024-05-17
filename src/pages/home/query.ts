export const fetchMovies = async () => {
  const res = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_READ_TOKEN}`,
    },
  });
  const data = await res.json();
  console.log(data);
  return data;
};

export const fetchTvShows = async () => {
  const res = await fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1", {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_READ_TOKEN}`,
    },
  });
  const data = await res.json();
  console.log(data);
  return data;
};

export const fetchPeople = async () => {
  const res = await fetch("https://api.themoviedb.org/3/person/popular?language=en-US&page=1", {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_READ_TOKEN}`,
    },
  });
  const data = await res.json();
  console.log(data);
  return data;
};
