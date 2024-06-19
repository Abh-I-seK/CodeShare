
import { Button } from "~/components/ui/button";
import { db } from "~/server/db";
import CodeMirror from '@uiw/react-codemirror';
import Link from "next/link";

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
    console.log(resp);
    return(
        <div className="h-screen p-5 bg-[#e6e6e2]">
            <nav><Link className="font-bold mb-3" href="/">CodeShare.</Link></nav>
            {/* <div className="flex justify-center m-2 mb-4"> <Button onClick={()=>{navigator.clipboard.writeText(resp + "")}}>Copy</Button> </div> */}
            <div className="text-center align-left">{resp}</div> 
        </div>
    )
}