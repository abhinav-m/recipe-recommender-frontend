import * as React from "react";

import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loader = ({ loading }) =>
  loading ? (
    <div className="flex justify-center align-center mt-20 mb-20">
      <FontAwesomeIcon
        icon={faKitchenSet}
        className="text-cyan-600"
        size="5x"
        bounce
      />
    </div>
  ) : null;

export default Loader;
