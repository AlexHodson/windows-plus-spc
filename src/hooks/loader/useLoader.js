import React, {useState, useEffect} from "react";

export const useLoader = (initialState) => {
    const [showLoader, setShowLoader] = useState(initialState)

    return {showLoader, setShowLoader}
}
