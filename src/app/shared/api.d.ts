type FormList = {
    data: [
        {
            id: number,
            title: string,
            type: string,
            min: number,
            max: number,
            max_length: number,
            is_required: true,
            order: number,
            created_at: string,
            updated_at: string
        }
    ],
    meta: {
        page: number,
        per_page: number,
        total_items_count: number,
        pages_count: number,
        order_by: string,
        order_direction: string,
        search: string
    }
};

type Forms = {
    data: [
        {
            id: number,
            user_id: number,
            type: string,
            form_field_values: [
                {
                    id: number,
                    form_field_id: number,
                    type: string,
                    value: string,
                    created_at: string,
                    updated_at: string
                }
            ],
            created_at: string,
            updated_at: string
        }
    ],
    meta: {
        page: number,
        per_page: number,
        total_items_count: number,
        pages_count: number,
        order_by: string,
        order_direction: string,
        search: string
    }
};

type Form = {
    data: {
        id: number,
        user_id: number,
        type: string,
        form_field_values: [
            {
                id: number,
                form_field_id: number,
                type: string,
                value: string,
                created_at: string,
                updated_at: string
            }
        ],
        created_at: string,
        updated_at: string
    }
};

type CreateFormBody = {
    form_field_values: Array<{
        form_field_id: number,
        value: string
    }>
};

type FormValues = {
    id: number,
    title: string,
    type: string,
    min: number,
    max: number,
    max_length: number,
    is_required: true,
    order: number,
    created_at: string,
    updated_at: string
};

type Errors = {
    error: {
        errors: [{
            code: null,
            id: string,
            meta: [{
                description: string
            }],
            status: number,
            title: string,
        }]
    }
};
