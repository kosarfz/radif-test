import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Request() {
  const router = useRouter();
  const [activeStatus, setActiveStatus] = useState("unchecked");

  useEffect(() => {
    console.log(router);
  }, [router]);

  return <></>;
}
