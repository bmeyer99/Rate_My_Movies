export const mutationLogin = async () => {
    const res = await fetch(
        'https://api.themoviedb.org/3/authentication/guest_session/new',
        {
            headers: {
                Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2YyYzFlNmI1NjQwNmUwYzg3MWI3NjM1NjY1ZGEzNyIsInN1YiI6IjY2MzdiYTFmY2FhNTA4MDEyNmY1MWNhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-g5rFKMQplNSzwlpfXnDCpowWgNImAITfjX4sen5yE"
            },
        }
    );
    const data = await res.json();
    console.log(data);
    localStorage.setItem("guest_session_id", data.guest_session_id);
    return data;
};
