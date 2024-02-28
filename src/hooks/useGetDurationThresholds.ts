import useReadMultiplyContract from "./useReadMultiplyContract";

export type Duration = {
  threshold: string;
  multiplier: number;
}

export default function useGetDurationThresholds(): {
  durationThresholds: Duration[];
  isLoading: boolean;
} {
  const { result } = useReadMultiplyContract({
    functionName: "getDurationThresholds"
  })

  return {
    durationThresholds: result.data as Duration[],
    isLoading: result.isLoading
  };
}