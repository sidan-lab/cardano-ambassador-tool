import { UTxO } from "@meshsdk/core";

export class BlockfrostService {
  fetchUtxo = async (txHash: string, outputIndex: number): Promise<UTxO> => {
    try {
      const response = await fetch("/api/blockfrost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "fetchUTxOs",
          params: { txHash, outputIndex },
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to fetch UTxO");
      }

      const data = await response.json();
      return data.utxos;
    } catch (error) {
      console.error("Error fetching utxo:", error);
      throw error;
    }
  };

  fetchAddressUTxOs = async (address: string): Promise<UTxO[]> => {
    try {
      const response = await fetch("/api/blockfrost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "fetchAddressUTxOs",
          params: { address },
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to fetch address UTxOs");
      }

      const data = await response.json();
      return data.utxos;
    } catch (error) {
      console.error("Error fetching address UTxOs:", error);
      throw error;
    }
  };
}
