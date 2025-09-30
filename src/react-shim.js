import * as React from "react";

// SSR / build-time environments ma `useLayoutEffect` error na aave
if (typeof window === "undefined") {
    React.useLayoutEffect = React.useEffect;
}
