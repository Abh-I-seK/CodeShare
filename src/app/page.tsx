import { ChevronsLeftRight } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex items-center justify-center h-screen flex-col bg-[#e6e6e2]">
        <div className="mx-auto text-2xl"><b>CodeShare.</b></div>
        <div className="mx-auto mt-8">
        <Link href="new">
        <Button variant="outline">
          Get Started  
          <ChevronsLeftRight  className="h-4 w-4 ml-1" />
        </Button>
        </Link>
        </div>
    </main>
  );
}
