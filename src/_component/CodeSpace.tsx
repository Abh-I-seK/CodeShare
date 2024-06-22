"use client"
import CodeMirror from '@uiw/react-codemirror';
import { useState,useCallback } from 'react';
import { Button } from '~/components/ui/button';
import { Copy } from 'lucide-react';
import { materialDark } from '@uiw/codemirror-theme-material';

export default function CodeSpace(props : {code : string}){
    const [code , setCode] = useState<string>(props.code);

    const update = useCallback((val: string) => {
        setCode(val);
    }, []);

    return(
        <div>
            <div className="text-center mb-3">
                <Button onMouseDown={()=> navigator.clipboard.writeText(code)}>Copy <Copy className='w-4 ml-1'/></Button>
            
            </div>
            <CodeMirror height="500px" value={code} onChange={update} theme={materialDark}></CodeMirror>
        </div>  
    )

}