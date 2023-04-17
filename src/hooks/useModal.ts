import {SetStateAction, useCallback, useState} from "react";

export function useModal() {
    let [activeModal, setActiveModal] = useState('');
    let [modalHistory, setModalHistory] = useState(['']);

    const setModal = useCallback((newActiveModal?: string | null) => {
        newActiveModal = newActiveModal || null;
        let smModalHistory: string[] = modalHistory ? [...modalHistory] : [];

        if (newActiveModal === null) {
            smModalHistory = [];
        }
        else if (smModalHistory.indexOf(newActiveModal) !== -1) {
            smModalHistory = smModalHistory.splice(0, smModalHistory.indexOf(newActiveModal) + 1);
        }
        else {
            smModalHistory.push(newActiveModal);
        }
        setActiveModal(newActiveModal as SetStateAction<string>);
        setModalHistory(smModalHistory as SetStateAction<string[]>);
    }, [modalHistory]);

    const modalBack = useCallback(() => {
        setModal(modalHistory[modalHistory.length - 2]);
    }, [modalHistory, setModal]);

    return {activeModal, modalHistory, modalBack, setModal};
};