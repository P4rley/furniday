"use client";

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";

import { UploadButton } from "@/utils/uploadthing";
import { useState } from "react";

export default function UploadImage() {
  const [file, setFile] = useState<
    | {
        fileUrl: string;
        fileKey: string;
      }[]
    | undefined
  >([]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          setFile(res);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />

      <p>{JSON.stringify(file)}</p>
    </main>
  );
}
