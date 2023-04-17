import React from "react";

interface LaterBoxesProps {
    children: React.ReactNode;
}

const LaterBoxes:React.FC<LaterBoxesProps> = ({ children }) => {
    return (
        <div className={'laterBoxes'}>
            {children}
        </div>
    );
};
export default LaterBoxes;