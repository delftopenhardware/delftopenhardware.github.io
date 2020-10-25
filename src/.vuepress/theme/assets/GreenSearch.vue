<template>
  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.0453 2C10.8608 2 8.72528 2.6478 6.90888 3.86148C5.09249 5.07515 3.67678 6.8002 2.84078 8.81847C2.00479 10.8367 1.78605 13.0576 2.21224 15.2002C2.63843 17.3428 3.69039 19.3109 5.23511 20.8556C6.77983 22.4003 8.74792 23.4523 10.8905 23.8784C13.0331 24.3046 15.2539 24.0859 17.2722 23.2499C19.2905 22.4139 21.0155 20.9982 22.2292 19.1818C23.4429 17.3654 24.0907 15.2299 24.0907 13.0453C24.0905 10.116 22.9267 7.30667 20.8554 5.23531C18.784 3.16395 15.9747 2.00019 13.0453 2V2Z"
      stroke="#82C83D"
      stroke-width="2.24999"
      stroke-miterlimit="10"
    />
    <path
      d="M21.2861 21.2859L29.0001 28.9999"
      stroke="#82C83D"
      stroke-width="2.24999"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
    <slot />
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: "box"
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: "currentColor"
    }
  }
};
</script>
