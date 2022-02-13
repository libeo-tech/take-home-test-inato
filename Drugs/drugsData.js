const drugsData = [
  {
    name: "Magic Pill",
    noExpiration: true,
    base: 0,
    values: [
      {
        limit: 0,
        value: 0
      }
    ]
  },
  {
    name: "Herbal Tea",
    base: 1,
    values: [
      {
        limit: 0,
        value: 2
      }
    ]
  },
  {
    name: "Fervex",
    base: 1,
    values: [
      {
        limit: 10,
        value: 2
      },
      {
        limit: 5,
        value: 3
      }
    ]
  }
];

const defaultDrugsData = {
  name: "Default Drugs",
  base: -1,
  values: [{ limit: 0, value: -2 }]
};

export { drugsData, defaultDrugsData };
