
import { createFileRoute } from "@tanstack/react-router";


export const Route = createFileRoute("/profile")({
  component: Profile,
});

function Profile() {


  return (
    <div>
      <h2 >Profile</h2>
    </div>
  );
}
