import { Grid, Header, Loader, Segment, Image, List, Label } from "semantic-ui-react";
import { fetchMovieDetails } from "./query";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const Movie = () => {
  const { id } = useParams<{ id?: string }>();

  const { data, isLoading } = useQuery({
    queryKey: ["movie"],
    queryFn: () => {
      if (!id) {
        throw new Error("TV Show ID is undefined");
      }
      return fetchMovieDetails(id);
    },
  });

  if (!id) {
    return <div>Invalid movie id</div>;
  }

  if (isLoading) {
    return <Loader active />;
  }

  return (
    <div style={{ marginTop: 50 }}>
      <Segment>
        <Header> {data.title} </Header>
        <Grid columns={2} divided textAlign="left" style={{ marginTop: 20 }}>
          <Grid.Row>
            <Grid.Column width={6}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                <Image src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} size="medium" centered />
              </div>
            </Grid.Column>
            <Grid.Column width={10}>
              <List>
                <List.Item>
                  <List.Header>Overview</List.Header>
                  {data.overview}
                </List.Item>
                <List.Item>
                  <List.Header>Genres</List.Header>
                  {data.genres.map((genre: { name: string; id: string }) => (
                    <Label key={genre.id}> {genre.name} </Label>
                  ))}
                </List.Item>
                <List.Item>
                  <List.Header>Release Date</List.Header>
                  {data.release_date}
                </List.Item>
                <List.Item>
                  <List.Header>Rating</List.Header>
                  {data.vote_average}
                </List.Item>
                <List.Item>
                  <List.Header>Runtime</List.Header>
                  {data.runtime} minutes
                </List.Item>
                <List.Item>
                  <List.Header>IMDB Link</List.Header>
                  <a href={`https://www.imdb.com/title/${data.imdb_id}`}>IMDB to {data.title}</a>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};
