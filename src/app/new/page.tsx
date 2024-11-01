"use client";
import { useState, useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import React from "react";
import Link from "next/link";
import { createCode } from "~/server/queries";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { materialLight } from "@uiw/codemirror-theme-material";
import { useFormStatus } from "react-dom";
import { useToast } from "../../hooks/use-toast";

export default function Write() {
  const [code, setCode] = useState<string>("");
  const router = useRouter();
  const { toast } = useToast();
  const onChange = useCallback((val: string) => {
    setCode(val);
  }, []);

  return (
    <div className="flex h-screen flex-col bg-[#e6e6e2] p-5">
      <main className="z-1">
        <nav>
          <Link className="mb-3 font-bold" href="/">
            CodeShare.
          </Link>
        </nav>
        <form
          action={async () => {
            if (code.length < 1) {
              toast({
                title: "Error",
                description: "Cannot Submit empty code.",
                variant: "destructive",
              });
            } else {
              const n = await createCode(code);
              router.push("/get/" + n.id);
            }
          }}
        >
          <div className="mb-5 text-center">
            <SubmitButton />
          </div>
        </form>
        <CodeMirror
          height="500px"
          onChange={onChange}
          theme={materialLight}
        ></CodeMirror>
      </main>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return <Button type="submit">{pending ? "Submitting..." : "Submit"}</Button>;
}
