import React, { useState } from "react";

export default function(Component: any) {
  const Authentication = () => {
    const [auth] = useState(1);

    return <>{auth === 1 ? <Component /> : <div>Error!</div>}</>;
  };

  return Authentication;
}
