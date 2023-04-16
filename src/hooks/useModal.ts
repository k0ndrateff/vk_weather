import React, {useCallback, useState} from "react";
import bridge from "@vkontakte/vk-bridge";

export function useModal() {
    let [activeModal, setActiveModal] = useState(null);
    let [modalHistory, setModalHistory] = useState([]);

    const modalBack = useCallback(() => {
        setModal(modalHistory[modalHistory.length - 2]);
    }, [modalHistory, activeModal]);

    const setModal = useCallback((newActiveModal) => {
        newActiveModal = newActiveModal || null;
        let smModalHistory = modalHistory ? [...modalHistory] : [];

        if (newActiveModal === null) {
            smModalHistory = [];
        }
        else if (smModalHistory.indexOf(newActiveModal) !== -1) {
            smModalHistory = smModalHistory.splice(0, smModalHistory.indexOf(newActiveModal) + 1);
        }
        else {
            smModalHistory.push(newActiveModal);
        }
        setActiveModal(newActiveModal);
        setModalHistory(smModalHistory);
    }, [modalHistory, activeModal]);

    return {activeModal, modalHistory, modalBack, setModal};
};