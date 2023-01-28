import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function useAssets() {
  const [assetData, setAssetData] = useState();

  //getBySearch
  const getBySearch = async (typeOfAsset, word, building) => {
    const results = await axios.get(
      `/asset/search?type=${typeOfAsset}&word=${word}&building=${building}`
    );
    setAssetData(results.data.asset);
  };

  return { setAssetData, assetData };
}
export default useAssets;
