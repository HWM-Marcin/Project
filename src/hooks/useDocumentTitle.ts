import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

export function useDocumentTitle(title: string | undefined): [string | undefined, Dispatch<SetStateAction<string | undefined>>] {
  const [doctitle, setDocTitle] = useState(title);
  useEffect(() => {
    if (doctitle) {
      document.title = doctitle;
    }
  }, [doctitle]);
  useEffect(() => {
    if (title) {
      setDocTitle(title)
    }
  }, [title]);
  return [doctitle, setDocTitle];
}
