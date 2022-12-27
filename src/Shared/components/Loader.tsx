import React from "react";

import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loading-spinner">
      <InfinitySpin color="rgb(246, 162, 67)" width="200" />
    </div>
  );
};

export default React.memo(Loader);
