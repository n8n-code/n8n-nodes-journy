import type { INodeProperties } from 'n8n-workflow';

export const trackDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Track"
					]
				}
			},
			"options": [
				{
					"name": "Track Event",
					"value": "Track Event",
					"action": "Track event",
					"description": "Endpoint used to track an event for a user or an account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/track"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /track",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Track"
					],
					"operation": [
						"Track Event"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identification",
			"name": "identification",
			"type": "json",
			"default": "{\n  \"account\": {},\n  \"user\": {}\n}",
			"description": "Event identification requires a user, account or both",
			"routing": {
				"send": {
					"property": "identification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Track"
					],
					"operation": [
						"Track Event"
					]
				}
			}
		},
		{
			"displayName": "Metadata",
			"name": "metadata",
			"type": "json",
			"default": "{}",
			"description": "Event metadata, possible values are strings, booleans, numbers and datetimes (ISO 8601)",
			"routing": {
				"send": {
					"property": "metadata",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Track"
					],
					"operation": [
						"Track Event"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Track"
					],
					"operation": [
						"Track Event"
					]
				}
			}
		},
		{
			"displayName": "Triggered At",
			"name": "triggeredAt",
			"type": "string",
			"default": "",
			"description": "If left blank this defaults to the current datetime",
			"routing": {
				"send": {
					"property": "triggeredAt",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Track"
					],
					"operation": [
						"Track Event"
					]
				}
			}
		},
];
