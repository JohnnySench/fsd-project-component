import type {SliderProps} from "primevue/slider";

export interface IOskRangePickerProps extends /* @vue-ignore */ SliderProps {
  max?: number,
  min?: number,
}