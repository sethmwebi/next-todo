import React, { Suspense } from "react";
import TodosList from "./(users)/todos/TodosList";

const Page = () => {
  return (
    <div className="flex-1 overflow-x-hidden">
      <Suspense fallback={<p className="text-red-500">Loading the todos...</p>}>
        <div className="flex space-x-2">
          <TodosList />
        </div>
      </Suspense>
      <Suspense fallback={<p className="text-blue-500">Loading the shopping trolley...</p>}>
        <div className="flex space-x-2">
          <TodosList />
        </div>
      </Suspense>
    </div>
  );
};

export default Page;
