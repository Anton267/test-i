type Tokens = { 'access_token': string; };

type User = {
    user: {
        id: number,
        email: string,
        name: string,
        is_active: boolean,
        type: string,
        created_at: string,
        updated_at: string
    };
    access_token: string;
    expires_in: number;
    refresh_in: number;
    token_type: string;
};

type Logout = { message_id: string, message: string };
