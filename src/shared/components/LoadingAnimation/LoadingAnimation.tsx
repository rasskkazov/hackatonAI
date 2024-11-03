import { ReactNode } from "react";
import * as classes from "./LoadingAnimation.module.scss";

export const LoadingAnimation = (): ReactNode => (
  <div className={classes.typingIndicator}>
    <span className={classes.dot}></span>
    <span className={classes.dot}></span>
    <span className={classes.dot}></span>
  </div>
);
