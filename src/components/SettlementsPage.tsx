import React from 'react';
import { useAPI } from './hooks/useTestApiService';
import { Settlement } from '../types/interfaces';
import { SettlementCreateForm, ISettlementFormData } from './SettlementCreateForm';
import SettlementsList from './SettlementsList';
import useSettlements from './hooks/useSettlements';

const SettlementsPage = () => {
  const [settlements, dispatch, actions] = useSettlements();

  return (
    <div>
      { 
        settlements.isLoading ? <div>Loading</div> : <SettlementsList settlements={settlements.data}/>
      }
      <SettlementCreateForm 
        onCreateSettlement={(formData: ISettlementFormData) => actions.addSettlement(formData)}
      />
    </div>
  )

  // const addSettlement = ( settlement: Settlement ) => {
  //   const updatedSettlements = [...settlements, settlement]
  //   setSettlements(updatedSettlements);
  // }

  // if(isLoading) {
  //   return <div>Loading...</div>
  // }

  // console.log(settlements)

  // return (
  //   <>
  //     <SettlementsList settlements={settlements.payload}/>
  //     <SettlementCreateForm
  //       onCreateSettlement={addSettlement}
  //     />
  //   </>
  // ) 
}

export default SettlementsPage;