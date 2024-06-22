"use client"
import { useState } from "react"
import CodeMirror from '@uiw/react-codemirror';
import React from "react";
import Link from "next/link";
import { createCode } from "~/server/queries";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { materialLight } from "@uiw/codemirror-theme-material";
import { Alert, AlertDescription, AlertTitle  } from "~/components/ui/alert";
import { Terminal, X } from "lucide-react";

export default function Write(){
    const [code, setCode] = useState<string>("");
    const [alertBoolean , setAlertBoolean] = useState<boolean>(false);
    const router = useRouter();
    const onChange = React.useCallback((val: string) => {
        setCode(val);
    }, []);
    
    return(
        <div className="flex flex-col p-5 h-screen bg-[#e6e6e2]">
            {alertBoolean && 
            <Alert className="">
                <Terminal className="h-4 w-4" />
                <div className="flex justify-between">
                    <div>
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                        Write Something!  
                    </AlertDescription>
                    </div>
                    <Button className="p-2 py-1" variant={"ghost"} onMouseDown={()=>{setAlertBoolean(false)}}><X className="h-4 w-4 pt-0" /></Button>
                </div> 
            </Alert>
            }
            <main className="z-1">
            <nav><Link className="font-bold mb-3" href="/">CodeShare.</Link></nav>
            <form action={async()=>{
                if(code.length < 1){
                    setAlertBoolean(true);
                }else{
                    const n = await createCode(code);
                    router.push('/get/'+n.id);
                }
            }}>
            <div className="text-center mb-5">
                <Button type="submit">Submit</Button>
            </div>
            </form>
            <CodeMirror height="500px" onChange={onChange} theme={materialLight}></CodeMirror>
            </main>
        </div>
    )
}

