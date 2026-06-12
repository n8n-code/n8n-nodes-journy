import type { INodeProperties } from 'n8n-workflow';

export const usersDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					]
				}
			},
			"options": [
				{
					"name": "Link",
					"value": "Link",
					"action": "Link web activity to user",
					"description": "💡 You don't need to use this endpoint if you use our JavaScript snippet in your application.\n\nThis endpoint is used to link web activity to a user in your application. This will help you discover which channels and campaigns work best.\n\nWhen our JavaScript snippet is embedded on your website, blog or landing pages, a cookie named \"__journey\" will be set.\n\nThis will only work if your website and application are under the same top level domain.\n\nWebsite, blog or landing pages\n* www.my-domain.tld\n* blog.my-domain.tld\n* landing-page.my-domain.tld\n\nApplication\n* app.my-domain.tld\n\nThe cookie on my-domain.tld will also be send to your app domain.\n\nYou should call this endpoint after the user succesfully logged in (so that you know the user's ID). Use the value of the cookie as device ID.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/link"
						}
					}
				},
				{
					"name": "Delete User",
					"value": "Delete User",
					"action": "Delete user",
					"description": "Endpoint to delete a user.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users"
						}
					}
				},
				{
					"name": "Upsert User",
					"value": "Upsert User",
					"action": "Create or update user",
					"description": "Endpoint to create or update a user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/upsert"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /link",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Link"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Device ID",
			"name": "deviceId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "deviceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Link"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identification",
			"name": "identification",
			"type": "json",
			"default": "{}",
			"description": "User identification requires a userId, email or both",
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
						"Users"
					],
					"operation": [
						"Link"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Delete User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identification",
			"name": "identification",
			"type": "json",
			"default": "{}",
			"description": "User identification requires a userId, email or both",
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
						"Users"
					],
					"operation": [
						"Delete User"
					]
				}
			}
		},
		{
			"displayName": "POST /users/upsert",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Upsert User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Identification",
			"name": "identification",
			"type": "json",
			"default": "{}",
			"description": "User identification requires a userId, email or both",
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
						"Users"
					],
					"operation": [
						"Upsert User"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"type": "json",
			"default": "{}",
			"description": "The properties being set, possible values are strings, booleans, numbers and datetimes (ISO 8601)",
			"routing": {
				"send": {
					"property": "properties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Upsert User"
					]
				}
			}
		},
];
