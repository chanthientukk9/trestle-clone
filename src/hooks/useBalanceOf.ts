import { useAccount } from "wagmi";
import useReadTokenContract from "./useReadTokenContract";
import { formatEther } from "ethers";
import { BigNumberish } from "ethers";

export default function useBalanceOf() {
  const accounnt = useAccount();
  const { result } = useReadTokenContract({
    functionName: "balanceOf",
    args: [accounnt.address],
  });
  return {
    balance: Number(formatEther((result.data || 0) as BigNumberish)),
  };
}