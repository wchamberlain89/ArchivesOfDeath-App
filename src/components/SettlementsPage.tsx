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
      {console.log(settlements)}
      { 
        settlements.status.isLoading ? <div>Loading</div> : <SettlementsList settlements={settlements.data}/>
      }
      <SettlementCreateForm 
        onCreateSettlement={(formData: ISettlementFormData) => actions.addSettlement(formData)}
      />
    </div>
  )
}

export default SettlementsPage;