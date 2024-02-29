import { formatEther, BigNumberish } from "ethers";
import useReadTokenContract from "./useReadTokenContract";
import { DEPLOYER_ADDRESS } from "../configs";
import usePushError from "./usePushError";

export default function useGetDeployerAmount() {
  const { result } = useReadTokenContract({
    functionName: "balanceOf",
    args: [DEPLOYER_ADDRESS],
  });

  usePushError(result.error);

  return {
    deployerAmount: Number(formatEther((result.data || 0) as BigNumberish)),
    isLoading: result.isLoading,
    error: result.error,
  };
}
