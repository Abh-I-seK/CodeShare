"use server";
import { db } from "./db";


export async function getCode(id: number){
    const m = await db.codes.findUnique({where:{id}});
    if(m){
        return m.code;
    }
    return "";
}

export async function createCode(code : string){
    return await db.codes.create({data:{code:code}});
}
