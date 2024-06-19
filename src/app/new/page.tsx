"use client"
import { useEffect, useState } from "react"
import CodeMirror from '@uiw/react-codemirror';
import React from "react";
import Link from "next/link";
import CodeSpace from "../_component/codeSpace";
import { useRouter } from "next/navigation";

export default function Write(){
    const [code, setCode] = useState<string>("");
    const [id , setId]= useState<number>(-1);

    const router = useRouter();
    const onChange = React.useCallback((val: string) => {
        setCode(val);
    }, []);
    
    useEffect(()=>{
        if(id>-1){
            router.push('/get/'+id);
        }
        console.log(id);
    });

    return(
        <div className="flex flex-col p-5 h-screen bg-[#e6e6e2]">
            <nav><Link className="font-bold mb-3" href="/">CodeShare.</Link></nav>
            <div className="text-center mb-5">
                <CodeSpace code={code} fn={setId}/>
            </div>
            <CodeMirror height="500px" onChange={onChange}></CodeMirror>
        </div>
    )
}

