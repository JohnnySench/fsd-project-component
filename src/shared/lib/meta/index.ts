import {useCounterStore} from '@/widgets/headerStore.ts'

export const useChangeTitleHeader = (titleHeader: string) => {
  const {changeTitleHeader} = useCounterStore();
  changeTitleHeader(titleHeader);
}