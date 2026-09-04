"use client"

import { useEffect, useState } from "react";



function useLocalStorage<T>(storageKey: string, fallbackState: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(fallbackState);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored !== null) {
        setValue(JSON.parse(stored) as T);
      }
    } catch (error) {
      console.error(`Fehler beim Lesen von LocalStorage für "${storageKey}"`, error);
    }
  }, [storageKey]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      window.localStorage.setItem(storageKey, JSON.stringify(value));
    } catch (error) {
      console.error(`Fehler beim Schreiben von LocalStorage für "${storageKey}"`, error);
    }
  }, [storageKey, value]);

  return [value, setValue];
}

export default useLocalStorage;

