import React from "react";
import { signIn, providerMap } from "@/auth";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex flex-col space-y-3">
      {Object.values(providerMap).map((provider) => (
        <form
          key={provider.id}
          action={async () => {
            "use server";
            await signIn(provider.id);
          }}
        >
          <Button key={provider.id}>Sign in with {provider.name}</Button>
        </form>
      ))}
    </div>
  );
}
