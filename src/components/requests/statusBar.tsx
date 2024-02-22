import React, { useState } from "react";
import Button from "../common/button";

const statusBar = () => {
  const statusTypes = [
    {
      title: "در انتظار بررسی",
      count: "۱۲۵۰",
      color: "gray",
    },
    {
      title: "در انتظار پرداخت",
      count: "۱۲۵۰",
      color: "primary",
    },
    {
      title: "در انتظار نمونه",
      count: "۱۲۵۰",
      color: "secondary",
    },
    {
      title: "رد شده",
      count: "۱۲۵۰",
      color: "red",
    },
  ];
  return (
    <>
      <div className="w-full p-24">
        <div>
          {statusTypes.map((item: any) => (
            <Button
              onClick={() => console.log("clicked")}
              className={`bg-red-200`}
            >
              {item.count}
              {item.title}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default statusBar;
