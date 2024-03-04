import { DetailEvent } from "@/components/detailevent/detailEvent";
import { DashHeaderAfter } from "@/components/sharedUI/afterlogin/DashHeaderAfter";

export default function page({ params }) {
  return (
    <div>
      <DashHeaderAfter/>
      <DetailEvent params={params} />
    </div>
  );
}
