import LuckyCard from "./LuckyCard.vue";
export default {
  title: "Card",
  id: "LuckyCard",
  component: LuckyCard
};

export const Card = {
  args: {
    title: "Card Header"
  },
  render: args => ({
    components: { LuckyCard },
    setup: () => ({ args }),
    template: `
    <LuckyCard v-bind="args">
      This is the content of the card body.
    </LuckyCard>
    `
  })
};
