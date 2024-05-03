import { chainTimeToMilliseconds } from "@/app/utils";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import SendMessageButton, { Nft } from "./SendMessageButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SendMessageSection(props: {
  nft?: Nft;
  disabled?: boolean;
}) {
  const [message, setMessage] = useState("");
  return (
    <div className="flex flex-col items-center justify-between w-full">
      <Textarea
        placeholder="Enter message to send..."
        contentEditable
        onChange={(e) => {
          const txt = e.target.value;
          setMessage(txt);
        }}
        value={message}
        disabled={props.disabled}
      />
      <div className="m-1" />
      <SendMessageButton
        nft={props.nft}
        className="w-full"
        message={message}
        topic="default"
        onTransactionConfirmed={() => {
          setMessage("");
        }}
        disabled={props.disabled}
      />
    </div>
  );
}
