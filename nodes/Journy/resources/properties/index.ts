import type { INodeProperties } from 'n8n-workflow';

export const propertiesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Properties"
					]
				}
			},
			"options": [
				{
					"name": "Get Account Properties",
					"value": "Get Account Properties",
					"action": "Get account properties",
					"description": "Endpoint to list account properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/properties/accounts"
						}
					}
				},
				{
					"name": "Get User Properties",
					"value": "Get User Properties",
					"action": "Get user properties",
					"description": "Endpoint to list user properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/properties/users"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /properties/accounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Properties"
					],
					"operation": [
						"Get Account Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /properties/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Properties"
					],
					"operation": [
						"Get User Properties"
					]
				}
			}
		},
];
