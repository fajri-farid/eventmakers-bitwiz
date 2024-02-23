import { BackToDasboard } from "@/components/auth/login/back";
import { Login } from "@/components/auth/login/login";

export default function page() {
  return (
    <div className="m-10 p-10">
      <div>
        <BackToDasboard />
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
}
