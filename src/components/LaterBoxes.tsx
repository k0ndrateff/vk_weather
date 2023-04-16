import React from "react";

const LaterBoxes:React.FC = ({ children }) => {
    return (
        <div className={'laterBoxes'}>
            {children}
        </div>
    );
};
export default LaterBoxes;