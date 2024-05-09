<script setup>
// define component props for the slider component
const props = defineProps({
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 1,
  },
  minValue: {
    type: Number,
    default: 50,
  },
  maxValue: {
    type: Number,
    default: 80,
  },
});
//{ min, max, step, minValue, maxValue }
// define emits for the slider component
const emit = defineEmits(['update:minValue', 'update:maxValue']);

// define refs for the slider element and the slider values
const slider = ref(null);
const inputMin = ref(null);
const inputMax = ref(null);
const sliderMinValue = ref(props.minValue);
const sliderMaxValue = ref(props.maxValue);

watchEffect(() => {
  sliderMinValue.value = props.minValue;
  sliderMaxValue.value = props.maxValue;
});

// function to get the percentage of a value between the min and max values
const getPercent = (value, min, max) => {
  return ((value - min) / (max - min)) * 100;
};

// function to get the difference between the min and max values
const sliderDifference = computed(() => {
  return Math.abs(sliderMaxValue.value - sliderMinValue.value);
});

// function to set the css variables for width, left and right
const setCSSProps = (left, right) => {
  slider.value.style.setProperty('--progressLeft', `${left}%`);
  slider.value.style.setProperty('--progressRight', `${right}%`);
};

// watchEffect to emit the updated values, and update the css variables
// when the slider values change
watchEffect(() => {
  if (slider.value) {
    // emit slider values when updated
    emit('update:minValue', sliderMinValue.value);
    emit('update:maxValue', sliderMaxValue.value);

    // calculate values in percentages
    const leftPercent = getPercent(sliderMinValue.value, props.min, props.max);
    const rightPercent = 100 - getPercent(sliderMaxValue.value, props.min, props.max);

    // set the CSS variables
    setCSSProps(leftPercent, rightPercent);
  }
});

// validation sliderMinValue do not greater than sliderMaxValue and opposite
const onInput = ({ target }) => {
  if (target.name === 'min') {
    target.value > sliderMaxValue.value
      ? (target.value = sliderMaxValue.value)
      : (sliderMinValue.value = parseFloat(target.value));
  }

  if (target.name === 'max') {
    target.value < sliderMinValue.value
      ? (target.value = sliderMinValue.value)
      : (sliderMaxValue.value = parseFloat(target.value));
  }
};
</script>

<template>
  <div ref="slider" class="custom-slider minmax">
    <div class="minmax-indicator"></div>
    <input
      id="min"
      ref="inputMin"
      :max="max"
      :min="min"
      :step="step"
      :value="minValue"
      name="min"
      type="range"
      @input="onInput"
    />
    <input
      id="max"
      ref="inputMax"
      :max="max"
      :min="min"
      :step="step"
      :value="maxValue"
      name="max"
      type="range"
      @input="onInput"
    />
  </div>
  <div class="minmax-inputs mt-4">
    <div>
      <span class="mr-1">$</span>
      <input v-model="sliderMinValue" class="pl-2" :step="step" type="number" />
    </div>
    <div>
      <span class="mr-1">$</span>
      <input v-model="sliderMaxValue" class="pl-2" :step="step" type="number" />
    </div>
  </div>
</template>

<style>
.custom-slider {
  --trackHeight: 0.35rem;
  --thumbRadius: 1rem;
}

/* style the input element with type "range" */
.custom-slider input[type='range'] {
  position: relative;
  appearance: none;
  background: none;
  border-radius: 999px;
  z-index: 0;
  height: 100%;
  pointer-events: none;
}

/* ::before element to replace the slider track */
.custom-slider input[type='range']::before {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background: theme(colors.black.300);
  border-radius: 999px;
}

/* `::-webkit-slider-runnable-track` targets the track (background) of a range slider in chrome and safari browsers. */
.custom-slider input[type='range']::-webkit-slider-runnable-track {
  appearance: none;
  background: theme(colors.black.800);
  height: var(--trackHeight);
  border-radius: 999px;
}

.custom-slider input[type='range']::-webkit-slider-thumb {
  position: relative;
  width: var(--thumbRadius);
  height: var(--thumbRadius);
  margin-top: calc((var(--trackHeight) - var(--thumbRadius)) / 2);
  background: theme(colors.black.800);
  border: 1px solid theme(colors.black.300);
  border-radius: 999px;
  pointer-events: all;
  appearance: none;
  z-index: 1;
}

/* `::-moz-range-track` targets the track (background) of a range slider in Mozilla Firefox. */
.custom-slider.default input[type='range']::-moz-range-track {
  appearance: none;
  background: theme(colors.black.800);
  height: var(--trackHeight);
  border-radius: 999px;
}

.custom-slider input[type='range']::-moz-range-thumb {
  position: relative;
  box-sizing: border-box;
  width: var(--thumbRadius);
  height: var(--thumbRadius);
  margin-top: calc((var(--trackHeight) - var(--thumbRadius)) / 2);
  background: theme(colors.black.800);
  border: 1px solid theme(colors.black.300);
  border-radius: 999px;
  pointer-events: all;
  appearance: none;
  z-index: 1;
}

.custom-slider.minmax {
  position: relative;
  height: var(--trackHeight);
  background: theme(colors.black.100);
  border-radius: 999px;
  margin: 0.5rem 0;
  --progressLeft: 0%;
  --progressRight: 0%;
}

.custom-slider .minmax-indicator {
  position: absolute;
  height: 100%;
  pointer-events: none;
  left: var(--thumbRadius);
  right: var(--thumbRadius);
}

.custom-slider .minmax-indicator::before {
  content: '';
  position: absolute;
  background: theme(colors.black.300);
  height: 100%;
  left: var(--progressLeft);
  right: var(--progressRight);
}

.custom-slider.minmax input[type='range'] {
  position: absolute;
  width: calc(100% - var(--thumbRadius));
}

.custom-slider.minmax input[type='range'][name='max'] {
  left: var(--thumbRadius);
}

.custom-slider.minmax input[type='range']::-webkit-slider-runnable-track {
  background: none;
}

.custom-slider.minmax input[type='range']::before {
  display: none;
}

.minmax-inputs {
  display: flex;
  justify-content: space-between;
}

.minmax-inputs input {
  width: 50px;
}
</style>
