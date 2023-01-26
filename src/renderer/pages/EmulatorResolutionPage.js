import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import EmulatorResolution from 'components/organisms/Wrappers/EmulatorResolution.js';

const EmulatorResolutionPage = () => {
  const { state, setState } = useContext(GlobalContext);
  const { bezels, resolutions } = state;
  const [statePage, setStatePage] = useState({
    disabledNext: false,
    disabledBack: false,
    data: '',
  });
  const { disabledNext, disabledBack, data } = statePage;
  const setResolution = (emulator, resolution) => {
    setState({
      ...state,
      resolutions: {
        ...resolutions,
        [emulator]: resolution,
      },
    });
  };
  //Enabling button when changing the global state only if we have a device selected
  useEffect(() => {
    if (bezels != '') {
      setStatePage({ ...statePage, disabledNext: false });
    }
  }, [state]); // <-- here put the parameter to listen

  return (
    <EmulatorResolution
      data={data}
      disabledNext={disabledNext}
      disabledBack={disabledBack}
      onClick={setResolution}
    />
  );
};

export default EmulatorResolutionPage;