import { DetailEvent } from "@/components/detailevent/detailEvent";

export default function page({ params }) {
  return (
    <div>
      <DetailEvent params={params} />
    </div>
  );
}
