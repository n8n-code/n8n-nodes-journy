import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class JournyApi implements ICredentialType {
        name = 'N8nDevJournyApi';

        displayName = 'Journy API';

        icon: Icon = { light: 'file:../nodes/Journy/journy.png', dark: 'file:../nodes/Journy/journy.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.journy.io',
                        required: true,
                        placeholder: 'https://api.journy.io',
                        description: 'The base URL of your Journy API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
