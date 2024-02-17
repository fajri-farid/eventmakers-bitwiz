export const ShowEvents = ({ data }) => {
  return (
    <main className="space-y-2 p-5">
      {data.map((event) => (
        <div key={event.id}>
          <img
            src={event.events.image}
            alt={event.events.title}
            className="w-full h-auto max-w-[600px] max-h-[300px] object-cover"
          />
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
