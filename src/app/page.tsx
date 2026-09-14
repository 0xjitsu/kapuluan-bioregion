import { organizations } from "@/data/organizations";
import HomeClient from "@/components/HomeClient";

export default function HomePage() {
  return <HomeClient organizations={organizations} />;
}
