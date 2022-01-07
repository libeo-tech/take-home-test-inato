/*TODO: Get this data from DB*/
export const drogsRules = {
	maxBenefit: 50,
	minBenefit: 0,
	rules: [
		{
			name: "Doliprane",
			expirationDate: -1,
			benefits: [
				{
					conditions: [{
						condition: "gte",
						valueCondition: 0
					}],
					benefit: -1
				},
				{
					conditions: [{
						condition: "lt",
						valueCondition: 0
					}],
					benefit: -2
				}
			],
			defaultBenefit: null
		},
		{
			name: "Herbal Tea",
			expirationDate: -1,
			benefits: [
				{
					conditions: [{
						condition: "gte",
						valueCondition: 0
					}],
					benefit: 1
				},
				{
					conditions: [{
						condition: "lt",
						valueCondition: 0
					}],
					benefit: 2
				}
			],
			defaultBenefit: null
		},
		{
			name: "Fervex",
			expirationDate: -1,
			benefits: [
				{
					conditions: [{
						condition: "gt",
						valueCondition: 10
					}],
					benefit: 1
				},
				{
					conditions: [
						{
							condition: "lte",
							valueCondition: 10
						},
						{
							condition: "gt",
							valueCondition: 5
						}
					],
					benefit: 2
				},
				{
					conditions: [
						{
							condition: "lte",
							valueCondition: 5
						},
						{
							condition: "gte",
							valueCondition: 0
						}
					],
					benefit: 3
				},
				{
					conditions: [{
						condition: "lt",
						valueCondition: 0
					}],
					benefit: 0
				}
			],
			defaultBenefit: {
				conditions: [{
					condition: "lt",
					valueCondition: 0
				}],
				defaultValue: 0
			}
		},
		{
			name: "Magic Pill",
			expirationDate: 0,
			benefits: [],
			defaultBenefit: null
		},
		{
			name: "Dafalgan",
			expirationDate: -1,
			benefits: [
				{
					conditions: [{
						condition: "gte",
						valueCondition: 0
					}],
					benefit: -2
				},
				{
					conditions: [{
						condition: "lt",
						valueCondition: 0
					}],
					benefit: -4
				}
			],
			defaultBenefit: null
		}
	]
}

/* Default drog rule if the drog not found in drogsRules */
export const defaultDrogRule = {
	maxBenefit: 50,
	minBenefit: 0,
	rules: [{
		expirationDate: -1,
		benefits: [
			{
				conditions: [{
					condition: "gte",
					valueCondition: 0
				}],
				benefit: -1
			},
			{
				conditions: [{
					condition: "lt",
					valueCondition: 0
				}],
				benefit: -2
			}
		],
		defaultBenefit: null
	}]
}