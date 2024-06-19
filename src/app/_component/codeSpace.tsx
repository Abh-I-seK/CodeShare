import { Button } from "~/components/ui/button";
import { createCode } from "~/server/queries";


type Props = {
    code : string   ,
    fn : (code : number) => void
}

export default function CodeSpace(props : Props){
    return(
        <Button onClick={async ()=>{const n = await createCode(props.code); props.fn(n.id)}}>Create Snippet</Button>     
    )
}