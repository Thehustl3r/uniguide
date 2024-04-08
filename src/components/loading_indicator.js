import React from "react";
import componentStyle from "./component_style.module.css"
const LoadingIndicator = ()=>{
    return (
        <div className={componentStyle.loadingIndicator}>
          <div className={componentStyle.loadingSpinner}></div>
        </div>
      );
}
export default LoadingIndicator;