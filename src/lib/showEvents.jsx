export const ShowEvents = ({ data }) => {
  return (
    <main>
      <h1>hello</h1>
      {data.map((event) => (
        <div key={event.id}>
          <h2>{event.events.title}</h2>
          <p>{event.events.description}</p>
        </div>
      ))}
    </main>
  );
};
