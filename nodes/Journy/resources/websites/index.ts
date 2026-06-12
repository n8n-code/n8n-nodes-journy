import type { INodeProperties } from 'n8n-workflow';

export const websitesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Websites"
					]
				}
			},
			"options": [
				{
					"name": "Get Tracking Snippet",
					"value": "Get Tracking Snippet",
					"action": "Get snippet for a website",
					"description": "Endpoint used to get a snippet for a website.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tracking/snippet"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /tracking/snippet",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Websites"
					],
					"operation": [
						"Get Tracking Snippet"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": "The domain you want to receive a snippet for",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Websites"
					],
					"operation": [
						"Get Tracking Snippet"
					]
				}
			}
		},
];
