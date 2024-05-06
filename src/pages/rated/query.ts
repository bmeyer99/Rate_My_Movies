export const fetchRatedMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/account/21253315/rated/movies?language=en-US&page=1&sort_by=created_at.asc`,
    {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2YyYzFlNmI1NjQwNmUwYzg3MWI3NjM1NjY1ZGEzNyIsInN1YiI6IjY2MzdiYTFmY2FhNTA4MDEyNmY1MWNhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-g5rFKMQplNSzwlpfXnDCpowWgNImAITfjX4sen5yE",
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
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2YyYzFlNmI1NjQwNmUwYzg3MWI3NjM1NjY1ZGEzNyIsInN1YiI6IjY2MzdiYTFmY2FhNTA4MDEyNmY1MWNhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-g5rFKMQplNSzwlpfXnDCpowWgNImAITfjX4sen5yE",
      },
    }
  );
  console.log("Fetching Rated Movies");
  const result = await res.json();
  return result;
};
