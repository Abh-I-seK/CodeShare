import Link from "next/link";
import CodeSpace from "~/app/_component/CodeSpace";
import { db } from "~/server/db";

type Params = {
    pid: number
}

export default async function Render(context: { params: Params}){
    const nos = parseInt(context.params.pid+"");
    const c = await db.codes.findUnique({
        where:{
            id:nos
        }
    });
    const resp = c?.code + "";
    return(
        <div className="h-screen p-5 bg-[#e6e6e2]">
            <nav><Link className="font-bold mb-3" href="/">CodeShare.</Link></nav>
            <div className="align-left m-3">
               <CodeSpace code={resp}></CodeSpace>  
            </div>
        </div>
    )
}