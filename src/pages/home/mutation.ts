export const rateMovie = async (id: number, rating: number) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/rating`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${import.meta.env.VITE_API_READ_TOKEN}`,
    },
    body: `{"value":${rating}}`,
  });
  const data = await res.json();
  console.log(data);
  return data;
};

export const rateTvShow = async (id: number, rating: number) => {
  const res = await fetch(`https://api.themoviedb.org/3/tv/${id}/rating`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json;charset=utf-8",
      Authorization: `Bearer ${import.meta.env.VITE_API_READ_TOKEN}`,
    },
    body: `{"value":${rating}}`,
  });
  const data = await res.json();
  console.log(data);
  return data;
};
