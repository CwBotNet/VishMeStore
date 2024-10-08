"use client"


import { Modal } from "@/components/ui/modal";
import { useStoreModel } from "@/hooks/use-store-model";
import { useEffect } from "react";

export default function SetupPage() {
  const onOpen = useStoreModel((state) => state.onOpen)
  const isOpen = useStoreModel((state) => state.isOpen)


  useEffect(() => {
    if (!isOpen) {
      onOpen()
    }
  }, [onOpen, isOpen])

  return null
}
