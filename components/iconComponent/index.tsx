import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
const { library } = require("@fortawesome/fontawesome-svg-core");
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect, useState } from "react";
library.add(fas, far, fab);
const IconComponent: React.FC<{
  className: string;
  name: IconName;
  type: IconPrefix;
}> = ({ ...props }) => {
  const [theType, setType] = useState<IconPrefix>("fab");
  const [theClass, setClass] = useState<string>("bottomIcon");
  useEffect(() => {
    setType(props.type);
    setClass(props.className);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);
  return (
    <FontAwesomeIcon
      // icon={[props.type, props.name]}
      icon={[theType, props.name]}
      className={theClass}
    />
  );
};
export default IconComponent;
