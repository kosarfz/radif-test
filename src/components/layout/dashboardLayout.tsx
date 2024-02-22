import React, { useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full p-42">
        <div>
          <p className="text-14">دشبورد</p>
          <h2 className="text-24 font-bold py-3">لیست درخواست‌ها</h2>
          <p className="text-14">
            کاربر گرامی می‌توانید از لیست آزمایشگاه‌های زیر برای درخواست خود
            اقدام کنید.
          </p>
        </div>
        <div className={`border-solid border mt-5 p-24 rounded-lg bg-white `}>
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
