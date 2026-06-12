import type { INodeProperties } from 'n8n-workflow';

export const eventsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Events"
					]
				}
			},
			"options": [
				{
					"name": "Get Events",
					"value": "Get Events",
					"action": "Get events",
					"description": "Endpoint to list events.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/events"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /events",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Events"
					],
					"operation": [
						"Get Events"
					]
				}
			}
		},
];
