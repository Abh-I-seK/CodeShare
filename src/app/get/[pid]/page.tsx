import Link from "next/link";
import { db } from "~/server/db";
import CodeSpace from "~/_component/CodeSpace";
type Params = Promise<{pid:string}>;

export default async function Render({ params }: { params: Params }) {
    const pid = await params;
    const nos = parseInt(pid + ""); 
  const c = await db.codes.findUnique({
    where: {
      id: nos,
    },
  });
  const resp = c?.code + "";
  return (
    <div className="h-screen bg-[#e6e6e2] p-5">
      <nav>
        <Link className="mb-3 font-bold" href="/">
          CodeShare.
        </Link>
      </nav>
      <div className="align-left m-3">
        <CodeSpace props={{code:resp}}></CodeSpace>
      </div>
    </div>
  );
}
