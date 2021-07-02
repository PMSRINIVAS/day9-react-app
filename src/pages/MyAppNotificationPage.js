import { useState } from "react";

export function MyAppNotificationPage() {
  const [list] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  return (
    <div>
      <h2 className="bg-dark text-light p-3 sticky-top text-center">
        Notification
      </h2>

      {list.map((item, index) => (
        <div className="bg-success text-light p-3 m-3 rounded">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus, excepturi.
        </div>
      ))}
    </div>
  );
}
