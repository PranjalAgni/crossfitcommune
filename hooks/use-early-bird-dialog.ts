import { EarlyCtx } from "@/components/early-bird-dialog";
import { useContext } from "react";

export function useEarlyBirdDialog() {
    const ctx = useContext(EarlyCtx);
    if (!ctx)
      throw new Error(
        "useEarlyBirdDialog must be used inside EarlyBirdDialogProvider"
      );
    return ctx;
  }