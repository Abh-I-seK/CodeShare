"use client"
import CodeMirror from '@uiw/react-codemirror';
import { useState,useCallback } from 'react';
import { Button } from '~/components/ui/button';
import { Copy } from 'lucide-react';
import { materialDark } from '@uiw/codemirror-theme-material';
import { useToast } from '~/hooks/use-toast';

export default function CodeSpace({props} : {props : {code : string}}){
    const [code , setCode] = useState<string>(props.code);
    const { toast } = useToast();

    async function copy(){
        await navigator.clipboard.writeText(code);
        toast({
            title: "Copied 👍",
            description: "Code copied to clipboard !!",
            className: "bg-[#d1d1cf] border-2 border-black",
        });
    }

    const update = useCallback((val: string) => {
        setCode(val);
    }, []);

    return(
        <div>
            <div className="text-center mb-3">
                <Button onMouseDown={copy}>Copy <Copy className='w-4 ml-1'/></Button>
            </div>
            <CodeMirror height="500px" value={code} onChange={update} theme={materialDark}></CodeMirror>
        </div>  
    )

}