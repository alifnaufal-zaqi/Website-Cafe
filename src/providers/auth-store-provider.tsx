"use client";

import { createClient } from "@/lib/supabase/client";
import { useAuthStore } from "@/stores/auth-store";
import { Profile } from "@/types/auth";
import { ReactNode, useEffect } from "react";

export default function AuthStoreProvider({
  children,
  profile,
}: {
  children: ReactNode;
  profile: Profile;
}) {
  const setUser = useAuthStore((state) => state.setUser);
  const setProfile = useAuthStore((state) => state.setProfile);

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      setProfile(profile);
    });
  }, [profile]);

  return <>{children}</>;
}
