import type { INodeProperties } from 'n8n-workflow';

export const segmentsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Segments"
					]
				}
			},
			"options": [
				{
					"name": "Get Account Segments",
					"value": "Get Account Segments",
					"action": "Get account segments",
					"description": "Endpoint to list account segments.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/segments/accounts"
						}
					}
				},
				{
					"name": "Get User Segments",
					"value": "Get User Segments",
					"action": "Get user segments",
					"description": "Endpoint to list user segments.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/segments/users"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /segments/accounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Segments"
					],
					"operation": [
						"Get Account Segments"
					]
				}
			}
		},
		{
			"displayName": "GET /segments/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Segments"
					],
					"operation": [
						"Get User Segments"
					]
				}
			}
		},
];
