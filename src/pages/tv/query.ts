export const fetchTvShowDetails = async (id: string) => {
  const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_READ_TOKEN}`,
    },
  });
  return res.json();
};
