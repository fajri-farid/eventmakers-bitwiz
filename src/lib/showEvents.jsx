export const ShowEvents = ({ data }) => {
  return (
    <main className="space-y-2 flex justify-between">
      {data.map((event) => (
        <div key={event.id}>
          <img src={event.events.image} alt={event.events.title} />
          <div className="pt-10">
            <h2>{event.events.title}</h2>
            <p>{event.events.description}</p>
            <p className="font-bold">price: Rp. 100.000</p>
          </div>
        </div>
      ))}
    </main>
  );
};
