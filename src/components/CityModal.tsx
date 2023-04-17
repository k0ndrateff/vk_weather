import React, {ChangeEvent, Dispatch, SetStateAction} from "react";
import {
    Cell,
    FormItem,
    FormLayout, Group,
    Input, List,
    ModalPage,
    ModalPageHeader, ModalRoot,
    PanelHeaderClose,
    PanelHeaderSubmit
} from "@vkontakte/vkui";

type CityModalProps = {
    activeModal: string;
    modalBack: () => void;
    city: string;
    setCity: Dispatch<SetStateAction<string>>;
    updateGeoData: (arg0?: string | null) => void;
};

const CityModal:React.FC<CityModalProps> = ({ activeModal, modalBack, city, setCity, updateGeoData }) => {
    return (
        <ModalRoot
            activeModal={activeModal}
            onClose={modalBack}
        >
            <ModalPage
                id='chooseCity'
                onClose={modalBack}
                header={
                    <ModalPageHeader
                        before={<PanelHeaderClose onClick={modalBack}/>}
                        after={<PanelHeaderSubmit onClick={() => updateGeoData(city)}/>}
                    >
                        Выбрать город
                    </ModalPageHeader>
                }
            >
                <FormLayout>
                    <FormItem top='Введите название'>
                        <Input id='city' placeholder={city} onChange={(st) => setCity(st as unknown as SetStateAction<string>)} />
                    </FormItem>
                </FormLayout>
                <Group>
                    <List>
                        <Cell onClick={() => { updateGeoData() }}>🏠 Геолокация</Cell>
                        <Cell onClick={() => { updateGeoData('Москва') }}>🏰 Москва</Cell>
                        <Cell onClick={() => { updateGeoData('Париж') }}>🗺 Париж</Cell>
                        <Cell onClick={() => { updateGeoData('Нью-Йорк') }}>🗽 Нью-Йорк</Cell>
                    </List>
                </Group>
            </ModalPage>
        </ModalRoot>
    );
};
export default CityModal;