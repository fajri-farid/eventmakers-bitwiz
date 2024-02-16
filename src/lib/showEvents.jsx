export const ShowEvents = ({ data }) => {
  return (
    <main>
      <h1>hello</h1>
      {data.map((event) => (
        <div key={event.id}>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </div>
      ))}
    </main>
  );
};
