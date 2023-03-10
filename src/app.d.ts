import type { TypedSupabaseClient } from "@supabase/auth-helpers-sveltekit/dist/types";
import type { Session } from "@supabase/supabase-js";

declare global {
  namespace App {
    interface Error {}
    interface Locals {
      sb: TypedSupabaseClient;
      session: Session | null;
      // theme: null
    }
    interface PageData {
      session: import("@supabase/supabase-js").Session | null;
    }
    interface Platform {}
  }
}

export {};
