import React, { useState } from "react";

export const useHandleForm = (initialState, afterSubmit) => {
    const [state, setState] = useState(initialState)

    const handleChange = e => {
        setState(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        afterSubmit(state)
    }

    return { state, handleChange, handleSubmit }
}
