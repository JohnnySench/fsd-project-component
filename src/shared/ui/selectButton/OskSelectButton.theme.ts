import { SelectButtonPassThroughOptions } from "primevue/selectbutton";

const theme: SelectButtonPassThroughOptions = {
  root: ({ props }) => ({
    class: [
      'shadow-sm', { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
    ],
  }),
  button: ({ context, props }) => ({
    class: [
      "relative",
      // Font
      "leading-none",

      // Flex Alignment
      "inline-flex items-center align-bottom text-center",

      // Spacing
      "px-6 py-0",

      // Shape
      "border border-solid border-gray-osk",
      "first:rounded-l-md first:rounded-tr-md first:rounded-br-md",
      "last:border-r last:rounded-tl-none last:rounded-bl-none last:rounded-r-md",
      // "last:border-r last:rounder"

      // Color
      {
        "bg-white text-black border-gray-osk": !context.active,
        "bg-blue-400 text-white border-blue-400": context.active,
      },

      {
        "hover:border-black/20 hover:bg-gray-osk/10": !context.active,
        "hover:bg-blue-systemLight": context.active,
      },
      {
        "opacity-60 select-none pointer-events-none cursor-default":
        props.disabled,
      },
      // Transition
      "transition duration-200",

      // Misc
      "cursor-pointer select-none overflow-hidden",
    ],
  }),
  label: {
    class: "text-base",
  },
};

export default theme;
