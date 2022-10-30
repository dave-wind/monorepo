import { useEffect, useRef } from "react";

function useDidUpdateEffect<Args extends Args[], T extends () => any>(fn: T, deps: Args) {
    const didMountRef = useRef(false);
    useEffect(() => {
        if (didMountRef.current) {
            fn();
        } else {
            didMountRef.current = true;
        }
    }, deps)
}


export default useDidUpdateEffect