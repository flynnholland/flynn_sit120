const { createApp, ref, computed, watch } = Vue;

const App = {
  template: `<div>
    <p>{{ message }}</p>
    <div v-html="rawHtml"></div>
    <div v-bind:id="dynamicId"></div>
    <p>{{ reversedMessage }}</p>
    <button @click="reverseMessageMethod">Reverse Message</button>
    <p>Computed Reversed Message: {{ computedReversedMessage }}</p>
    <div :class="{ active: isActive }" :style="{ color: errorColor }">Class and Style Bindings</div>
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
    <div v-for="(value, name) in objectItems" :key="name">{{ name }}: {{ value }}</div>
    <div v-for="n in range" :key="n">{{ n }}</div>
    <button @click="handleClick">Click Me!</button>
    <input v-model="textInput" type="text">
    <input v-model="checked" type="checkbox">
    <select v-model="selectedOption">
      <option disabled value="">Select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <textarea v-model="textareaInput"></textarea>
  </div>`,
  setup() {
    const message = ref('Task 2.3C!');
    const rawHtml = '<span style="color: red">Red Raw HTML</span>';
    const dynamicId = 'my-id';
    const reversedMessage = ref(message.value.split('').reverse().join(''));

    const reverseMessageMethod = () => {
      reversedMessage.value = message.value.split('').reverse().join('');
    };

    const computedReversedMessage = computed(() => {
      return message.value.split('').reverse().join('');
    });

    const isActive = ref(false);
    const errorColor = 'red';

    const items = ref(['Item 1', 'Item 2', 'Item 3']);
    const objectItems = ref({
      First_Name: 'Flynn',
      Last_Name: 'Holland',
      Age: 24
    });
    const range = ref(5);

    const handleClick = () => {
      alert('Button clicked!');
    };

    const textInput = ref('');
    const checked = ref(false);
    const selectedOption = ref('');
    const textareaInput = ref('');

    watch(message, (newVal, oldVal) => {
      console.log(`Message changed from ${oldVal} to ${newVal}`);
    });

    return {
      message,
      rawHtml,
      dynamicId,
      reversedMessage,
      reverseMessageMethod,
      computedReversedMessage,
      isActive,
      errorColor,
      items,
      objectItems,
      range,
      handleClick,
      textInput,
      checked,
      selectedOption,
      textareaInput
    };
  }
};

const app = createApp(App);
app.mount('#app');
