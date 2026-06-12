import type { INodeProperties } from 'n8n-workflow';

export const accountsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					]
				}
			},
			"options": [
				{
					"name": "Delete Account",
					"value": "Delete Account",
					"action": "Delete account",
					"description": "Endpoint used to delete an account.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/accounts"
						}
					}
				},
				{
					"name": "Upsert Account",
					"value": "Upsert Account",
					"action": "Create or update account",
					"description": "Endpoint used to create or update an account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/upsert"
						}
					}
				},
				{
					"name": "Add User To Account",
					"value": "Add User To Account",
					"action": "Add users to an account",
					"description": "You can add up to 100 users to an account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/users/add"
						}
					}
				},
				{
					"name": "Remove User From Account",
					"value": "Remove User From Account",
					"action": "Remove user from account",
					"description": "You can remove up to 100 users from an account.\n\nWhen removing a user, the user will still be stored in journy.io, but marked as \"removed\".\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/users/remove"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /accounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Delete Account"
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
			"description": "Account identification requires an accountId, domain or both",
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
						"Accounts"
					],
					"operation": [
						"Delete Account"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/upsert",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Upsert Account"
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
			"description": "Account identification requires an accountId, domain or both",
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
						"Accounts"
					],
					"operation": [
						"Upsert Account"
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
						"Accounts"
					],
					"operation": [
						"Upsert Account"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/users/add",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Add User To Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account",
			"name": "account",
			"type": "json",
			"default": "{}",
			"description": "Account identification requires an accountId, domain or both",
			"routing": {
				"send": {
					"property": "account",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Add User To Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Users",
			"name": "users",
			"type": "json",
			"default": "[\n  {\n    \"identification\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "users",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Add User To Account"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/users/remove",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Remove User From Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account",
			"name": "account",
			"type": "json",
			"default": "{}",
			"description": "Account identification requires an accountId, domain or both",
			"routing": {
				"send": {
					"property": "account",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Remove User From Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Users",
			"name": "users",
			"type": "json",
			"default": "[\n  {\n    \"identification\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "users",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Remove User From Account"
					]
				}
			}
		},
];
