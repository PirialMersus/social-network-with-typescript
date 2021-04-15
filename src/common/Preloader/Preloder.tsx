import loader from "../../img/tail-spin.svg";
import React from "react";

const Preloader = () => {
    return (
        <>
            <div><img src={loader}
                      alt="loader"/></div>
            <div>Loading</div>
        </>
    )
}
export default Preloader