import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";

import Button from "../common/button";
import { ValueOf } from "next/dist/shared/lib/constants";
import { log } from "console";

type GetNameFromList<T extends readonly { status: string }[]> =
  T[number]["status"];

const list = [
  {
    status: "unchecked",
    count: "۱۲۵۰",
  },
  {
    status: "paying",
    count: "۱۲۵۰",
  },
  {
    status: "sample",
    count: "۱۲۵۰",
  },
  {
    status: "rejected",
    count: "۱۲۵۰",
  },
];

type values = GetNameFromList<typeof list>;

const StatusBar = () => {
  const statusList: Array<{ status: values; count: string }> = useMemo(() => {
    return [
      {
        status: "unchecked",
        count: "۱۲۵۰",
      },
      {
        status: "paying",
        count: "۱۲۵۰",
      },
      {
        status: "sample",
        count: "۱۲۵۰",
      },
      {
        status: "rejected",
        count: "۱۲۵۰",
      },
    ];
  }, []);
  const statusTypes: Record<values, string> = useMemo(() => {
    return {
      unchecked: "در انتظار بررسی",
      rejected: "رد شده",
      paying: "در انتظار پرداخت",
      sample: "در انتظار نمونه",
    };
  }, []);
  const router = useRouter();
  const [activeStatus, setActiveStatus] = useState("unchecked");

  useEffect(() => {
    console.log(router.query);
  }, [router]);

  return (
    <>
      <div className="w-full px-24 pb-20 justify-center flex">
        {statusList.map((item: any) => (
          <Button
            key={item.status}
            onClick={() => {
              item.status === router.query.tab
                ? delete router.query.tab
                : (router.query.tab = item.status);
              router.push(router);
            }}
            className={`${
              item.status === router.query.tab
                ? `bg-${item.status}`
                : `bg-${item.status}-light`
            } ${
              item.status === router.query.tab
                ? `text-white`
                : `text-${item.status}`
            } text-16 mx-3`}
          >
            <span className="bg-white rounded p-1 ml-3 text-black text-14">
              {item.count}
            </span>
            {statusTypes[item.status]}
          </Button>
        ))}
      </div>
    </>
  );
};

export default StatusBar;
