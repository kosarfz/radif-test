import React, { Children, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";

import Button from "../common/button";
import RequestCard from "./requestCard";

const requestsList = () => {
  const reqList = useMemo(() => {
    return [
      {
        title: "۱ آزمون فوریتی",
        id: "۱۴۰۲۱۰۲۹-۲۰۰-۱۲۲",
        date: "۱۴۰۲/۱۰/۲۹",
        status: "unchecked",
      },
      {
        title: "۲ آزمون فوریتی",
        id: "۱۴۰۲۱۰۲۹-۲۰۰-۱۲۳",
        date: "۱۴۰۲/۱۰/۲۹",
        status: "unchecked",
      },
      {
        title: "۳ آزمون فوریتی",
        id: "۱۴۰۲۱۰۲۹-۲۰۰-۱۲۴",
        date: "۱۴۰۲/۱۰/۲۹",
        status: "rejected",
      },
      {
        title: "۴ آزمون فوریتی",
        id: "۱۴۰۲۱۰۲۹-۲۰۰-۱۲۵",
        date: "۱۴۰۲/۱۰/۲۹",
        status: "paying",
      },
      {
        title: "۵ آزمون فوریتی",
        id: "۱۴۰۲۱۰۲۹-۲۰۰-۱۲۶",
        date: "۱۴۰۲/۱۰/۲۹",
        status: "sample",
      },
    ];
  }, []);

  const router = useRouter();
  const [activeStatus, setActiveStatus] = useState("unchecked");

  useEffect(() => {
    console.log(router.query);
  }, [router]);

  return (
    <>
      <div className="w-full px-24 py-20 justify-center flex-col">
        {reqList.map((item: any) => (
          <div key={item.id}>
            <RequestCard
              title={item.title}
              id={item.id}
              date={item.date}
              status={item.status}
              onClick={() => {
                item.id === router.query.reqID
                  ? delete router.query.reqID
                  : (router.query.reqID = item.id);
                router.push(router);
              }}
              className={`${item.id === router.query.reqID ? `bg-white` : ``} `}
            ></RequestCard>
          </div>
        ))}
      </div>
    </>
  );
};

export default requestsList;
