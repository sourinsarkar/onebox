import { Auth } from "./(auth)/layout";
import { Signup } from "./(auth)/signup/page";

export default function Home() {
  return (
    <div>
      <Auth>
        <Signup />
      </Auth>
    </div>
  );
}
