export const rateMovie = async (id: number, rating: number) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/rating`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json;charset=utf-8",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2YyYzFlNmI1NjQwNmUwYzg3MWI3NjM1NjY1ZGEzNyIsInN1YiI6IjY2MzdiYTFmY2FhNTA4MDEyNmY1MWNhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-g5rFKMQplNSzwlpfXnDCpowWgNImAITfjX4sen5yE",
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
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2YyYzFlNmI1NjQwNmUwYzg3MWI3NjM1NjY1ZGEzNyIsInN1YiI6IjY2MzdiYTFmY2FhNTA4MDEyNmY1MWNhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-g5rFKMQplNSzwlpfXnDCpowWgNImAITfjX4sen5yE",
    },
    body: `{"value":${rating}}`,
  });
  const data = await res.json();
  console.log(data);
  return data;
};
