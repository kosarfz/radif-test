import React, { useEffect, useMemo, useState } from "react";
import Button from "../common/button";
import { useRouter } from "next/router";

const statusBar = () => {
  const statusTypes = useMemo(() => {
    return [
      {
        value: "unchecked",
        title: "در انتظار بررسی",
        count: "۱۲۵۰",
        color: "gray",
      },
      {
        value: "paying",
        title: "در انتظار پرداخت",
        count: "۱۲۵۰",
        color: "primary",
      },
      {
        value: "sample",
        title: "در انتظار نمونه",
        count: "۱۲۵۰",
        color: "secondary",
      },
      {
        value: "rejected",
        title: "رد شده",
        count: "۱۲۵۰",
        color: "red",
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
      <div className="w-full p-24 justify-center flex">
        {statusTypes.map((item: any) => (
          <Button
            key={item.value}
            onClick={() => {
              item.value === router.query.tab
                ? delete router.query.tab
                : (router.query.tab = item.value);
              router.push(router);
            }}
            className={`${
              item.value === router.query.tab
                ? `bg-${item.color}`
                : `bg-${item.color}-light`
            } ${
              item.value === router.query.tab
                ? `text-white`
                : `text-${item.color}`
            } text-16 mx-3`}
          >
            <span className="bg-white rounded p-1 ml-3 text-black text-14">
              {item.count}
            </span>
            {item.title}
          </Button>
        ))}
      </div>
    </>
  );
};

export default statusBar;
