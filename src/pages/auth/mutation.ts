export const mutationLogin = async () => {
  const res = await fetch("https://api.themoviedb.org/3/authentication/guest_session/new", {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_READ_TOKEN}`,
    },
  });
  const data = await res.json();
  console.log(data);
  localStorage.setItem("guest_session_id", data.guest_session_id);
  return data;
};
