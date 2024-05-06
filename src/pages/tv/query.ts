export const fetchTvShowDetails = async (id: string) => {
  const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2YyYzFlNmI1NjQwNmUwYzg3MWI3NjM1NjY1ZGEzNyIsInN1YiI6IjY2MzdiYTFmY2FhNTA4MDEyNmY1MWNhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-g5rFKMQplNSzwlpfXnDCpowWgNImAITfjX4sen5yE",
    },
  });
  return res.json();
};
