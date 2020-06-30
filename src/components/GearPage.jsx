import React from 'react';
import { useForm } from 'react-hook-form'
import { useAPI } from './hooks/useAPI';
import ModalController from './ModalController';
import Modal from './Modal';
import GearCreateForm from './GearCreateForm';
import GearDetailModalContent from './GearDetailModal';
import GearList from './GearList';
import GearListController from './GearListController';


const GearPage = (props) => {
  const { settlement: { settlementId } } = props.location.state;
  const [ gear, setGear, isLoading, error ] = useAPI('getSettlementGear', settlementId); 
  
  const addGear = (newGear) => {
    setGear([...gear, newGear])
  }

  const updateGear = (updatedGearItem) => {
    setGear(gear.map( gearItem => gearItem.gearId === updatedGearItem.gearId ? updatedGearItem : gearItem ));
  }

  if(isLoading) {
    return <h1>Loading</h1>
  }
  
  return (
    <>
    <h1>{props.location.state.settlement.name}</h1>
    <GearListController>
        {({ selectGear, selectedGear }) => (
          <ModalController>
            {({ showing, toggle }) => (
              <>
                <GearList settlementId={settlementId} gear={gear} onClick={( gear ) => {
                  selectGear(gear)
                  toggle()
                }}/>
                <Modal showing={showing} toggle={toggle}>
                  {selectedGear &&
                  <GearDetailModalContent 
                    description={selectedGear.gearInfo.description}
                    settlementId={settlementId}
                    name={selectedGear.gearInfo.name}
                    onUpdateGear={updateGear}
                    gearId={selectedGear.gearId}
                    toggle={toggle} 
                    qty={selectedGear.qty}/>}
                </Modal>
              </>
            )}
          </ModalController>
        )}
    </GearListController>
    
    <ModalController>
      {({ showing, toggle }) => (
        <>
          <button onClick={() => toggle()}>Add new Gear</button>
          <Modal showing={showing} toggle={toggle}>
            <GearCreateForm settlementId={settlementId} onCreateGear={addGear}/>
          </Modal>
        </>
      )}
    </ModalController>
    </>
  )
}

export default GearPage;
