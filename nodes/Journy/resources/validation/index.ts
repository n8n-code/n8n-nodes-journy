import type { INodeProperties } from 'n8n-workflow';

export const validationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Validation"
					]
				}
			},
			"options": [
				{
					"name": "Get Validity",
					"value": "Get Validity",
					"action": "Validate API key",
					"description": "Endpoint used to test the validity and some basic information about a specific API Key.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/validate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /validate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Validation"
					],
					"operation": [
						"Get Validity"
					]
				}
			}
		},
];
