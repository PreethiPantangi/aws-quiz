"use client";
import { useState, useEffect } from 'react';

const Alert = ({ message, type = "info", duration = 5000 }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!show) return null;

  const getAlertStyle = () => {
    switch (type) {
      case 'success':
        return 'bg-green-100 text-green-700 border-green-800';
      case 'error':
        return 'bg-red-100 text-red-700 border-red-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-700 border-yellow-800';
      default:
        return 'bg-blue-100 text-blue-700 border-blue-800';
    }
  };

  return (
    <div className={`fixed p-4 rounded border border-t-4 ${getAlertStyle()} w-full sm:w-full sm:m-2 lg:w-1/4 lg:right-4 lg:top-4`}>
      <div className="flex justify-between">
        <span>{message}</span>
        <button onClick={() => setShow(false)} className="font-bold">
          X
        </button>
      </div>
    </div>
  );
};

export default Alert;
