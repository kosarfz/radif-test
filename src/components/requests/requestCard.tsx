import React, { useMemo } from "react";

interface IRequestCardProps {
  className?: string;
  onClick?: () => any;
  title?: string;
  status: string;
  date: string;
  id: string;
}

const RequestCard: React.FC<IRequestCardProps> = ({
  className,
  onClick,
  title,
  status,
  id,
  date,
}) => {
  const statusTypes = useMemo(() => {
    return {
      unchecked: "در انتظار بررسی",
      rejected: "رد شده",
      paying: "در انتظار پرداخت",
      sample: "در انتظار نمونه",
    };
  }, []);
  return (
    <div
      className={`${className} rounded w-full p-2 text-md`}
      onClick={onClick}
    >
      <div className="flex flex-wrap bg-gray-100 rounded p-10  text-14">
        <div className="w-2/3 p-4">
          <div className="mb-20">
            <div className="font-bold">{title}</div>
          </div>

          <div>
            <div className="">{id}</div>
          </div>
        </div>

        <div className="w-1/3 p-4">
          <div className="mb-20">
            <p
              className={`bg-${status}-light text-${status} rounded-full py-1 text-center`}
            >
              {statusTypes[status]}
            </p>
          </div>

          <div>
            <div className="">{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
