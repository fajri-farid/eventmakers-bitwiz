import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Card = ({ id, image, title, date }) => {
  const router = useRouter();

  router.refresh();
  const onErrorHandler = (event) => {
    event.target.onerror = null;
    event.target.src = "/gambar.webp"; // Ganti dengan URL gambar placeholder Anda
  };
  return (
    <div className="card bg-base-100 shadow-xl image-full">
      <figure>
        <Image
          src={image}
          fill={true}
          alt="event-img"
          unoptimized={true}
          className="object-fill rounded-2xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title overflow-hidden text-ellipsis line-clamp-1 ">
          {title}
        </h2>
        <p>{date}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-xs btn-accent">See More</button>
        </div>
      </div>
    </div>
  );
};
