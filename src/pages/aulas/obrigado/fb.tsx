import { useRouter } from "next/router";
import { useEffect } from "react";
import * as fbq from "../../../lib/fpixel";
import AulasObrigado from "./[origin]";

export default function AulasObrigadoFacebook() {
  const router = useRouter();

  useEffect(() => {
    fbq.completeRegistration(router.query);
  }, [router.query]);

  return <AulasObrigado />;
}
