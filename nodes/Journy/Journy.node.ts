import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { usersDescription } from './resources/users';
import { accountsDescription } from './resources/accounts';
import { trackDescription } from './resources/track';
import { propertiesDescription } from './resources/properties';
import { eventsDescription } from './resources/events';
import { segmentsDescription } from './resources/segments';
import { websitesDescription } from './resources/websites';
import { validationDescription } from './resources/validation';

export class Journy implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Journy',
                name: 'N8nDevJourny',
                icon: { light: 'file:./journy.png', dark: 'file:./journy.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Welcome',
                defaults: { name: 'Journy' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevJournyApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Users",
					"value": "Users",
					"description": "Endpoints for creating, deleting or updating users."
				},
				{
					"name": "Accounts",
					"value": "Accounts",
					"description": "Endpoints for creating, deleting or updating accounts."
				},
				{
					"name": "Track",
					"value": "Track",
					"description": "Endpoints for tracking events."
				},
				{
					"name": "Properties",
					"value": "Properties",
					"description": "Endpoints for listing properties."
				},
				{
					"name": "Events",
					"value": "Events",
					"description": "Endpoints for listing events."
				},
				{
					"name": "Segments",
					"value": "Segments",
					"description": "Endpoints for reading user and account segments"
				},
				{
					"name": "Websites",
					"value": "Websites",
					"description": "Endpoints for managing websites."
				},
				{
					"name": "Validation",
					"value": "Validation",
					"description": "Endpoints for validating API keys."
				}
			],
			"default": ""
		},
		...usersDescription,
		...accountsDescription,
		...trackDescription,
		...propertiesDescription,
		...eventsDescription,
		...segmentsDescription,
		...websitesDescription,
		...validationDescription
                ],
        };
}
