import Link from "next/link";
import { db } from "~/server/db";
import CodeSpace from "~/_component/CodeSpace";
type Params = {
  pid: number;
};

export default async function Render(context: { params: Params }) {
  const nos = parseInt(context.params.pid + "");
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
        <CodeSpace code={resp}></CodeSpace>
      </div>
    </div>
  );
}
